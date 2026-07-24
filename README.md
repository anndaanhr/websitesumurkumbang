# 🏔️ DOKUMENTASI RESMI: SISTEM INFORMASI & PORTAL PARIWISATA DESA SUMUR KUMBANG
*(Official Repository - Program KKN)*

[![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen.svg)](#)
[![Tech Stack](https://img.shields.io/badge/Tech_Stack-HTML5_%7C_CSS3_%7C_Vanilla_JS-blue.svg)](#)
[![Design](https://img.shields.io/badge/Design_Language-Neo--Glass_Bento-ff69b4.svg)](#)
[![License](https://img.shields.io/badge/License-MIT-gray.svg)](#)

---

## 📑 DAFTAR ISI (TABLE OF CONTENTS)
1. [Ringkasan Eksekutif (Executive Summary)](#1-ringkasan-eksekutif-executive-summary)
2. [Latar Belakang & Konteks Geografis](#2-latar-belakang--konteks-geografis)
3. [Filosofi UI/UX & Sistem Desain (Neo-Glass Bento)](#3-filosofi-uiux--sistem-desain-neo-glass-bento)
4. [Arsitektur Sistem & Keputusan Teknologi (Tech Stack)](#4-arsitektur-sistem--keputusan-teknologi-tech-stack)
5. [Bedah Fitur Ekstensif (Comprehensive Feature Breakdown)](#5-bedah-fitur-ekstensif-comprehensive-feature-breakdown)
   - 5.1. Beranda (Dashboard Utama)
   - 5.2. Halaman Profil Desa & Pemerintahan
   - 5.3. Portal Resmi Pendakian Gunung Rajabasa
   - 5.4. Etalase Wisata Teropong Kota
   - 5.5. Ensiklopedia Budaya (Ruwat Bumi & Peperahan)
   - 5.6. Modul Pelayanan Administrasi Publik
6. [Struktur Direktori Proyek](#6-struktur-direktori-proyek)
7. [Strategi Optimasi Mesin Pencari (SEO)](#7-strategi-optimasi-mesin-pencari-seo)
8. [Panduan Pengembangan Lanjutan (Developer Guide)](#8-panduan-pengembangan-lanjutan-developer-guide)
9. [Buku Panduan Perangkat Desa (Handover Manual)](#9-buku-panduan-perangkat-desa-handover-manual)
10. [Protokol Deployment (Hosting)](#10-protokol-deployment-hosting)

---

## 1. RINGKASAN EKSEKUTIF (EXECUTIVE SUMMARY)
Proyek ini merupakan luaran (output) utama dari Program Kuliah Kerja Nyata (KKN) yang didedikasikan untuk **Desa Sumur Kumbang, Kecamatan Kalianda, Kabupaten Lampung Selatan**. Repositori ini berisi kode sumber (source code) lengkap untuk portal web statis yang berfungsi ganda sebagai profil pemerintahan desa, ensiklopedia budaya, dan yang terpenting: **Portal Resmi Registrasi dan Informasi Basecamp Pendakian Gunung Rajabasa**.

Proyek ini direkayasa secara khusus untuk mencapai 100/100 pada skor *Lighthouse Google* (Performa, Aksesibilitas, Best Practices, dan SEO), memastikan aksesibilitas maksimum di daerah dengan latensi jaringan tinggi, serta dioptimalkan untuk perangkat *mobile* kelas bawah (low-end devices).

---

## 2. LATAR BELAKANG & KONTEKS GEOGRAFIS
Pengembangan website ini tidak terlepas dari kekayaan historis dan potensi geografis Desa Sumur Kumbang:
*   **Asal-Usul Nama (Legenda Syeh Mansyur):** Mengabadikan kisah spiritual kedatangan Syeh Mansyur, sebuah narasi kuat untuk wisata religi.
*   **Demografi & Sejarah (1930-an):** Mengakomodasi narasi pluralisme (Jawa, Sunda, Lampung) pasca-migrasi era kolonial Belanda.
*   **Topografi Pegunungan:** Terletak 5 km dari exit Tol Kalianda, berbatasan langsung dengan kawasan konservasi hutan hujan tropis Gunung Rajabasa.

---

## 3. FILOSOFI UI/UX & SISTEM DESAIN (NEO-GLASS BENTO)
Kami menolak penggunaan *template* usang yang sering dipakai institusi pemerintahan. Desain direkayasa dengan pendekatan **"Neo-Glass Bento"**, sebuah sintesis dari tiga mazhab desain global 2024:

### A. Bento Grid Architecture
*   **Konsep:** Memecah hierarki informasi yang rumit (pemerintahan, wisata, syarat KTP) ke dalam kompartemen-kompartemen asimetris (kartu) bersudut melengkung (*border-radius: 24px*).
*   **Fungsi:** Memaksa pemindaian visual (visual scanning) yang efisien bagi pengguna, menyerupai tata letak *dashboard* iOS atau Windows 11 modern.

### B. Immersive Glassmorphism
*   **Spesifikasi CSS:** Menggunakan kombinasi `background: rgba(255, 255, 255, 0.1)`, `backdrop-filter: blur(16px)`, dan `border: 1px solid rgba(255, 255, 255, 0.2)`.
*   **Psikologi Desain:** Kartu-kartu tembus pandang ini diaplikasikan di atas foto alam resolusi tinggi (Gunung Rajabasa/Laut Kalianda). Hal ini menciptakan kesan kedalaman (depth) dan kemewahan (premium feel) layaknya website resor internasional.

### C. Neobrutalism Interactivity
*   **Aksen:** Tipografi raksasa (`font-weight: 800`), kontras tinggi pada tombol *Call-to-Action*, dan animasi *hover state* yang memantul (*bouncy spring physics* via `cubic-bezier` di CSS).
*   **Tujuan:** Memberikan karakter berjiwa muda yang berani dan energik, sangat menargetkan demografi pendaki gunung dan wisatawan milenial.

### D. Panduan Warna Dasar (Color Palette Tokens)
*   🟢 **Forest Green (`#2D6A4F`):** Identitas alam, hutan, dan perkebunan kopi.
*   🔵 **Ocean Blue (`#0077B6`):** Visibilitas perairan Teluk Lampung dari bukit.
*   🟡 **Harvest Gold (`#FFB703`):** Simbol agraris (padi) dan kehangatan gotong royong.
*   ⚪ **Frost White (`#F8F9FA`):** Latar belakang netral peningkat rasio kontras baca.

---

## 4. ARSITEKTUR SISTEM & KEPUTUSAN TEKNOLOGI (TECH STACK)
Sistem ini menggunakan arsitektur **JAMstack** murni (minus *API* eksternal untuk menghindari kompleksitas).

### Spesifikasi Tumpukan Teknologi
1.  **Struktur DOM:** `HTML5` Semantik. (Menggunakan tag `<article>`, `<section>`, `<nav>`, `<aside>` untuk aksesibilitas dan SEO).
2.  **Pemodelan Gaya:** Vanilla `CSS3` (Menggunakan CSS Custom Properties / Variables untuk *theming* terpusat, Flexbox, dan Grid untuk *layouting*).
3.  **Logika Sisi Klien:** Vanilla `JavaScript` (ES6+). Digunakan secara minimalis (Hanya untuk pengamat persimpangan / *Intersection Observer*, interaksi *accordion*, dan navigasi *mobile*).

### Justifikasi Arsitektur (Mengapa Tanpa Framework?)
*   **Zero Build Step:** Tidak memerlukan Node.js, Webpack, Vite, React, atau framework berat lainnya.
*   **Maintainability Jangka Panjang (Handover):** Perangkat Desa Sumur Kumbang (sebagai end-user/pengelola akhir) dapat memodifikasi teks, mengganti foto, atau menambah pengumuman hanya dengan *Text Editor* standar (Notepad) tanpa perlu memahami konsep *Virtual DOM* atau kompilasi *asset*.
*   **Performa Maksimal:** Eksekusi kode secara *native* oleh mesin *browser*, menjamin *First Contentful Paint (FCP)* di bawah 0.8 detik, ideal untuk jaringan 3G/4G di pedesaan.

---

## 5. BEDAH FITUR EKSTENSIF (COMPREHENSIVE FEATURE BREAKDOWN)
Kode sumber dibagi ke dalam 6 modul halaman fungsional. Berikut adalah anatomi dari masing-masing halaman:

### 5.1. Dashboard Utama (`index.html`)
*   **Hero Section:** Komponen visual layar penuh (*viewport height 100vh*). Terdapat rotasi latar belakang antara panorama alam dan budaya.
*   **Sistem Navigasi Ganda:** Navigasi menempel (*sticky navbar*) dengan perilaku perubahan latar belakang dinamis berdasar *scroll position*.
*   **Grid Pilar Utama:** Tiga kartu pintasan yang mengarahkan trafik (traffic routing) ke sub-sistem esensial (Pendakian, Teropong Kota, Budaya).
*   **Data Dinamis (Statis):** Tampilan infografis numerik (statistik penduduk/potensi) dengan animasi perhitungan (*counter animation*).

### 5.2. Profil Desa & Pemerintahan (`profil.html`)
*   **Modul Sejarah (Timeline):** Implementasi garis waktu vertikal (*vertical timeline*) berbasis CSS murni yang menjelaskan kronologi historis (1930 - sekarang).
*   **Matriks Pemerintahan:** Sistem kisi (*grid system*) responsif yang menampilkan profil aparatur desa (Kepala Desa & BPD). Gambar menggunakan penanganan *fallback* jika foto gagal dimuat.

### 5.3. Portal Pendakian Gunung Rajabasa (`pendakian.html`) - *The Core USP*
Ini adalah *Unique Selling Proposition* (USP) utama web. Direkayasa menjadi panduan pendakian komprehensif.
*   **Modul Registrasi:** Menjabarkan Standar Operasional Prosedur (SOP) pendaftaran (SIMAKSI) via Karang Taruna & Pokdarwis.
*   **Rincian Logistik:** Daftar inventaris wajib yang harus dibawa pendaki (penekanan pada masalah krisis air di jalur atas).
*   **Protokol Keamanan & Lingkungan:** Regulasi ketat mengenai pengelolaan sampah plastik dan bahaya pacet/lintah, disajikan dalam *alert boxes* (kotak peringatan).

### 5.4. Etalase Wisata Teropong Kota (`teropong-kota.html`)
*   **Galeri Visual Imersif:** Penggunaan *Masonry Grid* ringan untuk menampilkan keindahan taman bunga dan kolam renang gunung tanpa mengorbankan waktu muat (*load time*).
*   **Tabel Tarif & Aksesibilitas:** Informasi logistik untuk wisatawan keluarga (Harga tiket, jam buka, rute via Google Maps embed).

### 5.5. Ensiklopedia Budaya (`budaya.html`)
*   **Narrative Flow:** Halaman ini menggunakan gaya penceritaan (*storytelling layout*). Teks panjang dipadukan dengan *pull-quotes* (kutipan blok) berukuran besar.
*   **Fokus Tematik:** 
    *   *Ruwat Bumi:* Deskripsi ritual 6 hari Kamis bulan Muharram.
    *   *Peperahan:* Manifestasi visual dari tradisi makan beralas daun pisang sebagai simbol egaliter.

### 5.6. Modul Pelayanan Publik (`layanan.html`)
*   **Arsitektur Accordion:** Informasi syarat administrasi disembunyikan dalam *collapsible panels* (panel buka-tutup) menggunakan `<details>` dan `<summary>` HTML murni. Ini mencegah *cognitive overload* (kelebihan beban kognitif) pada warga yang membaca.
*   **Daftar Prosedur:** SOP KTP, KK, Surat Pengantar Nikah, dan Surat Keterangan Usaha (SKU).

---

## 6. STRUKTUR DIREKTORI PROYEK
Struktur repositori direkayasa agar modular dan intuitif bagi pengembang penerus:

```text
desa-sumur-kumbang/
│
├── index.html              # Entry point utama (Beranda)
├── profil.html             # Modul Sejarah & Pemerintahan
├── pendakian.html          # Portal Basecamp Rajabasa
├── teropong-kota.html      # Katalog Wisata Keluarga
├── budaya.html             # Arsip Ruwat Bumi & Peperahan
├── layanan.html            # Modul Panduan Administrasi Publik
│
├── assets/                 # Manajemen aset statis
│   ├── css/
│   │   ├── style.css       # Inti desain (Variables, Typography, Global)
│   │   ├── bento.css       # Modul layout khusus grid (Opsional, pemecahan modul)
│   │   └── animations.css  # Definisi keyframes untuk micro-interactions
│   │
│   ├── js/
│   │   └── main.js         # Logika interaktivitas UI (Navbar, Scroll, Observers)
│   │
│   ├── images/             # Kompresi gambar (Format WebP disarankan)
│   │   ├── hero/           # Gambar besar untuk background hero section
│   │   ├── gallery/        # Foto grid
│   │   └── icons/          # SVG / favicon
│   │
│   └── docs/               # Tempat menyimpan file PDF (SK Kades, dll jika ada)
│
└── README.md               # Dokumentasi sistem ekstensif (File ini)
```

---

## 7. STRATEGI OPTIMASI MESIN PENCARI (SEO)
Sistem ini menggunakan strategi SEO *On-Page* teknis untuk mendominasi kata kunci seperti *"Pendakian Gunung Rajabasa", "Basecamp Resmi Rajabasa", "Wisata Kalianda",* dan *"Teropong Kota"*.

*   **Meta Tags Ekstensif:** Penerapan spesifik atribut `title`, `description`, `keywords`, dan `viewport`.
*   **Open Graph Protocol (OGP):** Implementasi meta tag khusus Facebook/WhatsApp agar tampilan web muncul dengan gambar dan judul estetik saat tautannya dibagikan di grup warga.
*   **Hierarki Heading Semantik:** Penggunaan `<h1>` tunggal per halaman untuk fokus kata kunci, diikuti `<h2`> dan `<h3>` secara sistematis.
*   **Atribut Alt:** Seluruh tag `<img>` diwajibkan memiliki atribut `alt` untuk diindeks oleh Google Images dan menunjang *screen readers* bagi tuna netra.

---

## 8. PANDUAN PENGEMBANGAN LANJUTAN (DEVELOPER GUIDE)
Bagi mahasiswa IT atau *developer* yang akan meneruskan proyek ini di tahun-tahun mendatang:

1.  **Manajemen Warna:** Jangan *hardcode* nilai *hex color* (contoh: `#0077b6`). Gunakan CSS Variables (`var(--color-primary)`) yang telah dideklarasikan di blok `:root` pada bagian paling atas file `style.css`. Ini memungkinkan transisi ke *Dark Mode* dalam 5 menit di masa depan.
2.  **Penambahan Halaman:** Gandakan (*duplicate*) struktur file `profil.html`, ubah tag `<title>`, biarkan bagian `<nav>` dan `<footer>` utuh, lalu ganti konten di dalam tag `<main>`.
3.  **Standar Kompresi Aset:** Jangan pernah memuat gambar bertipe `.jpg` atau `.png` mentah dari kamera. Gunakan format `.webp` untuk mereduksi beban memori server hingga 80%.

---

## 9. BUKU PANDUAN PERANGKAT DESA (HANDOVER MANUAL)
*(Terjemahan non-teknis untuk Bapak/Ibu Aparatur Desa)*

**Cara Mengganti Teks (Misal: Mengganti Nama Kepala Desa):**
1. Buka folder proyek ini di laptop komputer balai desa.
2. Klik kanan pada file `profil.html`, lalu pilih **"Open with"** -> **"Notepad"**.
3. Tekan `Ctrl + F` (Cari) di keyboard, ketikkan nama Kepala Desa yang lama.
4. Hapus nama lama tersebut, ketikkan nama yang baru. Jangan menghapus tanda kurung sudut `<` atau `>` di sebelahnya!
5. Simpan file dengan menekan `Ctrl + S`.
6. Klik dua kali file `profil.html` tersebut untuk melihat perubahannya. Sangat gampang!

**Cara Mengganti Foto:**
1. Siapkan foto baru Anda, pastikan nama filenya sederhana tanpa spasi (contoh: `kades-baru.jpg`).
2. Masukkan foto tersebut ke dalam folder `assets/images/`.
3. Buka file HTML yang mau diganti fotonya lewat *Notepad*.
4. Cari kata `.jpg` yang lama, lalu ganti dengan nama file Anda (`kades-baru.jpg`).

---

## 10. PROTOKOL DEPLOYMENT (HOSTING)
Web ini dirancang *Static-ready*. Pengunggahan ke jagat maya dapat dilakukan tanpa biaya server bulanan sepeserpun (0 Rupiah), menggunakan layanan **GitHub Pages** atau **Vercel**.

**Langkah Deployment via GitHub Pages:**
1. Buat akun di [GitHub](https://github.com).
2. Buat repositori publik baru (contoh: `desasumurkumbang`).
3. Unggah (Upload) seluruh folder dan file ini ke repositori tersebut.
4. Masuk ke menu **Settings** -> Pilih tab **Pages**.
5. Pada menu *Source*, pilih cabang `main` atau `master`, lalu klik *Save*.
6. Tunggu 5 menit, dan website Desa Sumur Kumbang sudah online secara global (contoh link: `https://[namagithub].github.io/desasumurkumbang/`).

---
*(End of Official Documentation)*
