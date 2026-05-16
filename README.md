# Neurointek Background Website

Website Next.js satu halaman dengan konsep full background image. Setiap menu menggunakan satu gambar background penuh, dan menu kanan minimal akan otomatis menutup setelah user memilih menu.

## Urutan menu dan file background

1. Home → `public/backgrounds/0-home.png`
2. Bisnis & Manusia → `public/backgrounds/5-tentang-kami.jpg`
3. Ruang Aman → `public/backgrounds/1-ruang-aman.jpg`
4. Produk Layanan Kesehatan Mental → `public/backgrounds/2-produk-layanan.png`
5. Dukungan Komunitas → `public/backgrounds/3-dukungan-komunitas.jpg`
6. Riset dan Pengembangan Manusia → `public/backgrounds/4-riset-pengembangan.jpg`
7. Tentang Kami → `public/backgrounds/5-tentang-kami.jpg`
8. Galeri kehidupan → `public/backgrounds/6-galeri-kehidupan.jpg`

## Cara jalan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build production

```bash
npm run build
npm run start
```

## Deploy ke Vercel

Upload folder ini ke GitHub, lalu import project dari Vercel. Tidak perlu environment variable untuk versi awal ini.

## Edit menu, tulisan, dan gambar

Edit data `sections` di:

```txt
app/page.jsx
```

Untuk mengganti tampilan, edit:

```txt
app/globals.css
```

## Catatan implementasi

- Menu berada di sisi kanan, posisinya tengah secara vertikal.
- Menu dibuat minimalis: hanya list tulisan tanpa panel besar, nomor, atau footer.
- Menu auto-hide setelah item menu diklik.
- Tombol hamburger kanan atas untuk membuka menu lagi.
- Tombol previous/next dan dot slider bagian bawah sudah dihapus.
- Halaman Home memakai lockup ESCAPE di kiri atas dengan efek glow.
- Jarak tulisan atas dan bawah terhadap ESCAPE dibuat seimbang.
- Logo kupu-kupu berada di akhir tulisan ESCAPE dengan ukuran lebih besar dan sedikit jarak.
- Logo kupu-kupu berada di `public/butterfly-logo.png`.
- Halaman Ruang Aman sudah memakai redaksi Safe Onboarding for Personal & Business Growth.
- Ruang Aman punya dua jalur onboarding: Personal menuju Galeri E-Course dan Pemilik Bisnis menuju Produk & Layanan.
- CTA Personal sementara diarahkan ke halaman Galeri Kehidupan sebagai placeholder galeri, nanti bisa diganti ke data/link E-Course khusus.
- CTA Pemilik Bisnis langsung berpindah ke menu Produk dan Layanan.


## Ruang Aman hotfix

Patch ini menghapus ketergantungan pada `localStorage` untuk visibility copy, sehingga redaksi Ruang Aman selalu tampil ketika menu tersebut dibuka.

## Ruang Aman layout patch

Patch terbaru memindahkan komposisi redaksi Ruang Aman mengikuti referensi visual:

- Label `01 | RUANG AMAN` berada di tengah atas.
- Judul utama dibuat uppercase, tipis, letter-spaced, dan center.
- Paragraf pembuka dibuat center dengan lebar besar agar terasa editorial/premium.
- Dua jalur Personal dan Pemilik Bisnis diposisikan dua kolom di area tengah-bawah.
- Card kaca sebelumnya dihapus agar halaman lebih bersih, minimalis, dan menyatu dengan background.
- Ikon kecil, heading, deskripsi, dan tombol CTA dibuat simetris seperti mockup referensi.

## Patch Ruang Aman Aesthetic

- Layout Ruang Aman tetap mengikuti referensi center.
- Font heading dan body dibuat lebih halus, rapi, dan premium.
- Spasi antar elemen diperbaiki agar lebih nyaman dipandang.
- CTA dibuat lebih ringan dan elegan.
- Dua jalur Personal dan Pemilik Bisnis tetap fungsional.

## Patch terbaru - Ruang Aman tanpa card

- Area Personal dan Pemilik Bisnis dibuat tanpa card/background tipis.
- Komposisi tetap mengikuti layout center dua kolom.
- Tipografi, jarak, garis aksen kecil, dan CTA diperhalus agar menyatu dengan background.



## Patch Notes - Ruang Aman Compact Blocks

- Heading `Masuk ke Galeri E-Course` dan `Terhubung ke Produk & Layanan` diperkecil.
- Dua blok konten dibuat lebih compact dan jaraknya didekatkan.
- Spacing icon, label, paragraf, dan tombol dirapikan agar tetap estetik tanpa card/background.

## Patch update - Ruang Aman one-line heading

