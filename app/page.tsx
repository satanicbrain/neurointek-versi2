"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";

type MenuKey =
  | "ruang-aman"
  | "produk-layanan"
  | "komunitas"
  | "riset"
  | "cerita"
  | "galeri";

type MenuItem = {
  key: MenuKey;
  label: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
};

type GalleryItem = {
  src: string;
  title: string;
  caption: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/gallery-01.png",
    title: "Hening",
    caption: "Momen diam untuk mendengar kembali suara diri."
  },
  {
    src: "/gallery/gallery-02.png",
    title: "Pulih",
    caption: "Lanskap tenang sebagai pengingat bahwa semua proses butuh ruang."
  },
  {
    src: "/gallery/gallery-03.png",
    title: "Bertumbuh",
    caption: "Visual kecil untuk menemani perjalanan wellness harian."
  },
  {
    src: "/gallery/gallery-04.png",
    title: "Jeda",
    caption: "Satu tarikan napas sebelum kembali bergerak."
  },
  {
    src: "/gallery/gallery-05.png",
    title: "Cahaya",
    caption: "Harapan pelan yang tetap menyala di dalam malam."
  }
];

const menuItems: MenuItem[] = [
  {
    key: "ruang-aman",
    label: "Ruang Aman",
    eyebrow: "safe space",
    title: "Tempat singgah yang tenang sebelum kembali melangkah.",
    body:
      "Escape dirancang sebagai ruang digital yang lembut: membantu pengguna menenangkan pikiran, mengenali emosi, dan membangun ritme produktivitas yang lebih sehat.",
    points: ["Relaksasi terpandu", "Jurnal mood ringan", "Latihan napas", "Ruang refleksi harian"]
  },
  {
    key: "produk-layanan",
    label: "Produk Layanan",
    eyebrow: "wellness system",
    title: "Satu ekosistem untuk tenang, fokus, dan bertumbuh.",
    body:
      "Mulai dari audio afirmasi, sleep support, screening ringan, sampai dashboard pengembangan diri. Semua disusun minimalis agar mudah dipakai setiap hari.",
    points: ["Audio relaksasi", "Sleep & meditation", "Screening kesehatan mental", "Insight produktivitas"]
  },
  {
    key: "komunitas",
    label: "Dukungan Komunitas",
    eyebrow: "support circle",
    title: "Dukungan yang hangat, manusiawi, dan tidak menghakimi.",
    body:
      "Komunitas Escape dapat menjadi tempat berbagi energi baik, cerita pulih, dan kebiasaan kecil yang menjaga kesehatan mental dalam kehidupan nyata.",
    points: ["Cerita pengguna", "Sesi tematik", "Dukungan sebaya", "Konten edukasi ringan"]
  },
  {
    key: "riset",
    label: "Riset & Pengembangan",
    eyebrow: "research based",
    title: "Dibangun dengan pendekatan sains, teknologi, dan empati.",
    body:
      "Setiap fitur dapat dikembangkan berbasis data penggunaan, referensi ilmiah, dan evaluasi pengalaman pengguna agar manfaatnya terasa nyata.",
    points: ["Mood analytics", "Audio experiment", "Behavioral insight", "Iterasi berbasis data"]
  },
  {
    key: "cerita",
    label: "Cerita Tentang Kami",
    eyebrow: "our story",
    title: "Escape lahir dari kebutuhan sederhana: jeda yang menyembuhkan.",
    body:
      "Kami percaya teknologi terbaik adalah teknologi yang membuat manusia merasa lebih utuh, lebih tenang, dan lebih mampu menjalani hari.",
    points: ["Human first", "Desain tenang", "Teknologi ringan", "Misi jangka panjang"]
  },
  {
    key: "galeri",
    label: "Galeri Kehidupan",
    eyebrow: "life gallery",
    title: "Kumpulan momen kecil yang membuat hidup terasa kembali.",
    body:
      "Galeri dapat dipakai untuk menampilkan visual, kutipan, audio pilihan, atau cerita pendek yang menguatkan positioning brand Escape.",
    points: ["Visual calm", "Quote harian", "Highlight audio", "Momen bertumbuh"]
  }
];

