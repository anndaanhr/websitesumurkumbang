"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Profil Desa", path: "/profil" },
    { name: "Wisata Desa", path: "/wisata" },
    { name: "Berita & Info", path: "/berita" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${isOpen ? "bg-[#0a0a0a]/95 backdrop-blur-xl" : ""}`}>
      <div className="flex justify-between items-center w-full">
        <Link href="/" className="flex items-center gap-3 group z-50">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(202,138,4,0.4)] shrink-0">
             <img src="/images/images/icons/logolamsel.png" alt="Logo Lamsel" className="w-full h-full object-contain rounded-full" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-lg md:text-xl font-heading font-bold tracking-tight leading-none text-white group-hover:text-accent transition-colors">Sumur Kumbang</span>
            <span className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] font-sans mt-1">Desa Wisata</span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 list-none text-sm font-medium text-text-muted">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`transition-colors duration-300 hover:text-text-main ${
                  pathname === link.path ? "text-accent" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen py-6 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col items-center gap-6 list-none text-base font-medium text-text-muted">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`transition-colors duration-300 block hover:text-text-main ${
                  pathname === link.path ? "text-accent" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
