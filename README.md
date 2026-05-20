# Escape Landing Page — Next.js

Landing page cinematic satu halaman untuk **Escape** dengan background full-screen, side menu kanan, panel konten glassmorphism, tombol **RELAX**, logo kupu-kupu PNG transparan, glow typography, dan tampilan responsive.

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka:

```text
http://localhost:3000
```

## Build production

```bash
npm run build
npm run start
```

## Deploy ke Vercel

1. Upload folder project ini ke GitHub.
2. Import repository di Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
5. Output directory: biarkan default.

## Cara mengganti background utama

Ganti file ini:

```text
public/escape-bg-main.png
```

Gunakan nama file yang sama agar tidak perlu ubah kode.

Rekomendasi gambar:

- Landscape 16:9.
- Minimal 1366 × 768 px.
- Lebih bagus 1920 × 1080 px.
- Format PNG/JPG/WebP.

## Cara mengganti logo kupu-kupu

Ganti file ini:

```text
public/escape-butterfly.png
```

Agar favicon ikut berubah, ganti juga:

```text
public/escape-butterfly-icon.png
```

Posisi dan ukuran logo diatur di:

```text
app/globals.css
```

Cari class berikut:

```css
.butterfly
.butterfly-image
```

## Cara mengubah tulisan brand

Edit file:

```text
app/page.tsx
```

Bagian utama yang sering diganti:

```tsx
<p className="company-name">PT NEUROSAINS INT TECHNOLOGY ID</p>
<h1>ESCAPE</h1>
<p className="tagline">RUANG UNTUK KESEHATAN MENTAL & PRODUKTIVITAS</p>
```

## Cara mengubah menu kanan

Edit data `menuItems` di:

```text
app/page.tsx
```

Setiap menu punya:

- `label`: teks menu kanan.
- `eyebrow`: label kecil di panel.
- `title`: judul panel.
- `body`: deskripsi panel.
- `points`: badge kecil di bawah panel.

## Struktur folder

```text
escape-landing-nextjs/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ public/
│  ├─ escape-bg-main.png
│  ├─ escape-butterfly.png
│  ├─ escape-butterfly-icon.png
│  └─ favicon.svg
├─ next.config.ts
├─ package.json
├─ tsconfig.json
└─ README.md
```

## Catatan desain

- Tidak memakai Tailwind agar ringan dan gampang dipindahkan.
- Logo kupu-kupu menggunakan asset PNG transparan di `public/escape-butterfly.png`.
- Typography brand diberi glow halus agar mendekati referensi desain.
- Tidak memakai database atau backend.
- Menu kanan membuka panel konten tanpa meninggalkan satu halaman.
- Di mobile, menu kanan berubah menjadi hamburger.
- Tombol **RELAX** membuka panel Ruang Aman dengan animasi napas singkat.

## Catatan pengembangan berikutnya

Setelah patch berikutnya, update dokumentasi teknis di README ini agar perubahan menu, asset, atau fitur tetap tercatat rapi.

## Patch ukuran brand

Patch terbaru mengecilkan area brand/logo sekitar 50%, menaikkan posisi logo sedikit ke atas, serta memberi jarak lebih lega antara teks perusahaan, judul ESCAPE, dan tagline.


## Patch jarak brand

Patch terbaru mengatur jarak teks perusahaan ke judul **ESCAPE** menjadi 10px dan jarak tagline ke judul **ESCAPE** menjadi 10px, termasuk penyesuaian mobile agar komposisi tetap rapat seperti referensi.


## Patch terbaru: jarak 5px + Libre Franklin

- Jarak teks company ke logo `ESCAPE` diatur menjadi `5px`.
- Jarak tagline ke logo `ESCAPE` diatur menjadi `5px`.
- Font global diganti ke **Libre Franklin** via `next/font/google` di `app/layout.tsx`.
- Variabel font utama ada di `app/globals.css` pada `--display`, `--serif`, dan `--sans`.


## Patch terbaru: jarak 2px + menu compact/hide