export default function Home() {
  const [activeKey, setActiveKey] = useState<MenuKey | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideMenuHidden, setIsSideMenuHidden] = useState(false);
  const [isRelaxing, setIsRelaxing] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const activeItem = useMemo(
    () => menuItems.find((item) => item.key === activeKey) ?? null,
    [activeKey]
  );

  const isSafeSpaceOpen = activeKey === "ruang-aman";
  const isProductServiceOpen = activeKey === "produk-layanan";
  const isCommunitySupportOpen = activeKey === "komunitas";
  const isResearchDevelopmentOpen = activeKey === "riset";
  const isGalleryOpen = activeKey === "galeri";
  const isImmersiveOpen =
    isSafeSpaceOpen || isProductServiceOpen || isCommunitySupportOpen || isResearchDevelopmentOpen || isGalleryOpen;
  const panelItem = isImmersiveOpen ? null : activeItem;

  useEffect(() => {
    try {
      const savedMenuState = window.localStorage.getItem("escape-side-menu-hidden");
      setIsSideMenuHidden(savedMenuState === "true");
    } catch {
      setIsSideMenuHidden(false);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("escape-side-menu-hidden", String(isSideMenuHidden));
    } catch {
      // Keep the landing page graceful if localStorage is unavailable.
    }
  }, [isSideMenuHidden]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      if (selectedGalleryItem) {
        setSelectedGalleryItem(null);
        return;
      }

      if (activeKey === "galeri") {
        setActiveKey(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeKey, selectedGalleryItem]);

  const openPanel = (key: MenuKey) => {
    setActiveKey(key);
    setIsMenuOpen(false);
    setIsRelaxing(false);
    setSelectedGalleryItem(null);
  };

  const startRelax = () => {
    setIsRelaxing(true);
    setActiveKey("ruang-aman");
  };

  return (
    <main
      className={`escape-page ${isSafeSpaceOpen ? "safe-space-mode" : ""} ${
        isProductServiceOpen ? "product-service-mode" : ""
      } ${isCommunitySupportOpen ? "community-support-mode" : ""} ${isResearchDevelopmentOpen ? "research-development-mode" : ""} ${isGalleryOpen ? "gallery-life-mode" : ""}`}
    >
      <div className="background-layer" aria-hidden="true" />
      <div className="vignette-layer" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />

      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label="Buka menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <button
        className={`menu-visibility-toggle ${isSideMenuHidden ? "is-hidden-mode" : ""}`}
        type="button"
        aria-label={isSideMenuHidden ? "Tampilkan menu kanan" : "Sembunyikan menu kanan"}
        aria-pressed={isSideMenuHidden}
        onClick={() => setIsSideMenuHidden((current) => !current)}
      >
        <span className="menu-toggle-mark" aria-hidden="true">
          <span />
          <span />
        </span>
        <span>{isSideMenuHidden ? "Show" : "Hide"}</span>
      </button>

      <section className="brand-block" aria-label="Escape introduction">
        <p className="company-name">PT NEUROSAINS INT TECHNOLOGY ID</p>
        <div className="brand-row">
          <h1>ESCAPE</h1>
          <div className="butterfly" aria-hidden="true">
            <img className="butterfly-image" src="/escape-butterfly.png" alt="" />
          </div>
        </div>
        <p className="tagline">RUANG UNTUK KESEHATAN MENTAL &amp; PRODUKTIVITAS</p>
      </section>

      <nav className={`side-menu ${isMenuOpen ? "is-open" : ""} ${isSideMenuHidden ? "is-hidden" : ""}`} aria-label="Menu Escape">
        {menuItems.map((item, index) => (
          <button
            key={item.key}
            type="button"
            className={`menu-link ${activeKey === item.key ? "is-active" : ""}`}
            onClick={() => openPanel(item.key)}
            style={{ "--delay": `${index * 70}ms` } as CSSProperties}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <button className={`relax-button ${isRelaxing ? "is-relaxing" : ""}`} type="button" onClick={startRelax}>
        <span className="power-icon" aria-hidden="true">
          <span className="power-line" />
        </span>
        <span className="relax-text">RELAX</span>
      </button>

      <section className={`safe-space-scene ${isSafeSpaceOpen ? "is-visible" : ""}`} aria-live="polite" aria-label="Ruang Aman">
        {isSafeSpaceOpen ? (
          <div className="safe-space-content">
            <p className="safe-space-kicker">Ruang untuk pulang ke diri sendiri</p>
            <h2>Ruang Aman</h2>
            <h3>Dapatkan Escape di Google Playstore</h3>
            <p>
              Terkadang, keberanian terbesar adalah mengakui bahwa kita butuh waktu sejenak untuk berhenti. Escape
              adalah pendamping setia yang menyediakan ruang aman untuk meditasi, refleksi, dan pemulihan jiwa. Dengan
              pendekatan yang berakar pada sains manusia, kami membantu Anda mengubah rasa cemas menjadi ketenangan,
              dan tekanan menjadi kekuatan. Saatnya memberi ruang bagi diri Anda untuk bernapas kembali.
            </p>
          </div>
        ) : null}

        {isSafeSpaceOpen ? (
          <button className="safe-space-close" type="button" aria-label="Kembali ke landing utama" onClick={() => setActiveKey(null)}>
            Kembali
          </button>
        ) : null}
      </section>

      <section
        className={`product-service-scene ${isProductServiceOpen ? "is-visible" : ""}`}
        aria-live="polite"
        aria-label="Produk Layanan"
      >
        {isProductServiceOpen ? (
          <div className="product-service-card">
            <h2>
              Produk
              <span>Layanan</span>
            </h2>
            <ul className="product-service-list">
              <li>Digital Mental Health Support</li>
              <li>Digital Wellness</li>
              <li>Asesmen Psikologis</li>
              <li>Corporate Custom Services</li>
            </ul>
          </div>
        ) : null}

        {isProductServiceOpen ? (
          <button
            className="product-service-close"
            type="button"
            aria-label="Kembali ke landing utama"
            onClick={() => setActiveKey(null)}
          >
            Kembali
          </button>
        ) : null}
      </section>



      <section
        className={`community-support-scene ${isCommunitySupportOpen ? "is-visible" : ""}`}
        aria-live="polite"
        aria-label="Dukungan Komunitas"
      >
        {isCommunitySupportOpen ? (
          <>
            <article className="community-support-content">
              <p className="community-support-kicker">Dukungan Komunitas</p>
              <h2>Ruang untuk saling menguatkan.</h2>
              <div className="community-support-card">
                <p>
                  Escape membangun dukungan komunitas sebagai tempat yang hangat, aman, dan manusiawi untuk berbagi
                  cerita tanpa tekanan. Setiap orang boleh hadir dengan ritmenya sendiri: mendengar, menulis, belajar,
                  atau sekadar merasa tidak sendirian.
                </p>
                <p>
                  Melalui edukasi kesehatan mental, cerita pemulihan anonim, refleksi bersama, dan dukungan sebaya,
                  kami ingin menghadirkan ruang digital yang lembut: tidak menghakimi, tidak memaksa, dan tetap memberi
                  arah kecil untuk melanjutkan hari.
                </p>
              </div>
            </article>
            <button
              className="community-support-close"
              type="button"
              aria-label="Kembali ke landing utama"
              onClick={() => setActiveKey(null)}
            >
              Kembali
            </button>
          </>
        ) : null}
      </section>

      <section
        className={`research-development-scene ${isResearchDevelopmentOpen ? "is-visible" : ""}`}
        aria-live="polite"
        aria-label="Riset dan Pengembangan"
      >
        {isResearchDevelopmentOpen ? (
          <>
            <div className="research-stage">
              <article className="research-focus-card">
                <img className="research-butterfly" src="/escape-butterfly.png" alt="" />
                <p className="research-kicker">Validasi ilmiah untuk manusia nyata</p>
                <h2>
                  Riset &amp;
                  <span>Pengembangan</span>
                </h2>
                <p>
                  Menggunakan parameter penelitian berstandar internasional, kami memastikan setiap pengembangan produk
                  didasarkan pada studi manusia yang komprehensif dan pembaruan sains terkini. Kami tidak hanya mengikuti
                  tren; kami membangun masa depan melalui validasi ilmiah.
                </p>
              </article>
            </div>
            <button
              className="research-development-close"
              type="button"
              aria-label="Kembali ke landing utama"
              onClick={() => setActiveKey(null)}
            >
              Kembali
            </button>
          </>
        ) : null}
      </section>

      <section
        className={`gallery-life-scene ${isGalleryOpen ? "is-visible" : ""}`}
        aria-live="polite"
        aria-label="Galeri Kehidupan"
      >
        {isGalleryOpen ? (
          <>
            <article className="gallery-intro">
              <h2>Galeri</h2>
              <p>
                Duduk santai sejenak di depan komputer dengan secangkir minuman kesukaan kamu sambil ikuti
                arahan yang muncul pada layar.
              </p>
            </article>

            <div className="gallery-polaroid-track" aria-label="Pilihan galeri Escape">
              {galleryItems.map((item, index) => (
                <button
                  className={`gallery-polaroid gallery-polaroid-${index + 1}`}
                  key={item.src}
                  type="button"
                  onClick={() => setSelectedGalleryItem(item)}
                >
                  <span className="gallery-tape gallery-tape-top" aria-hidden="true" />
                  <img src={item.src} alt={item.title} />
                  <span className="gallery-caption">{item.title}</span>
                  <span className="gallery-tape gallery-tape-bottom" aria-hidden="true" />
                </button>
              ))}
            </div>

            <p className="gallery-instruction">Geser &amp; Tekan untuk Memilih.</p>

            <button
              className="gallery-life-close"
              type="button"
              aria-label="Kembali ke landing utama"
              onClick={() => {
                setSelectedGalleryItem(null);
                setActiveKey(null);
              }}
            >
              Kembali
            </button>
          </>
        ) : null}
      </section>

      {selectedGalleryItem ? (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={selectedGalleryItem.title}>
          <button className="gallery-lightbox-backdrop" type="button" aria-label="Tutup galeri" onClick={() => setSelectedGalleryItem(null)} />
          <figure className="gallery-lightbox-card">
            <button className="gallery-lightbox-close" type="button" aria-label="Tutup galeri" onClick={() => setSelectedGalleryItem(null)}>
              ×
            </button>
            <img src={selectedGalleryItem.src} alt={selectedGalleryItem.title} />
            <figcaption>
              <strong>{selectedGalleryItem.title}</strong>
              <span>{selectedGalleryItem.caption}</span>
            </figcaption>
          </figure>
        </div>
      ) : null}

      <aside className={`content-panel ${panelItem ? "is-visible" : ""}`} aria-live="polite">
        {panelItem && (
          <div className="panel-card">
            <button className="panel-close" type="button" aria-label="Tutup panel" onClick={() => setActiveKey(null)}>
              ×
            </button>
            <p className="panel-eyebrow">{panelItem.eyebrow}</p>
            <h2>{panelItem.title}</h2>
            <p className="panel-body">{panelItem.body}</p>
            <div className="panel-points">
              {panelItem.points.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
            {isRelaxing && panelItem.key === "ruang-aman" ? (
              <div className="breath-box" aria-label="Panduan napas singkat">
                <div className="breath-orb" />
                <div>
                  <strong>Tarik napas pelan.</strong>
                  <p>Diam sejenak, lalu lepaskan. Mulai dari 30 detik saja.</p>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </aside>

      <footer className="micro-footer">
        <span>Escape Experience</span>
        <span>One Page Cinematic Landing</span>
      </footer>
    </main>
  );
}
