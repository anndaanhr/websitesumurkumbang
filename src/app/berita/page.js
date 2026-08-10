import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Script from "next/script";

export default function BeritaPage() {
  return (
    <main className="relative z-10">
      <PageHeader 
        title="Berita & Info" 
        subtitle="Dapatkan informasi dan kabar terbaru langsung dari Desa Sumur Kumbang." 
      />

      <section className="py-24 px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          
          <Reveal>
            <p className="font-sans text-white/80 max-w-2xl mx-auto mb-16 font-light leading-relaxed text-lg">
              Semua kabar terbaru yang diunggah ke Instagram resmi desa kami akan otomatis muncul di bawah ini.
            </p>
          </Reveal>

          <Reveal delay={200}>
            {/* Widget Elfsight Instagram Feed */}
            <div className="w-full min-h-[500px] bg-white/5 border border-white/10 rounded-[2rem] p-4 md:p-8 overflow-hidden">
              <div className="elfsight-app-d05c844f-2837-4581-9ce9-2f8a2a6795d5" data-elfsight-app-lazy></div>
            </div>
          </Reveal>

          {/* Script Elfsight dimuat secara lazy agar tidak membebani performa awal website */}
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

        </div>
      </section>
    </main>
  );
}
