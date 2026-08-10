import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css"; // Wajib untuk react-leaflet
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "600", "700", "800"], style: ["normal", "italic"] });

export const metadata = {
  title: "Desa Wisata Sumur Kumbang | Pesona Alam & Kearifan Lokal",
  description: "Website resmi Desa Wisata Sumur Kumbang, Kalianda, Lampung Selatan. Jelajahi keindahan alam Gunung Rajabasa, sejarah, dan budaya lokal.",
  keywords: ["Desa Sumur Kumbang", "Wisata Sumur Kumbang", "Kalianda", "Lampung Selatan", "Gunung Rajabasa", "Desa Wisata", "Teropong Kota Kalianda", "Pencak Silat TTKDH", "Pemerintahan Desa"],
  authors: [{ name: "Desa Sumur Kumbang" }],
  openGraph: {
    title: "Desa Wisata Sumur Kumbang",
    description: "Portal resmi Desa Wisata Sumur Kumbang, Kalianda, Lampung Selatan.",
    url: "https://sumurkumbang.my.id",
    siteName: "Desa Sumur Kumbang",
    images: [
      {
        url: "/images/background/gapuradesa.jpeg",
        width: 1200,
        height: 630,
        alt: "Gapura Desa Sumur Kumbang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable} font-sans antialiased bg-[#0a0a0a] text-white min-h-screen relative`}>
        {/* Latar Belakang Sinematik Global */}
        <div className="fixed inset-0 z-[-2]">
          <img 
            src="/images/background/backgriundbaru.jpeg" 
            alt="Pemandangan Desa" 
            className="w-full h-full object-cover opacity-60" 
          />
        </div>
        
        {/* Gradient Overlay untuk meredupkan foto agar teks terbaca */}
        <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a] pointer-events-none"></div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
