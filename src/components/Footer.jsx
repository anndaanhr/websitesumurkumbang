"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Sembunyikan Footer di halaman live tracking
  if (pathname === "/pendakian/tracker") return null;

  return (
    <footer className="mt-32 py-12 text-center text-white/50 text-sm border-t border-white/10 glass-panel relative z-10">
      <p>&copy; {new Date().getFullYear()} Desa Sumur Kumbang. Harmoni Alam & Budaya.</p>
    </footer>
  );
}
