"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Karena Leaflet sangat bergantung pada objek 'window' (hanya tersedia di browser),
// kita harus merendernya secara dinamis hanya di Client-Side
const MapTracker = dynamic(() => import("@/components/MapTracker"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center bg-[#0a0a0a]">
      <div className="text-accent animate-pulse text-xl font-serif">Memuat Satelit...</div>
    </div>
  ),
});

export default function TrackerPage() {
  return (
    <main className="h-screen w-full relative overflow-hidden bg-[#0a0a0a]">
      {/* Tombol Kembali (Z-Index tinggi agar di atas Peta) */}
      <div className="absolute top-6 left-6 z-[1000]">
        <Link href="/pendakian" className="flex items-center gap-2 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/10 hover:bg-black/70 transition-colors">
          <ArrowLeft size={18} />
          <span className="font-sans text-sm font-medium">Website Desa</span>
        </Link>
      </div>

      {/* Komponen Peta Fullscreen */}
      <MapTracker />
    </main>
  );
}
