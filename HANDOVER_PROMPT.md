# HANDOVER PROMPT — Neurointek Background Site

Kamu melanjutkan project Next.js single-page website Neurointek / ESCAPE.

Kondisi terakhir:
- Framework: Next.js App Router, React, CSS murni.
- Entry utama: `app/page.jsx`.
- Styling utama: `app/globals.css`.
- Background dan aset visual: `public/backgrounds/`.
- Logo kupu-kupu: `public/butterfly-logo.png`.
- Team/BOD: `public/team/`.
- Menu kanan minimalis, auto-hide setelah item diklik, hover glow aktif.
- Floating WhatsApp global: `+628176494177`.
- Title website: `PT. Neurosains Inti Technology ID`.

Urutan menu saat ini:
1. Home
2. Bisnis & Manusia
3. Ruang Aman
4. Produk Layanan Kesehatan Mental
5. Dukungan Komunitas
6. Riset dan Pengembangan Manusia
7. Tentang Kami
8. Galeri kehidupan

Update terakhir:
- Background menu Produk Layanan Kesehatan Mental diganti ke visual danau/sunset terbaru dari upload user (`public/backgrounds/2-produk-layanan.webp`).
- Asset background tetap memakai WebP ringan dan path lama agar tidak perlu mengubah logic section.
- Di modal/showcase Indonesia Coconut, tombol WhatsApp compact ke `+628176494177` tetap aktif dengan pesan khusus produk mentah unggulan.
- Tombol WhatsApp ditaruh selaras dengan area redaksi slide, mengikuti gaya tipografi ringan dan glass gradient.

Instruksi gaya untuk patch berikutnya:
- Jangan ubah struktur yang sudah cocok kecuali diminta.
- Pertahankan font tipis/minimalis, jangan bold besar.
- Pastikan semua layout center screen dan responsive.
- Gunakan WebP terkompresi untuk gambar baru.
- Untuk setiap ZIP update berikutnya, sertakan file `HANDOVER_PROMPT.md` ini dan update bagian “Handover Prompt” di README.

## Patch terbaru - Bisnis & Manusia CTA + background riset
- Background halaman `Riset dan Pengembangan Manusia` diganti ke gambar business research hitam-putih (`public/backgrounds/4-riset-pengembangan.webp`).
- Tombol/form pada halaman riset diperjelas dengan kontras lebih kuat agar tetap terbaca di atas background baru.
- CTA `Produk mentah unggulan / Indonesia Coconut / Lihat narasi produk` di halaman `Bisnis & Manusia` diberi animasi halus: float, glow, light sweep, dan dot pulse supaya user paham bahwa itu tombol klik.

## Patch terbaru - Responsive mobile menu + CTA mobile
- Ditambahkan `.menu-screen-dim` di `app/page.jsx` setelah layer background. Saat hamburger/menu dibuka di mobile, layar menjadi lebih gelap dengan blur halus supaya menu kanan tidak overlap dengan redaksi halaman.
- CSS mobile menu dipoles: `.side-menu` menjadi panel tengah di layar, list menu center, font lebih terbaca, glow tetap aktif, dan klik area gelap menutup menu.
- CTA `Produk mentah unggulan / Indonesia Coconut / Lihat narasi produk` di halaman `Bisnis & Manusia` diperkuat khusus mobile: panel glass halus, animasi tap/float, light sweep, pulse dot, label `tap`, dan garis bergerak agar terlihat jelas sebagai tombol.
- Tidak mengubah konten, nomor WhatsApp, atau urutan menu.

## Patch terbaru - Mobile menu hard dark overlay
- Mobile menu diperbaiki supaya saat hamburger dibuka seluruh layar menjadi dark overlay solid.
- Menu mobile sekarang tampil full-screen centered, tidak overlap dengan konten halaman.
- Z-index disusun ulang: dark overlay menutup konten/WA floating, menu dan hamburger tetap di atas.
- Font menu tetap minimalis, tipis, dengan glow halus pada hover/active.


## Patch terbaru

- Menu tidak lagi otomatis terbuka saat website pertama kali dibuka.
- Foto Iis Syadiah S.H sudah dipasang pada bagian BOD Tentang Kami.
- Urutan BOD tetap: Lakudus → Iis Syadiah S.H → Ahyar Anas → Della Angela → Sadam Nursidi.
