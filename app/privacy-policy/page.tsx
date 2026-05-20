import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Escape by NEUROINTEK",
  description:
    "Kebijakan Privasi Escape: penjelasan pengumpulan, penggunaan, penyimpanan, keamanan, iklan, dan penghapusan data pengguna.",
  alternates: {
    canonical: "/privacy-policy"
  },
  openGraph: {
    title: "Privacy Policy Escape",
    description: "Kebijakan Privasi aplikasi Escape by NEUROINTEK.",
    type: "article",
    images: ["/escape-bg-main.png"]
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page">
      <div className="privacy-background" aria-hidden="true" />
      <div className="privacy-vignette" aria-hidden="true" />

      <section className="privacy-shell" aria-label="Kebijakan Privasi Escape">
        <header className="privacy-hero">
          <a className="privacy-back-link" href="/" aria-label="Kembali ke beranda Escape">
            ← Beranda
          </a>

          <div className="privacy-brand-row">
            <div>
              <p className="privacy-company">NEUROINTEK</p>
              <h1>Privacy Policy Escape</h1>
            </div>
            <img src="/escape-butterfly.png" alt="Escape" />
          </div>

          <p>
            Escape adalah aplikasi relaksasi, journaling, audio ketenangan, dan refleksi diri yang dikembangkan oleh
            NEUROINTEK. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan,
            melindungi, dan menghapus data pengguna ketika menggunakan aplikasi Escape.
          </p>
          <p>
            Dengan menggunakan Escape, pengguna menyetujui pengumpulan dan penggunaan data sesuai dengan Kebijakan
            Privasi ini.
          </p>
          <span className="privacy-date">Tanggal efektif: 20 Mei 2026</span>
        </header>

        <article className="privacy-card">
          <section>
            <h2>1. Data yang Kami Kumpulkan</h2>
            <p>Escape dapat mengumpulkan beberapa jenis data berikut:</p>

            <h3>a. Data Akun</h3>
            <p>
              Ketika pengguna masuk menggunakan Google Sign-In, kami dapat menerima dan menyimpan data dasar akun,
              seperti:
            </p>
            <ul>
              <li>Nama akun Google</li>
              <li>Alamat email</li>
              <li>Identitas pengguna dari layanan autentikasi</li>
            </ul>
            <p>Data ini digunakan untuk membuat dan mengelola akun Escape pengguna.</p>

            <h3>b. Data Perangkat</h3>
            <p>
              Untuk menjaga keamanan akun dan mencegah penyalahgunaan, Escape dapat menyimpan informasi teknis
              perangkat, seperti:
            </p>
            <ul>
              <li>Identitas perangkat atau device binding ID</li>
              <li>Informasi sistem aplikasi</li>
              <li>Data teknis yang diperlukan untuk menjaga sesi login dan keamanan akun</li>
            </ul>
            <p>Data ini tidak digunakan untuk menjual identitas pengguna.</p>

            <h3>c. Data Journaling</h3>
            <p>
              Jika pengguna menggunakan fitur jurnal, Escape dapat menyimpan data yang ditulis atau dipilih oleh
              pengguna, termasuk:
            </p>
            <ul>
              <li>Emosi harian</li>
              <li>Rasa syukur</li>
              <li>Cerita hal baik</li>
              <li>Produktivitas</li>
              <li>Hal buruk yang dialami</li>
              <li>Pembelajaran pribadi</li>
            </ul>
            <p>
              Data journaling digunakan untuk membantu pengguna melakukan refleksi diri dan melihat perkembangan
              emosional secara lebih terstruktur.
            </p>

            <h3>d. Data Screening dan Refleksi Kesehatan Mental</h3>
            <p>
              Escape menyediakan fitur screening dan refleksi, seperti screening tidur, kecemasan, depresi, dan
              kesehatan mental umum. Data yang dapat disimpan meliputi:
            </p>
            <ul>
              <li>Jawaban screening</li>
              <li>Skor hasil screening</li>
              <li>Kategori hasil</li>
              <li>Riwayat screening</li>
            </ul>
            <p>Data ini bersifat edukatif dan reflektif, bukan diagnosis medis.</p>

            <h3>e. Data Penggunaan Audio</h3>
            <p>
              Escape dapat memproses atau menyimpan informasi penggunaan audio tertentu, seperti kategori audio yang
              digunakan, preferensi audio, atau pengaturan timer, apabila fitur tersebut tersedia.
            </p>

            <h3>f. Data Iklan</h3>
            <p>
              Escape dapat menggunakan Google AdMob untuk menampilkan iklan. Google Mobile Ads SDK dapat mengumpulkan
              dan membagikan data tertentu secara otomatis untuk tujuan iklan, analitik, dan pencegahan penyalahgunaan,
              termasuk alamat IP, interaksi pengguna dengan produk, informasi diagnostik, serta identifier perangkat atau
              akun tertentu. Google menyatakan data yang dikumpulkan oleh Google Mobile Ads SDK dienkripsi saat transit
              menggunakan TLS.
            </p>
          </section>

          <section>
            <h2>2. Cara Kami Menggunakan Data</h2>
            <p>Data pengguna digunakan untuk:</p>
            <ul>
              <li>Mengelola akun dan login pengguna</li>
              <li>Menyediakan fitur journaling</li>
              <li>Menyediakan fitur screening dan riwayat refleksi</li>
              <li>Menyediakan pengalaman aplikasi yang lebih personal</li>
              <li>Menjaga keamanan akun dan perangkat</li>
              <li>Menampilkan dan mengelola iklan</li>
              <li>Memperbaiki stabilitas, keamanan, dan kualitas aplikasi</li>
              <li>Memenuhi kewajiban hukum dan kebijakan platform jika diperlukan</li>
            </ul>
            <p>Kami tidak menjual data pribadi pengguna.</p>
          </section>

          <section>
            <h2>3. Penyimpanan dan Keamanan Data</h2>
            <p>
              Data Escape disimpan menggunakan layanan backend dan database yang kami gunakan, termasuk Supabase
              PostgreSQL dan layanan pendukung lainnya. Data dikirim melalui koneksi aman menggunakan HTTPS.
            </p>
            <p>
              Kami berupaya menjaga keamanan data pengguna dengan pembatasan akses, autentikasi, dan praktik keamanan
              teknis yang wajar. Namun, tidak ada sistem digital yang sepenuhnya bebas risiko.
            </p>
          </section>

          <section>
            <h2>4. Pembagian Data kepada Pihak Ketiga</h2>
            <p>Kami dapat menggunakan layanan pihak ketiga untuk menjalankan aplikasi, seperti:</p>
            <ul>
              <li>Google Sign-In untuk autentikasi</li>
              <li>Supabase untuk autentikasi, database, dan penyimpanan data</li>
              <li>Google AdMob untuk iklan</li>
            </ul>
            <p>
              Pihak ketiga tersebut dapat memproses data sesuai fungsi layanan masing-masing. Kami tidak memberikan
              data pengguna kepada pihak ketiga untuk dijual.
            </p>
          </section>

          <section>
            <h2>5. Data Kesehatan dan Disclaimer</h2>
            <p>
              Escape bukan alat diagnosis medis, bukan perangkat medis, dan tidak menggantikan konsultasi dengan
              psikolog, psikiater, dokter, konselor, atau tenaga kesehatan profesional.
            </p>
            <p>
              Fitur screening, journaling, audio relaksasi, dan refleksi di Escape hanya bertujuan untuk edukasi,
              relaksasi, dan refleksi pribadi. Escape tidak digunakan untuk mendiagnosis, mengobati, menyembuhkan, atau
              mencegah kondisi medis apa pun.
            </p>
            <p>
              Jika pengguna mengalami kondisi darurat, dorongan menyakiti diri sendiri, pikiran bunuh diri, gejala berat,
              atau merasa tidak aman, segera hubungi keluarga/orang tepercaya, tenaga kesehatan profesional, atau layanan
              darurat terdekat.
            </p>
            <p>
              Google Play juga mengharuskan aplikasi health/medical yang bukan medical device menyertakan disclaimer
              bahwa aplikasi tidak mendiagnosis, mengobati, menyembuhkan, atau mencegah kondisi medis, serta mengingatkan
              pengguna untuk berkonsultasi dengan tenaga kesehatan profesional.
            </p>
          </section>

          <section>
            <h2>6. Penghapusan Akun dan Data</h2>
            <p>Pengguna dapat meminta penghapusan akun dan data yang terkait dengan akun Escape.</p>
            <p>Permintaan penghapusan dapat dilakukan melalui:</p>
            <ul>
              <li>Fitur Hapus Akun &amp; Data di dalam aplikasi.</li>
              <li>Email support: neutechnology.indonesia@gmail.com</li>
            </ul>
            <p>
              Setelah permintaan diterima, kami akan memproses penghapusan data akun dan data terkait dalam waktu yang
              wajar, kecuali data tertentu perlu disimpan sementara untuk alasan keamanan, pencegahan penyalahgunaan,
              penyelesaian sengketa, atau kewajiban hukum.
            </p>
            <p>
              Google Play meminta aplikasi yang memungkinkan pembuatan akun menyediakan cara yang mudah ditemukan untuk
              meminta penghapusan akun dari dalam aplikasi dan dari luar aplikasi, misalnya melalui halaman web.
            </p>
          </section>

          <section>
            <h2>7. Retensi Data</h2>
            <p>
              Kami menyimpan data pengguna selama akun masih aktif atau selama diperlukan untuk menyediakan layanan
              Escape. Jika akun dihapus, data terkait akan dihapus atau dianonimkan sesuai proses yang berlaku, kecuali
              ada alasan sah untuk menyimpan data tertentu sementara.
            </p>
          </section>

          <section>
            <h2>8. Hak Pengguna</h2>
            <p>Pengguna dapat meminta:</p>
            <ul>
              <li>Akses terhadap data yang terkait dengan akun</li>
              <li>Koreksi data tertentu</li>
              <li>Penghapusan akun dan data</li>
              <li>Informasi tentang cara data digunakan</li>
            </ul>
            <p>Permintaan dapat dikirim ke neutechnology.indonesia@gmail.com</p>
          </section>

          <section>
            <h2>9. Privasi Anak</h2>
            <p>
              Escape tidak ditujukan untuk anak-anak. Aplikasi ini disarankan untuk pengguna dewasa atau pengguna yang
              mampu memahami konten refleksi diri dan kesehatan mental secara bertanggung jawab.
            </p>
            <p>
              Jika kami mengetahui bahwa data anak dikumpulkan tanpa izin yang sah, kami akan mengambil langkah yang
              wajar untuk menghapus data tersebut.
            </p>
          </section>

          <section>
            <h2>10. Perubahan Kebijakan Privasi</h2>
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan ditampilkan pada halaman
              ini dengan tanggal efektif terbaru.
            </p>
            <p>Pengguna disarankan membaca Kebijakan Privasi ini secara berkala.</p>
          </section>

          <section>
            <h2>11. Kontak</h2>
            <p>Jika ada pertanyaan tentang Kebijakan Privasi ini, pengguna dapat menghubungi:</p>
            <div className="privacy-contact-box">
              <span>Developer: NEUROINTEK</span>
              <span>Email: neutechnology.indonesia@gmail.com</span>
              <span>Website: www.neurointek.com</span>
            </div>
          </section>
        </article>
      </section>
    </main>
  );
}