- Jarak teks company ke logo `ESCAPE` diatur menjadi `2px`.
- Jarak tagline ke logo `ESCAPE` diatur menjadi `2px`.
- Semua elemen typography dipaksa memakai **Libre Franklin** melalui variabel font global.
- Tombol **RELAX** diperkecil sekitar 50% agar lebih halus dan tidak mendominasi layar.
- Menu kanan diperkecil, lebih tipis, dan dapat disembunyikan/ditampilkan memakai tombol kecil **Hide/Show** di kanan atas.
- Status hide/show menu disimpan di `localStorage` agar tetap konsisten setelah refresh browser.

## Patch terbaru: halaman Ruang Aman immersive

- Klik menu **Ruang Aman** sekarang membuka tampilan full-screen cinematic seperti referensi.
- Background khusus Ruang Aman disimpan di:

```text
public/ruang-aman-bg.png
```

- Konten yang muncul ada di `app/page.tsx` pada block `safe-space-scene`.
- Styling judul besar, glow, posisi teks, dan tombol kembali ada di `app/globals.css` pada class:

```css
.safe-space-scene
.safe-space-content
.safe-space-close
```

- Saat tampilan Ruang Aman aktif, brand utama, menu kanan, tombol RELAX, dan footer otomatis disembunyikan agar layar bersih seperti mockup.

## Patch terbaru: halaman Produk Layanan immersive

- Klik menu **Produk Layanan** sekarang membuka tampilan full-screen cinematic seperti referensi.
- Background khusus Produk Layanan disimpan di:

```text
public/produk-layanan-bg.png
```

- Konten list layanan ada di `app/page.tsx` pada block `product-service-scene`:

```text
Digital Mental Health Support
Digital Wellness
Asesmen Psikologis
Corporate Custom Services
```

- Styling panel kaca, judul glow, list layanan, dan tombol kembali ada di `app/globals.css` pada class:

```css
.product-service-scene
.product-service-card
.product-service-list
.product-service-close
```

- Saat tampilan Produk Layanan aktif, brand utama, menu kanan, tombol RELAX, dan footer otomatis disembunyikan agar layar bersih seperti mockup.

## Patch terbaru: halaman Dukungan Komunitas immersive

- Klik menu **Dukungan Komunitas** sekarang membuka tampilan full-screen cinematic seperti referensi.
- Background khusus Dukungan Komunitas disimpan di:

```text
public/dukungan-komunitas-bg.png
```

- Konten halaman ada di `app/page.tsx` pada block `community-support-scene`:

```text
Dukungan Komunitas
Hilang Arah
Ada cerita apa hari ini?
Anonim 1 / Anonim 2
```

- Tombol kotak ikon rumah di kanan atas berfungsi untuk kembali ke landing utama.
- Styling title glow, panel glass, story card, dan responsive mobile ada di `app/globals.css` pada class:

```css
.community-support-scene
.community-support-header
.community-home-button
.community-writing-card
.community-story-card
```

- Saat tampilan Dukungan Komunitas aktif, brand utama, menu kanan, tombol RELAX, dan footer otomatis disembunyikan agar layar bersih seperti mockup.

## Patch terbaru

- Background menu **Dukungan Komunitas** diganti memakai gambar komunitas terbaru yang diberikan user.
- File background yang dipakai: `public/dukungan-komunitas-bg.png`.

## Patch Terbaru - Dukungan Komunitas Clean Background

Menu **Dukungan Komunitas** sekarang dibersihkan total agar hanya menampilkan background full-screen tanpa judul, card, ikon, atau teks tambahan. Klik area background untuk kembali ke landing utama.

## Patch terbaru: Riset & Pengembangan + Narasi Dukungan Komunitas

- Menu **Riset & Pengembangan** sekarang membuka halaman immersive full-screen.
- Background halaman Riset & Pengembangan memakai file:

```text
public/riset-pengembangan-bg.png
```

- Teks pada halaman Riset & Pengembangan diekstrak dari mockup:

```text
Riset & Pengembangan
Menggunakan parameter penelitian berstandar internasional, kami memastikan setiap pengembangan produk didasarkan pada studi manusia yang komprehensif dan pembaruan sains terkini. Kami tidak hanya mengikuti tren; kami membangun masa depan melalui validasi ilmiah.
>100 Ribu
Orang di Indonesia
Menerima manfaat dari Edukasi Kesehatan Mental yang kami lakukan
```

