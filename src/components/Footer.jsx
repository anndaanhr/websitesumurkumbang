"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();



  return (
    <footer className="mt-32 py-10 md:py-12 border-t border-white/10 glass-panel relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <div className="text-center md:text-left text-white/50 text-xs md:text-sm order-2 md:order-1">
          <p>&copy; {new Date().getFullYear()} Desa Sumur Kumbang. <br className="md:hidden"/>Harmoni Alam & Budaya.</p>
        </div>
        
        <div className="flex items-center gap-3 md:gap-4 group order-1 md:order-2">
          <div className="text-right">
            <p className="text-[8px] md:text-[10px] font-sans uppercase tracking-[0.2em] md:tracking-widest text-white/40 mb-0.5 md:mb-1">
              Developed & Designed by
            </p>
            <p className="text-xs md:text-sm font-semibold text-white/80 group-hover:text-accent transition-colors">
              Tim KKN Unila Sumur Kumbang
            </p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 relative overflow-hidden rounded-full border-2 border-white/10 group-hover:border-accent transition-colors bg-white p-1 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(202,138,4,0.3)]">
            <img 
              src="/images/footer/logokkn.png" 
              alt="Logo KKN Unila" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