- Heading `Terhubung ke Produk & Layanan` dibuat satu baris pada tampilan desktop.
- Ukuran heading bisnis dibuat sedikit lebih compact agar tetap rapi tanpa card.
- Pada layar kecil/mobile, heading tetap boleh turun baris supaya tidak overflow.

## Patch update - Dukungan dan Komunitas

- Halaman `Dukungan dan komunitas` sudah memakai redaksi Community Support, Storytelling & Music Window.
- Layout dibuat editorial/premium: headline center, fitur utama 4 kolom, kategori cerita 3 kolom, dan catatan pengalaman di bagian bawah.
- Fitur utama yang ditampilkan: Kolom Cerita Satu Arah, Tombol Dukungan, Anonim atau Nama Pilihan, dan Moderasi Admin.
- Kategori cerita yang ditampilkan: Curhat & Realitas, Inspiratif & Kebaikan, serta Pengakuan Dosa & Pengampunan.
- Area Musik Rekomendasi via YouTube sudah disiapkan. Untuk mengaktifkan tombol, isi konstanta `communityYoutubeUrl` di `app/page.jsx` dengan URL YouTube yang diinginkan.

## Patch update - Dukungan dan Komunitas dua kolom

- Halaman `Dukungan dan komunitas` diubah menjadi layout dua kolom pada desktop.
- Kolom kiri berisi headline, intro pendek, catatan dukungan komunitas, dan tombol Musik Rekomendasi via YouTube.
- Kolom kanan berisi detail redaksi yang panjang dan dibuat scroll internal agar halaman tetap rapi, lega, dan tidak terlalu penuh.
- Detail kanan memuat Fitur Utama, Kategori Cerita, dan Catatan Pengalaman.
- Pada tablet/mobile layout otomatis menjadi satu kolom dan scroll halaman normal.

## Patch terbaru

- Halaman Dukungan dan Komunitas diperbesar ukuran fontnya agar lebih nyaman dibaca.
- Area dua kolom dibuat lebih penuh satu halaman dengan scroll internal tetap aktif di kolom kanan.

## Patch Dukungan & Komunitas - YouTube

Halaman **Dukungan dan Komunitas** sekarang memiliki area video YouTube di kolom kanan, setelah bagian fitur utama.

Untuk mengganti video, buka `app/page.jsx` lalu isi:

```jsx
const communityYoutubeUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';
```

