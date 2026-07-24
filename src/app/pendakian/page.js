import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Map as MapIcon } from "lucide-react";

export default function PendakianPage() {
  return (
    <main className="relative z-10">
      <PageHeader 
        title="Ekspedisi Rajabasa" 
        subtitle="Mempersiapkan fisik dan mental sebelum menembus rimbunnya belantara Sang Gunung." 
      />

      <section className="py-24 px-8">
        <div className="max-w-[1000px] mx-auto space-y-10">
          
          <Reveal className="bg-red-950/40 backdrop-blur-md p-10 rounded-[2rem] border border-red-500/30 text-center shadow-[0_0_30px_rgba(220,38,38,0.1)]">
            <h3 className="font-sans font-bold text-sm text-red-400 mb-4 uppercase tracking-[0.2em]">Peringatan Keselamatan</h3>
            <p className="font-sans font-light text-red-100/80 leading-relaxed text-lg">
              Jalur atas <strong>sangat minim sumber air</strong>. Wajib memastikan persediaan logistik cair dari basecamp. Sangat disarankan mengenakan pakaian tertutup rapat demi menghindari pacet. Alam tidak menerima sampahmu—bawalah kembali turun.
            </p>
          </Reveal>

          <Reveal className="bg-accent/10 backdrop-blur-md p-10 rounded-[2rem] border border-accent/30 text-center shadow-[0_0_30px_rgba(196,164,124,0.1)] mb-10">
            <h3 className="font-sans font-bold text-sm text-accent mb-4 uppercase tracking-[0.2em]">Navigasi Cerdas</h3>
            <p className="font-sans font-light text-white/80 leading-relaxed text-lg mb-8">
              Pindai QR Code di Basecamp atau klik tombol di bawah untuk membuka <strong>Sistem Pelacakan Geospasial (Live Tracking)</strong> secara langsung di layar penuh (Aplikasi Web).
            </p>
            <Link href="/pendakian/tracker" className="inline-flex items-center gap-3 bg-accent text-black font-semibold px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 shadow-xl">
              <MapIcon size={20} />
              Buka Peta Live Tracking
            </Link>
          </Reveal>

          <div className="flex flex-col md:flex-row gap-10">
            <Reveal className="flex-1 glass-card">
              <h2 className="text-3xl font-semibold mb-8 text-accent border-b border-white/10 pb-6">Protokol SIMAKSI</h2>
              
              <div className="space-y-6 font-sans font-light text-white/80">
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span>Syarat Registrasi</span>
                  <span className="text-white font-medium text-right">Tahan KTP Asli</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span>Kontribusi Alam</span>
                  <span className="text-white font-medium text-right">Rp 15k - 20k / Org</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span>Estimasi Durasi</span>
                  <span className="text-white font-medium text-right">6 - 7 Jam (Normal)</span>
                </div>
                <div className="flex justify-between pb-4">
                  <span>Pemandu Rimba</span>
                  <span className="text-accent font-medium text-right">Direkomendasikan</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="flex-1 glass-card" delay={150}>
              <h2 className="text-3xl font-semibold mb-8 text-accent border-b border-white/10 pb-6">Fasilitas Basecamp</h2>
              <ul className="space-y-6 font-sans font-light text-white/80">
                <li className="flex items-center gap-6">
                  <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-xl">🅿️</span> 
                  Area Parkir Kendaraan
                </li>
                <li className="flex items-center gap-6">
                  <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-xl">🕌</span> 
                  Musala Tenang
                </li>
                <li className="flex items-center gap-6">
                  <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-xl">💧</span> 
                  Fasilitas MCK & Air Bersih
                </li>
                <li className="flex items-center gap-6">
                  <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-xl">🏕️</span> 
                  Area Rekondisi (Rest Area)
                </li>
              </ul>
            </Reveal>
          </div>

        </div>
      </section>
    </main>
  );
}