- Logo pada kartu Riset & Pengembangan memakai asset kupu-kupu utama:

```text
public/escape-butterfly.png
```

- Menu **Dukungan Komunitas** tidak lagi hanya menampilkan background. Sekarang sudah ditambahkan narasi singkat yang lebih sesuai dengan konsep komunitas Escape: ruang aman, saling menguatkan, tanpa stigma, tanpa tekanan, dan tanpa penghakiman.
- Font **Libre Franklin** dimuat melalui CSS `@import` di `app/globals.css`, sehingga build lokal tidak bergantung pada `next/font/google`.

## Catatan build patch ini

- `npm run typecheck` berhasil.
- `npm run build` berhasil melewati tahap compile, tetapi proses build di container sempat timeout pada tahap collecting page data. Di environment lokal/Vercel, jalankan ulang:

```bash
npm install
npm run build
```

## Patch v3 — Typography, Riset, dan Dukungan

- Seluruh typography dipertegas kembali menggunakan **Libre Franklin** dengan bobot tipis/clean, bukan bold tebal.
- Background **Riset & Pengembangan** memakai gambar starfield terbaru.
- Background **Dukungan Komunitas** juga memakai gambar starfield terbaru agar konsisten.
- Elemen mockup iPad/device di halaman riset dihapus.
- Narasi **Dukungan Komunitas** diperbaiki agar lebih cocok untuk positioning Escape.
- Narasi **Riset & Pengembangan** disusun ulang sesuai copy final.

## Patch v4 — Galeri Kehidupan

- Menu **Galeri Kehidupan** sekarang membuka halaman immersive full-screen.
- Background Galeri memakai file:

```text
public/galeri-bg.png
```

- Contoh 5 gambar dummy galeri ada di folder:

```text
public/gallery/gallery-01.png
public/gallery/gallery-02.png
public/gallery/gallery-03.png
public/gallery/gallery-04.png
public/gallery/gallery-05.png
```

- Untuk mengganti gambar galeri, cukup replace file di folder `public/gallery/` dengan nama yang sama. Kalau ingin menambah/mengurangi jumlah gambar, ubah array `galleryItems` di `app/page.tsx`.
- Layout galeri mengikuti mockup: judul besar di kiri atas, narasi singkat, susunan foto bergaya frame putih dengan tape, dan instruksi **Geser & Tekan untuk Memilih**.
- Klik gambar akan membuka popup/lightbox besar. Klik area gelap, tombol `×`, atau tekan `Esc` untuk menutup popup.
- Styling halaman galeri ada di `app/globals.css` pada class:

```css
.gallery-life-scene
.gallery-intro
.gallery-polaroid-track
.gallery-polaroid
.gallery-lightbox
```

## Catatan build patch v4

Patch ini belum menjalankan validasi build penuh di container karena `node_modules` tidak disertakan di ZIP kerja. Setelah ekstrak di lokal, jalankan:

```bash
npm install
npm run typecheck
npm run build
```

## Patch v5 - Mobile Responsive

Landing page sudah dipoles untuk mobile:

- Menu kanan berubah menjadi hamburger overlay di layar kecil.
- Semua halaman full-screen (`Ruang Aman`, `Produk Layanan`, `Dukungan Komunitas`, `Riset & Pengembangan`, dan `Galeri Kehidupan`) sudah diberi layout khusus mobile.
- Konten panjang di mobile bisa discroll dengan halus.
- Tombol kembali mengikuti safe-area mobile.
- Galeri memakai horizontal scroll dan popup gambar tetap responsif.
- Support viewport kecil dan landscape mobile.

## Patch: Privacy Policy

Halaman kebijakan privasi sudah ditambahkan sebagai slug langsung dan tidak dimasukkan ke menu utama.

Akses lokal:

```bash
http://localhost:3000/privacy-policy
```

Akses production setelah domain diarahkan:

```text
https://neurointek.com/privacy-policy
```

File utama:

```text
app/privacy-policy/page.tsx
```

Styling halaman privacy policy berada di bagian akhir:

```text
app/globals.css
```