Format yang didukung:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`


## YouTube Komunitas

Link YouTube sudah diisi:

```jsx
const communityYoutubeUrl = 'https://www.youtube.com/live/jfKfPfyJRdk?si=XNobWQBs9aSSXXEo';
```

## Patch update - Riset dan Pengembangan

- Halaman `Riset dan Pengembangan` sudah memakai redaksi `International Research Library & Evidence-Based Development`.
- Layout dibuat dua kolom pada desktop.
- Kolom kiri berisi label `04 / RISET & PENGEMBANGAN`, headline, subheadline, dan paragraf utama.
- Kolom kanan berisi ringkasan alur `Evidence Flow`: International Library, Human-Centered Insight, dan Product Development.
- Pada tablet/mobile layout otomatis menjadi satu kolom agar tetap mudah dibaca.

## Patch update - Riset dan Pengembangan Form

- Kolom kanan halaman `Riset dan Pengembangan` sekarang menjadi form input `Form Permintaan Riset`.
- Field tersedia: Nama Perusahaan, Nama PIC, Email Perusahaan, Nomor WhatsApp, dan Kebutuhan Riset.
- Tombol `Kirim ke Email` otomatis membuat draft email via `mailto` dari input form.
- Tombol `Kirim ke WhatsApp` disiapkan lewat `wa.me`; isi dulu konstanta berikut di `app/page.jsx`:

```jsx
const researchTargetEmail = '';
const researchTargetWhatsapp = '';
```

- Bagian `Perpustakaan Jurnal Internasional` ditaruh di bawah form kanan sebagai catatan pendukung.

## Patch fix - Riset dan Pengembangan 2 kolom compact

- Halaman `Riset dan Pengembangan` dirapikan ulang agar benar-benar terbagi 2 kolom.
- Kolom kiri sekarang berisi `Riset & Pengembangan`, `International Research Library & Evidence-Based Development`, subheadline, dan paragraf utama.
- Kolom kanan berisi `Form Permintaan Riset`, field input, tombol kirim Email/WhatsApp, serta catatan `Perpustakaan Jurnal Internasional`.
- Ukuran headline kiri dikecilkan dari versi sebelumnya agar tidak mendominasi layar.
- Form kanan dibuat lebih compact, rapi, dan tetap elegan dengan scroll internal bila tinggi layar terbatas.

## Patch update - Riset dan Pengembangan final content library

- Halaman `Riset & Pengembangan` diatur ulang menjadi dua kolom yang lebih seimbang.
- Kolom kiri berisi headline, narasi utama, dan tombol CTA `Bangun riset untuk bisnis Anda bersama NeuroTech ID`.
- Kolom kanan berisi form permintaan riset, tombol kirim Email/WhatsApp, catatan perpustakaan jurnal, dan daftar bahan bacaan riset.
- Daftar bacaan riset dibuat dalam bentuk kartu compact dengan cover visual sederhana, intisari Bahasa Indonesia, dan link `Pelajari lebih dalam` ke sumber eksternal.
- Form WhatsApp sekarang tetap membuka WhatsApp share meskipun nomor tujuan belum diisi. Untuk order nyata, isi konfigurasi berikut di `app/page.jsx`:

```jsx
const researchTargetEmail = 'email-perusahaan@domain.com';
const researchTargetWhatsapp = '628xxxxxxxxxx';
```

- Sumber awal yang dipasang: ResearchGate, JMIR, OECD, Oxford Saïd, dan Jurnal UNIGAL. Sumber bisa diganti langsung dari array `researchReferences` di `app/page.jsx`.


## Patch update - Perubahan menu

- `Home` tetap `Home`.
- Menambahkan menu baru `Bisnis & Manusia` setelah Home.
- `Ruang Aman` tetap `Ruang Aman`.
- `Produk dan layanan` berubah menjadi `Produk Layanan Kesehatan Mental`.
- `Dukungan dan Komunitas` berubah menjadi `Dukungan Komunitas`.
- `Riset dan Pengembangan` berubah menjadi `Riset dan Pengembangan Manusia`.
- `Tentang Kami` tetap `Tentang Kami`.
- `Galeri Kehidupan` berubah menjadi `Galeri kehidupan`.
- Lebar menu kanan disesuaikan agar label panjang tetap terlihat lebih rapi dan minimalis.

## Patch terbaru

- Halaman **Riset dan Pengembangan Manusia** dipusatkan ulang agar tidak bergeser ke kanan.
- Layout dibuat dua kolom lebih compact: kolom kiri untuk narasi dan CTA, kolom kanan untuk form dan perpustakaan jurnal.
- Ukuran font, spacing, form, dan kartu referensi dibuat lebih seimbang agar nyaman dibaca di layar desktop.

## Patch terbaru - Riset font readability

- Font halaman **Riset dan Pengembangan Manusia** dibesarkan sedikit agar lebih nyaman dibaca.
- Layout 2 kolom tetap dipertahankan.
- Kolom kanan tetap memakai scroll internal untuk menjaga konten form dan perpustakaan riset tetap rapi.

## Patch - Tentang Kami / BOD Drawer

Update ini menambahkan desain khusus untuk menu **Tentang Kami**:

- Layout dua kolom yang dipusatkan di layar.
- Kolom kiri berisi narasi tentang arah NeuroTech ID.
- Kolom kanan berisi **Kolom BOD** dengan thumbnail semua pimpinan.
- Thumbnail Lakudus memakai file foto asli di `public/team/lakudus.jpg`.
- Profil lain memakai placeholder inisial sampai foto resmi tersedia.
- Detail profil menggunakan model drawer/card dengan area teks scroll internal agar tetap compact dan mudah dibaca.

Untuk mengganti atau menambah foto BOD:

1. Simpan foto ke folder `public/team/`.
2. Buka `app/page.jsx`.
3. Pada `boardMembers`, isi properti `image`, contoh:

```jsx
image: '/team/nama-file.jpg'
```


## Patch terbaru - Tentang Kami BOD auto expand

- Headline `Manusia, Bisnis, dan Ruang Pulih yang Bertumbuh.` diperkecil sedikit.
- Kolom kiri diberi jarak atas/bawah yang lebih lega agar tidak terasa naik.
- Label `Kolom BOD` dihapus dari panel kanan.
- Setelah halaman **Tentang Kami** terbuka selama 5 detik, panel BOD otomatis melebar dan kolom kiri disembunyikan.
- Saat panel BOD melebar, area foto dan detail profil dibuat lebih lapang agar portrait terlihat lebih utuh dan tidak terjepit.


## Patch: Tentang Kami responsive BOD balance

- Kolom BOD tidak lagi menghilang ketika mode auto-expand aktif.
- Redaksi kiri tetap tampil dan tetap mudah dibaca.
- Panel BOD dibuat responsif: thumbnail, foto, dan pesan kepemimpinan menyesuaikan ukuran layar.
- Di layar kecil layout otomatis menjadi satu kolom agar foto dan teks tidak terjepit.

## Patch terbaru - Floating WhatsApp CTA

- Menambahkan tombol WhatsApp melayang di kanan bawah pada semua halaman/menu.
- Tombol tetap tampil saat berpindah menu karena berada di level utama `site-shell`.
- Nomor tujuan sudah diarahkan ke `+628176494177` menggunakan format `wa.me/628176494177`.
- Ukuran dibuat compact berbentuk ikon; pada desktop akan melebar halus saat hover dan menampilkan label `WhatsApp`.
- Untuk mengubah nomor atau pesan awal, edit konstanta berikut di `app/page.jsx`:

```jsx
const floatingWhatsappNumber = '628176494177';
const floatingWhatsappMessage = 'Halo NeuroTech ID, saya ingin terhubung dan bertanya tentang layanan.';
```

## Patch - Urutan BOD

Menu Tentang Kami diperbarui dengan urutan thumbnail BOD:
1. Iis Syadiah - Direktur Utama
2. Lakudus B.Psych MBA C.Ht - Komisaris
3. Ahyar Anas - Direktur Kepatuhan
4. Della Angela S.E - Direktur Pemasaran
5. Sadam Nursidi - Direktur Keuangan

Foto Sadam tersedia di `public/team/sadam.jpg`. Foto Lakudus tetap memakai `public/team/lakudus.jpg`. Foto lain dapat diganti nanti dengan mengisi properti `image` pada array `boardMembers` di `app/page.jsx`.

## Patch - Koreksi Urutan BOD

Menu Tentang Kami diperbarui kembali dengan urutan BOD yang benar:

1. Lakudus B.Psych MBA C.Ht - Komisaris
2. Iis Syadiah - Direktur Utama
3. Ahyar Anas - Direktur Kepatuhan
4. Della Angela S.E - Direktur Pemasaran
5. Sadam Nursidi - Direktur Keuangan

Foto Lakudus tetap memakai `public/team/lakudus.jpg`. Foto Sadam tetap memakai `public/team/sadam.jpg`. Foto Iis, Ahyar, dan Della masih memakai placeholder inisial dan bisa diganti nanti lewat properti `image` pada array `boardMembers` di `app/page.jsx`.

## Patch - Bisnis & Manusia / Indonesia Coconut

- Menu **Bisnis & Manusia** sekarang memiliki layout khusus, bukan lagi placeholder umum.
- Konten utama menampilkan narasi awal tentang hubungan bisnis, manusia, dan produk mentah unggulan Indonesia.
- Ditambahkan blok **Produk mentah unggulan** dengan item klik **Indonesia Coconut**.
- Saat **Indonesia Coconut** diklik, muncul popup modal dengan background gambar kelapa/pohon yang tersimpan di `public/backgrounds/indonesia-coconut.png`.
- Modal sudah bisa ditutup lewat tombol `×`, klik area luar modal, atau tombol `Siap dikembangkan`.
- Modal juga otomatis tertutup saat user pindah menu.

## Patch - Bisnis & Manusia Coconut Slider

- Popup **Indonesia Coconut** diubah menjadi model showcase full-screen seperti referensi visual.
- Slide pertama memakai background palm/coconut landscape dengan logo kupu-kupu, judul **Produk Mentah Unggulan**, label **Indonesian Coconut**, dan narasi produksi kelapa Indonesia.
- Slide kedua memakai background potongan kelapa dengan narasi efisiensi kelapa Indonesia dan deskripsi keunggulan produk.
- Tombol panah kiri/kanan bisa dipakai untuk berpindah antar 2 tampilan.
- Keyboard juga didukung: `ArrowLeft`, `ArrowRight`, dan `Escape` untuk tutup showcase.
- Asset baru berada di `public/backgrounds/indonesia-coconut-cut.png`.

## Patch Coconut Showcase Polish

Popup **Indonesia Coconut** diperhalus lagi supaya lebih premium dan tidak berantakan:

- transisi slide dibuat lebih smooth,
- panel judul dan narasi dibuat lebih seimbang,
- tombol panah diperkecil dan diperhalus,
- overlay background dibuat lebih cinematic,
- teks slide dibuat lebih compact agar nyaman dibaca,
- dot indicator dibuat lebih minimalis.


## Patch Terbaru - Coconut Showcase Refine

- Showcase Indonesia Coconut diperhalus lagi: typography lebih elegan, spacing lebih rapi, dan overlay dibuat lebih cinematic.
- Arrow kiri/kanan dibuat lebih ramping agar tidak terasa kasar.
- Responsiveness diperbaiki untuk desktop, tablet, dan mobile.
- Slide tetap 2 tampilan: opening produk mentah unggulan dan narasi Indonesian Coconut.

## Patch - Coconut Showcase Arrow & Typography Softening

- Tombol navigasi kiri/kanan pada Indonesia Coconut Showcase dibuat lebih tipis, glassy, dan halus.
- Gradasi overlay tiap slide diperhalus agar teks tetap terbaca tanpa terlihat berat.
- Font pada showcase dibuat lebih ringan, tidak bold, dan lebih clean.
- Responsive mobile/tablet untuk tombol panah disesuaikan agar tetap compact.
