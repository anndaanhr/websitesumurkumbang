"use client";

import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker, useMap } from "react-leaflet";
import L from "leaflet";
import { Navigation, AlertTriangle } from "lucide-react";

// Waypoints / Pos Pendakian Gunung Rajabasa (Koordinat Asli)
const WAYPOINTS = [
  { id: 1, name: "Basecamp Pendakian", desc: "Titik awal pendaftaran dan pengecekan logistik.", coords: [-5.752744, 105.610962] },
  { id: 2, name: "Basecamp (Via Teropong Kota)", desc: "Jalur alternatif dengan pemandangan arah kota.", coords: [-5.755019, 105.610703] },
  { id: 3, name: "Pos 1", desc: "Tempat istirahat pertama, rute landai.", coords: [-5.770178, 105.613159] },
  { id: 4, name: "Pos 2", desc: "Area bebatuan, cocok untuk mengambil napas sejenak.", coords: [-5.776149, 105.619527] },
  { id: 5, name: "Pos 3", desc: "Kawasan rimbun dengan kanopi pohon yang rapat.", coords: [-5.776391, 105.621334] },
  { id: 6, name: "Pos 4", desc: "Jalur mulai menanjak curam, persiapkan tenaga ekstra.", coords: [-5.777487, 105.624756] },
  { id: 7, name: "Pos 5", desc: "Pos terakhir sebelum puncak, sering digunakan untuk camp.", coords: [-5.781475, 105.628325] },
  { id: 8, name: "Puncak Rajabasa", desc: "Puncak kawah vulkanik dengan panorama luar biasa.", coords: [-5.779888, 105.631865] }
];

// Garis rute dari Basecamp ke Puncak
const ROUTE_LINE = WAYPOINTS.map(wp => wp.coords);

// Ikon kustom untuk penanda lokasi GPS (Titik Biru)
const createCustomIcon = (color) => {
  return L.divIcon({
    className: "custom-icon",
    html: `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.5);"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });
};

// Rumus Haversine untuk menghitung jarak antara 2 koordinat (dalam meter)
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Radius bumi dalam meter
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return Math.round(R * c);
}

// Komponen kecil untuk mengarahkan kamera ke lokasi pengguna saat pertama kali terdeteksi
function FlyToUser({ location }) {
  const map = useMap();
  const [centered, setCentered] = useState(false);

  useEffect(() => {
    if (location && !centered) {
      map.flyTo(location, 14, { animate: true, duration: 1.5 });
      setCentered(true);
    }
  }, [location, centered, map]);

  return null;
}

export default function MapTracker() {
  const [userLocation, setUserLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [nextPos, setNextPos] = useState(WAYPOINTS[0]); // Default ke Basecamp 1
  const [distanceToNext, setDistanceToNext] = useState(null);

  // Mengaktifkan GPS Live Tracking
  useEffect(() => {
    if (!navigator.geolocation) {
      setErrorMsg("Browser Anda tidak mendukung GPS.");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);

        // Cari Pos terdekat selanjutnya (Logika Sederhana)
        // Cari Pos pertama yang letaknya "di depan" pengguna, atau untuk simpelnya:
        // Hitung jarak ke Pos 1, jika sangat dekat, ganti target ke Pos 2
        let currentTarget = nextPos;
        const dist = getDistance(latitude, longitude, currentTarget.coords[0], currentTarget.coords[1]);
        
        // Jika jarak ke target kurang dari 50 meter, arahkan ke pos berikutnya
        if (dist < 50 && currentTarget.id < WAYPOINTS.length) {
          currentTarget = WAYPOINTS[currentTarget.id];
          setNextPos(currentTarget);
        }
        
        // Hitung jarak ulang jika target berubah
        const updatedDist = getDistance(latitude, longitude, currentTarget.coords[0], currentTarget.coords[1]);
        setDistanceToNext(updatedDist);
      },
      (err) => {
        setErrorMsg("Gagal mendapatkan lokasi. Pastikan GPS HP menyala.");
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 15000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [nextPos]);

  return (
    <div className="relative w-full h-full">
      {/* Container Leaflet */}
      <MapContainer 
        center={WAYPOINTS[0].coords} 
        zoom={15} 
        style={{ height: "100%", width: "100%", zIndex: 0 }}
        zoomControl={true}
      >
        <FlyToUser location={userLocation} />

        {/* Peta Citra Satelit Resolusi Tinggi (ESRI World Imagery) */}
        <TileLayer
          attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />

        {/* Gambar Garis Rute Utama (Merah) */}
        <Polyline positions={ROUTE_LINE} color="#dc2626" weight={3} dashArray="5, 10" />

        {/* Penanda Waypoints / Pos */}
        {WAYPOINTS.map((wp) => (
          <CircleMarker key={wp.id} center={wp.coords} radius={7} color="#c4a47c" fillColor="#0a0a0a" fillOpacity={1}>
            <Popup>
              <div className="text-center p-1 max-w-[150px]">
                <strong className="block text-sm mb-1">{wp.name}</strong>
                <span className="text-xs text-gray-500 leading-tight">{wp.desc}</span>
              </div>
            </Popup>
          </CircleMarker>
        ))}

        {/* Garis Petunjuk Arah (Dari Pengguna ke Target Selanjutnya) */}
        {userLocation && nextPos && (
          <Polyline 
            positions={[userLocation, nextPos.coords]} 
            color="#3b82f6" 
            weight={3} 
            dashArray="10, 15" 
            className="animate-pulse"
          />
        )}

        {/* Penanda Lokasi Pengguna (Titik Biru) */}
        {userLocation && (
          <Marker position={userLocation} icon={createCustomIcon("#3b82f6")}>
            <Popup>Lokasi Anda Sekarang</Popup>
          </Marker>
        )}
      </MapContainer>

      {/* Pesan Error GPS */}
      {errorMsg && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-red-900/90 text-white px-4 py-2 rounded-xl text-sm z-[1000] backdrop-blur-md whitespace-nowrap">
          {errorMsg}
        </div>
      )}

      {/* Floating Info Panel di bawah layar */}
      <div className="absolute bottom-6 left-6 right-6 z-[1000]">
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/50 text-xs font-sans tracking-widest uppercase mb-1">Target Selanjutnya</p>
              <h3 className="text-xl font-semibold text-white">{nextPos.name}</h3>
            </div>
            <div className="bg-accent/20 text-accent p-3 rounded-2xl">
              <Navigation size={24} />
            </div>
          </div>
          
          <div className="flex items-end gap-2 mb-4">
            <span className="text-4xl font-bold font-heading text-white">
              {distanceToNext !== null ? (distanceToNext > 1000 ? (distanceToNext / 1000).toFixed(1) : distanceToNext) : "..."}
            </span>
            <span className="text-white/50 text-lg mb-1">
              {distanceToNext !== null ? (distanceToNext > 1000 ? "KM" : "Meter") : ""}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
