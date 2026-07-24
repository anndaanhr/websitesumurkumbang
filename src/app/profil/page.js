import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export default function ProfilPage() {
  return (
    <main className="relative z-10">
      <PageHeader 
        title="Profil Desa" 
        subtitle="Sejarah singkat dan informasi mengenai pemerintahan Desa Sumur Kumbang." 
      />

      <section className="py-24 px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-[1200px] mx-auto">
          
          <Reveal className="w-full lg:w-2/3 glass-card">
            <h2 className="text-4xl text-accent font-semibold mb-12 border-b border-white/10 pb-6">Sejarah Desa</h2>
            
            <div className="border-l border-white/20 pl-10 relative space-y-16">
              
              <div className="relative">
                <div className="absolute -left-[2.85rem] top-1 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_var(--color-accent)]"></div>
                <span className="text-white/50 font-sans text-xs font-bold tracking-[0.2em] uppercase mb-2 block">1745 - Jejak Awal</span>
                <h3 className="text-3xl font-semibold mb-4 text-white">Kedatangan Syeh Mansyur</h3>
                <p className="font-sans text-white/70 font-light leading-relaxed">
                  Sejarah awal Desa Sumur Kumbang diyakini bermula sekitar tahun 1745 dengan kedatangan tokoh penyebar agama Islam bernama Syeh Maulana Mansyur. Beliau datang ke kawasan lereng Gunung Rajabasa ini dengan tujuan untuk bertapa dan mendekatkan diri kepada Sang Pencipta.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[2.85rem] top-1 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_var(--color-accent)]"></div>
                <span className="text-white/50 font-sans text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Asal Usul Nama</span>
                <h3 className="text-3xl font-semibold mb-4 text-white">Legenda Sumur Kumbang</h3>
                <p className="font-sans text-white/70 font-light leading-relaxed">
                  Konon, saat Syeh Mansyur singgah bersama anak/cucunya yang sedang kehausan, beliau tidak dapat menemukan sumber air. Beliau lalu menancapkan tongkatnya ke tanah. Saat dicabut, keluarlah mata air yang melimpah dari lubang tersebut dan menjadi sebuah sumur. Karena lokasi sumur itu berada di dekat rimbunan pohon kembang, kawasan ini akhirnya dikenal dengan nama <strong>Sumur Kembang</strong>, yang seiring berjalannya waktu pelafalannya berubah menjadi <strong>Sumur Kumbang</strong>.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[2.85rem] top-1 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_var(--color-accent)]"></div>
                <span className="text-white/50 font-sans text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Masa Kini</span>
                <h3 className="text-3xl font-semibold mb-4 text-white">Desa Wisata & Budaya</h3>
                <p className="font-sans text-white/70 font-light leading-relaxed">
                  Kini, Desa Sumur Kumbang menjadi tempat tinggal yang rukun bagi masyarakat dari berbagai etnis, khususnya Lampung, Jawa, dan Sunda. Tradisi leluhur seperti Upacara Adat <strong>Ruwat Bumi (Peperahan)</strong> di setiap bulan Muharram terus dilestarikan sebagai wujud syukur atas hasil bumi dan kerukunan. Petilasan Syeh Mansyur juga masih dijaga dengan baik hingga saat ini sebagai destinasi wisata religi.
                </p>
              </div>
              
            </div>
          </Reveal>

          <Reveal className="w-full lg:w-1/3" delay={150}>
            <div className="glass-card text-center sticky top-32">
              <h2 className="text-2xl font-semibold mb-8 text-accent">Pemerintahan Desa</h2>
              <div className="w-24 h-24 bg-white/5 rounded-[2rem] mx-auto mb-6 overflow-hidden border border-white/10 backdrop-blur-md shadow-xl">
                <img src="/images/struktur/pakkades.png" alt="Kepala Desa Sumur Kumbang" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Kepala Desa</h3>
              <p className="text-white/50 font-sans text-xs uppercase tracking-widest">Pemerintah Desa Sumur Kumbang</p>
            </div>
          </Reveal>

        </div>
      </section>
    </main>
  );
}
