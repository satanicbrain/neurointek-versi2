'use client';

import { useEffect, useMemo, useState } from 'react';

const sections = [
  {
    id: 'home',
    number: '00',
    title: 'Home',
    label: 'Home',
    image: '/backgrounds/0-home.webp',
    tone: 'dark',
    tagline: 'Ruang visual pembuka Neurointek.',
  },
  {
    id: 'bisnis-manusia',
    number: '01',
    title: 'Bisnis & Manusia',
    label: 'Bisnis & Manusia',
    image: '/backgrounds/5-tentang-kami.webp',
    tone: 'natural',
    tagline: 'Ruang penghubung antara kebutuhan bisnis dan keberlanjutan manusia.',
  },
  {
    id: 'ruang-aman',
    number: '02',
    title: 'Ruang Aman',
    label: 'Ruang Aman',
    image: '/backgrounds/1-ruang-aman.webp',
    tone: 'light',
    tagline: 'Tempat tenang untuk bertumbuh, pulih, dan mulai kembali.',
  },
  {
    id: 'produk-layanan',
    number: '03',
    title: 'Produk Layanan Kesehatan Mental',
    label: 'Produk Layanan Kesehatan Mental',
    image: '/backgrounds/2-produk-layanan.webp',
    tone: 'warm',
    tagline: 'Ekosistem solusi kesehatan mental dan produktivitas yang dapat dikembangkan bertahap.',
  },
  {
    id: 'dukungan-komunitas',
    number: '04',
    title: 'Dukungan Komunitas',
    label: 'Dukungan Komunitas',
    image: '/backgrounds/3-dukungan-komunitas.webp',
    tone: 'community',
    tagline: 'Dibangun untuk manusia, dukungan, dan koneksi yang sehat.',
  },
  {
    id: 'riset-pengembangan',
    number: '05',
    title: 'Riset dan Pengembangan Manusia',
    label: 'Riset dan Pengembangan Manusia',
    image: '/backgrounds/4-riset-pengembangan.webp',
    tone: 'research',
    tagline: 'Eksplorasi, strategi, dan pengembangan manusia berbasis data.',
  },
  {
    id: 'tentang-kami',
    number: '06',
    title: 'Tentang Kami',
    label: 'Tentang Kami',
    image: '/backgrounds/5-tentang-kami.webp',
    tone: 'natural',
    tagline: 'Cerita sederhana tentang tujuan dan arah Neurointek.',
  },
  {
    id: 'galeri-kehidupan',
    number: '07',
    title: 'Galeri kehidupan',
    label: 'Galeri kehidupan',
    image: '/backgrounds/6-galeri-kehidupan.webp',
    tone: 'green',
    tagline: 'Ruang visual untuk dokumentasi, inspirasi, dan perjalanan.',
  },
];

const communityYoutubeUrl = 'https://www.youtube.com/live/jfKfPfyJRdk?si=XNobWQBs9aSSXXEo';
const researchTargetEmail = '';
const researchTargetWhatsapp = '';
const floatingWhatsappNumber = '628176494177';
const floatingWhatsappMessage = 'Halo NeuroTech ID, saya ingin terhubung dan bertanya tentang layanan.';
const coconutWhatsappMessage = 'Halo NeuroTech ID, saya tertarik dengan Indonesia Coconut dan produk mentah unggulan.';


const mentalHealthServices = [
  {
    category: 'Digital Mental Health Support',
    items: [
      {
        title: 'Employee Emotion Tracking',
        tagline: 'Providing company to make a better decision.',
        body:
          'Untuk menghasilkan kinerja optimal, seseorang harus berada dalam kondisi sehat secara jasmani dan psikis. Emotion Tracking dari Escape memberi gambaran global atau kelompok untuk melihat tingkat emosi dan kestabilan kinerja karyawan, sekaligus membantu perusahaan menghindari risiko burnout yang dapat mengurangi produktivitas. Kami percaya jiwa yang sehat akan menciptakan perusahaan yang berdaya.',
      },
      {
        title: 'Mental Health Corporate Program',
        tagline: 'Program terstruktur untuk ekosistem kerja yang lebih sehat.',
        body:
          'Memahami kesehatan mental secara tepat dan terstruktur dalam rangka pembangunan ekosistem positif di dalam organisasi. Layanan ini berfokus pada penguatan aspek individu, regulasi internal, dan interaksi kerja yang sehat agar manajemen dapat menentukan strategi yang tepat guna.',
      },
    ],
  },
  {
    category: 'Digital Wellness',
    items: [
      {
        title: 'Escape',
        tagline: 'Sleep, calm, recovery, dan dukungan pulih digital.',
        body:
          'Kesehatan mental sangat berkaitan dengan kualitas tidur. Escape membantu karyawan mencapai kondisi tidur yang lebih dalam dan optimal. Didukung tim profesional dan riset bertaraf internasional, aplikasi ini dapat menjadi solusi pendukung kinerja melalui perbaikan kualitas tidur.',
      },
      {
        title: 'ProLife',
        tagline: 'Kesehatan fisik dimulai dari langkah sederhana.',
        body:
          'Kami percaya tubuh dan mental yang sehat akan berkontribusi maksimal pada kinerja organisasi. Kesehatan fisik menjadi gambaran kuat agar manusia dapat merasakan kesejahteraan hidup yang lebih baik, menyebarkan hal positif, dan berperan aktif dalam kelompok maupun masyarakat.',
      },
      {
        title: 'Catatan Keuangan, Habit Tracking, Movement',
        tagline: 'Fitur pendamping untuk kebiasaan hidup yang lebih seimbang.',
        body:
          'Modul pendukung disiapkan bertahap untuk membantu pengguna memahami pola finansial, kebiasaan harian, aktivitas tubuh, dan ritme hidup yang memengaruhi kesejahteraan mereka secara utuh.',
      },
    ],
  },
];

const assessmentModels = [
  { title: 'Skrining Kesehatan Mental Umum', source: 'GMHQ-5 WHO', status: 'Gratis awal' },
  { title: 'Skrining Kecemasan Umum', source: 'Hamilton Adapted', status: 'Request / Buy Access' },
  { title: 'Skrining Depresi Umum', source: 'PHQ-9', status: 'Request / Buy Access' },
  { title: 'Skrining Gangguan Tidur', source: 'SIS', status: 'Request / Buy Access' },
  { title: 'Skrining NPD', source: 'By NeuroTech ID', status: 'Request / Buy Access' },
  { title: 'Model lainnya', source: 'Menyusul', status: '99+ model' },
];

const coconutSlides = [
  {
    id: 'opening',
    background: '/backgrounds/indonesia-coconut.webp',
    mode: 'opening',
    eyebrow: 'Indonesian Coconut',
    titleTop: 'Produk Mentah',
    titleBottom: 'Unggulan',
    description:
      'Indonesia secara konsisten menempati peringkat ke-1 dunia sebagai produsen kelapa, berkontribusi sekitar 27% hingga 30% terhadap total produksi kelapa global, mengungguli Filipina dan India.',
  },
  {
    id: 'story',
    background: '/backgrounds/indonesia-coconut-cut.webp',
    mode: 'story',
    eyebrow: 'Indonesian Coconut',
    upperText:
      'Kelapa Indonesia adalah simbol efisiensi sejati. Dari akar hingga pucuk daun, hampir tidak ada bagian yang terbuang. Di tangan para pelaku industri yang inovatif, setiap bagian kelapa diolah menjadi produk bernilai tambah—mulai dari energi terbarukan, bahan pangan kesehatan, hingga media tanam yang ramah lingkungan.',
    description:
      'Keunggulan kelapa Indonesia adalah perpaduan antara ketulusan alam dan ketangguhan karakter. Ia bukan sekadar hasil bumi; ia adalah duta kehangatan tropis yang membawa kualitas tanpa kompromi ke setiap penjuru dunia.',
  },
  {
    id: 'arang',
    background: '/backgrounds/coconut-arang.webp',
    mode: 'editorial',
    variant: 'arang',
    title: 'ARANG',
    subtitle: 'Lahir dari Api dan Ketulusan',
    upperText:
      'Proses penciptaan arang ini bukanlah sekadar pembakaran biasa. Ia adalah sebuah seni yang menuntut kesabaran. Tempurung kelapa pilihan dibersihkan dengan tangan-tangan terampil, lalu dimasukkan ke dalam tungku dengan suhu yang terjaga. Di sana, dalam kegelapan api, tempurung yang keras berubah menjadi arang hitam yang legam dan berkilau. Para pengrajin bekerja dengan standar profesional, memastikan setiap keping arang memiliki karbonisasi yang sempurna, tanpa asap yang mengganggu, mencerminkan kejernihan niat mereka.',
    bandTitle: 'Kehangatan untuk kebahagiaan',
    description:
      'Kehangatan yang dihasilkan oleh arang ini adalah representasi dari kehangatan kasih sayang masyarakat dalam menjaga keberlangsungan alam. Dari batok yang terlupakan, muncul kekuatan yang menyala, membuktikan bahwa kebermanfaatan sejati seringkali ditemukan dalam kesederhanaan yang dipoles dengan profesionalisme dan cinta.',
  },
  {
    id: 'kopra',
    background: '/backgrounds/coconut-kopra.webp',
    mode: 'editorial',
    variant: 'kopra',
    title: 'Kopra',
    subtitle: '',
    upperText:
      'Bisnis yang hebat dibangun di atas fondasi yang kuat dan dalam industri berbasis kelapa, fondasi itu adalah kopra yang unggul. Dengan memilih kopra yang diproses secara benar dan etis, Anda tidak hanya mengamankan kualitas produk akhir, tetapi juga menyebarkan dampak positif bagi seluruh ekosistem di dalamnya.',
    bandTitle: 'Suhu yang pas untuk kualitas terbaik',
    description:
      'Di tanah pesisir yang dipenuhi aroma garam, kopra lahir dari sebuah perjalanan panjang yang melibatkan api dan matahari. Bagi warga lokal, mengolah daging kelapa menjadi kopra adalah sebuah ritual ketekunan. Mereka tidak hanya mengandalkan tenaga otot, tetapi juga kepekaan rasa dalam memahami cuaca dan suhu.',
  },
  {
    id: 'ladang-beras-putih',
    background: '/backgrounds/coconut-rice-field.webp',
    mode: 'editorial',
    variant: 'rice',
    title: 'Ladang Beras Putih',
    subtitle: '',
    upperText:
      'Setiap pagi, sebelum matahari benar-benar menyapa bumi, langkah kaki para petani telah membelah embun. Ada ritme yang indah dalam setiap gerakan mereka—tangan-tangan yang lincah mencabut rumput liar, bahu yang kokoh memanggul air, dan tatapan mata yang penuh harap pada tunas-tunas hijau yang mulai meninggi. Mereka memberikan tenaga mereka bukan karena keharusan, melainkan karena sebuah hubungan emosional yang mendalam.',
    bandTitle: '',
    description:
      'Setiap bulir padi yang mulai merunduk adalah saksi bisu dari tetesan keringat dan doa yang dipanjatkan. Di sini, cinta tidak diungkapkan dengan kata-kata, melainkan melalui ketelatenan dalam memastikan setiap jengkal tanah mendapatkan nutrisi terbaik. Kehidupan yang tumbuh di ladang ini adalah cerminan dari jiwa-jiwa yang memberikan segalanya demi kelangsungan hidup sesama.',
  },

  {
    id: 'hubungi-kami',
    background: '/backgrounds/contact-rice-bg.webp',
    mode: 'contact',
    title: 'Hubungi Kami',
    subtitle: 'untuk Layanan Lengkap',
    gallery: [
      { label: 'Kopra', image: '/backgrounds/contact-kopra.webp' },
      { label: 'Arang', image: '/backgrounds/contact-charcoal.webp' },
      { label: 'Petani Lokal', image: '/backgrounds/contact-mother.webp' },
      { label: 'Kopi', image: '/backgrounds/contact-coffee.webp' },
      { label: 'Bawang', image: '/backgrounds/contact-onion.webp' },
    ],
  },
];

const researchReferences = [
  {
    title: 'Peran Kognitif dalam Produktivitas Karyawan',
    year: '2026',
    source: 'ResearchGate',
    topic: 'Mental Health · Cognitive Function',
    summary:
      'Membaca hubungan kesehatan mental dengan produktivitas melalui fungsi kognitif seperti fokus, memori, dan pengambilan keputusan. Cocok sebagai dasar diskusi asesmen karyawan dan desain intervensi kerja.',
    url: 'https://www.researchgate.net/publication/401506627_The_Impact_of_Mental_Health_on_Employee_Productivity_Mediating_Roles_of_Job_Engagement_and_Cognitive_Functioning',
  },
  {
    title: 'Efektivitas iCBT pada Produktivitas Nasional',
    year: '2026',
    source: 'JMIR / PubMed',
    topic: 'iCBT · Absenteeism · Productivity',
    summary:
      'Studi pada layanan kesehatan Irlandia menunjukkan potensi terapi perilaku kognitif berbasis internet dalam menurunkan absensi dan meningkatkan produktivitas kerja secara terukur.',
    url: 'https://www.jmir.org/2026/1/e80689/',
  },
  {
    title: 'Tren Kesehatan Mental Global OECD',
    year: '2025',
    source: 'OECD',
    topic: 'Global Health · Workplace Risk',
    summary:
      'Laporan OECD menyediakan indikator kesehatan dan konteks kebijakan yang dapat dipakai perusahaan untuk memahami risiko kesehatan mental, akses layanan, dan dampaknya terhadap kualitas kerja.',
    url: 'https://www.oecd.org/en/publications/2025/11/health-at-a-glance-2025_a894f72e/full-report/mental-health_24af6094.html',
  },
  {
    title: 'Korelasi Kebahagiaan dan Output Kerja',
    year: '2019',
    source: 'Oxford Saïd',
    topic: 'Happiness · Work Output',
    summary:
      'Riset Oxford Saïd menemukan pekerja yang lebih bahagia dapat menunjukkan output lebih tinggi. Temuan ini berguna untuk menjelaskan bahwa well-being bukan biaya tambahan, melainkan pengungkit performa.',
    url: 'https://www.sbs.ox.ac.uk/news/happy-workers-13-more-productive-finds-oxford-said-research',
  },
  {
    title: 'Kesehatan Mental vs Keterampilan Kerja di Indonesia',
    year: '2025',
    source: 'Jurnal UNIGAL',
    topic: 'Indonesia · Productivity · Skills',
    summary:
      'Studi Indonesia tentang kesehatan mental dan keterampilan kerja menunjukkan keduanya berpengaruh positif terhadap produktivitas. Relevan untuk bahan bacaan lokal dalam konteks organisasi Indonesia.',
    url: 'https://jurnal.unigal.ac.id/bmej/article/view/5948',
  },
];


const boardMembers = [
  {
    name: 'Lakudus B.Psych MBA C.Ht',
    role: 'Komisaris',
    image: '/team/lakudus.jpg',
    initials: 'L',
    highlight: 'Ruang digital yang aman, solutif, dan memulihkan.',
    message:
      'Namun, kami menyadari bahwa keberhasilan secara fisik tidaklah utuh tanpa ketenangan di dalam diri. Oleh karena itu, melalui inovasi teknologi kesehatan mental, kami berupaya menciptakan ruang digital yang aman dan solutif. Kami hadir untuk memastikan bahwa di tengah hiruk-pikuk modernitas, setiap manusia tetap memiliki akses untuk memulihkan diri, memahami dirinya sendiri, dan bertumbuh secara sehat. Teknologi bagi kami bukanlah alat untuk menjauhkan, melainkan sarana untuk mendekatkan manusia pada hakikat kebahagiaannya. Kepada para mitra strategis, rekan-rekan kerja, dan seluruh pemangku kepentingan, terima kasih telah berjalan beriringan bersama kami. Mari kita terus melangkah maju, menghadirkan kualitas terbaik dari akar bumi untuk dunia, salam hangat dan sukses selalu.',
  },
  {
    name: 'Iis Syadiah S.H',
    role: 'Direktur Utama',
    image: '/team/iis-syadiah.webp',
    initials: 'IS',
    highlight: 'Bisnis bertumbuh tanpa kehilangan sisi kemanusiaannya.',
    message:
      'Pangan adalah sumber energi bagi raga, namun dedikasi adalah energi bagi jiwa. Dengan menyatukan kecanggihan teknologi pengelolaan dan kedalaman pemahaman terhadap aspek psikologis manusia, kita tidak hanya sekadar mengirimkan produk ke pasar global. Kita sedang mengirimkan pesan tentang bagaimana sebuah bisnis bisa bertumbuh tanpa kehilangan sisi kemanusiaannya. Kepada seluruh rekan kerja, mitra strategis, dan para pemangku kepentingan, mari kita bersama-sama membangun kekuatan dari dalam. Mari kita jadikan perusahaan ini sebagai tempat di mana jiwa-jiwa yang tangguh berkolaborasi untuk menciptakan ketahanan pangan yang berkelanjutan dan bermartabat.',
  },
  {
    name: 'Ahyar Anas',
    role: 'Direktur Kepatuhan',
    image: '',
    initials: 'AA',
    highlight: 'Kepatuhan, transparansi, dan keberlanjutan mental manusia.',
    message:
      'Menciptakan lingkungan kerja yang mendukung kesehatan jiwa bukan lagi sekadar pilihan kebijakan kesejahteraan, melainkan sebuah kewajiban etis. Kami memastikan bahwa transparansi, keadilan, dan ruang untuk didengar menjadi standar yang dipatuhi oleh seluruh jajaran manajemen. Dengan jiwa yang sehat, kita membangun benteng pertahanan yang kuat terhadap praktik-praktik yang merugikan perusahaan. Keberlangsungan perusahaan hanya dapat dicapai jika kita mampu menyelaraskan antara target bisnis dengan kelestarian mental manusia dan kelestarian alam. Kepatuhan terhadap nilai-nilai keberlanjutan memastikan bahwa apa yang kita bangun hari ini tidak mengorbankan masa depan. Salam hangat.',
  },
  {
    name: 'Della Angela S.E',
    role: 'Direktur Pemasaran',
    image: '',
    initials: 'DA',
    highlight: 'Strategi terbaik bermula dari kebahagiaan di dalam tim.',
    message:
      'Sebagai Direktur Pemasaran, saya percaya bahwa strategi terbaik bermula dari kebahagiaan di dalam tim kita sendiri. Mustahil bagi kita untuk menyebarkan pesan kebahagiaan ke luar jika kita tidak merasakannya di dalam. Oleh karena itu, kami membangun budaya kerja yang menghargai kesehatan jiwa setiap individu. Ketika tim pemasaran bekerja dengan pikiran yang jernih dan hati yang tenang, kreativitas yang lahir akan menjadi lebih tulus, dan pesan yang tersampaikan akan jauh lebih kuat meresap ke dalam hati konsumen.',
  },
  {
    name: 'Sadam Nursidi',
    role: 'Direktur Keuangan',
    image: '/team/sadam.jpg',
    initials: 'SN',
    highlight: 'Investasi pada kesehatan jiwa adalah ROI tertinggi.',
    message:
      'Kami meyakini bahwa kesehatan finansial perusahaan adalah fondasi yang memungkinkan misi kemanusiaan kita terwujud. Setiap alokasi dana yang kami kelola adalah investasi untuk masa depan, baik dalam bentuk penguatan rantai pasok ekspor bahan mentah maupun pengembangan teknologi kesehatan mental yang inovatif. Bagi kami, ekosistem yang kuat adalah ekosistem di mana aliran sumber daya berjalan dengan transparan dan adil. Dimulai dari dukungan finansial bagi para mitra di hulu, hingga penyediaan fasilitas kesejahteraan mental bagi tim internal kami. Kami percaya bahwa investasi pada kesehatan jiwa manusia adalah bentuk Return on Investment tertinggi, karena manusia yang bahagia dan tangguh adalah penggerak utama pertumbuhan ekonomi yang sesungguhnya.',
  },
];

function getYoutubeEmbedUrl(url) {
  if (!url) return '';

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace('www.', '');

    if (host === 'youtu.be') {
      const videoId = parsed.pathname.replace('/', '');
      return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    }

    if (host.includes('youtube.com')) {
      if (parsed.pathname.startsWith('/embed/')) return url;

      if (parsed.pathname.startsWith('/live/')) {
        const videoId = parsed.pathname.split('/').filter(Boolean).pop();
        return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
      }

      if (parsed.pathname.startsWith('/shorts/')) {
        const videoId = parsed.pathname.split('/').filter(Boolean).pop();
        return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
      }

      const videoId = parsed.searchParams.get('v');
      return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    }
  } catch {
    return '';
  }

  return '';
}

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [coconutModalOpen, setCoconutModalOpen] = useState(false);
  const [coconutSlideIndex, setCoconutSlideIndex] = useState(0);

  const active = sections[activeIndex];
  const selectedBoardMember = boardMembers[selectedBoardIndex] || boardMembers[0];
  const communityYoutubeEmbedUrl = useMemo(() => getYoutubeEmbedUrl(communityYoutubeUrl), []);
  const activeCoconutSlide = coconutSlides[coconutSlideIndex] || coconutSlides[0];

  useEffect(() => {
    const initialId = window.location.hash.replace('#', '');
    const foundIndex = sections.findIndex((section) => section.id === initialId);
    if (foundIndex >= 0) {
      setActiveIndex(foundIndex);
    }
  }, []);

  useEffect(() => {
    window.location.hash = active.id;
  }, [active.id]);

  useEffect(() => {
    if (active.id !== 'tentang-kami') {
      setAboutExpanded(false);
      return undefined;
    }

    setSelectedBoardIndex(0);
    setAboutExpanded(false);
    const timer = window.setTimeout(() => {
      setAboutExpanded(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [active.id]);

  useEffect(() => {
    if (!coconutModalOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setCoconutModalOpen(false);
      }

      if (event.key === 'ArrowRight') {
        setCoconutSlideIndex((current) => (current + 1) % coconutSlides.length);
      }

      if (event.key === 'ArrowLeft') {
        setCoconutSlideIndex((current) => (current - 1 + coconutSlides.length) % coconutSlides.length);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [coconutModalOpen]);

  const backgroundStyle = useMemo(
    () => ({
      backgroundImage: `url(${active.image})`,
    }),
    [active.image],
  );

  function goToSection(index) {
    setActiveIndex(index);
    setMenuOpen(false);
    setCoconutModalOpen(false);
  }

  function goToSectionId(sectionId) {
    const nextIndex = sections.findIndex((section) => section.id === sectionId);
    if (nextIndex >= 0) {
      goToSection(nextIndex);
    }
  }

  function openECourseGallery() {
    goToSectionId('galeri-kehidupan');
  }

  function openCommunityYoutube() {
    if (communityYoutubeUrl) {
      window.open(communityYoutubeUrl, '_blank', 'noopener,noreferrer');
    }
  }

  const floatingWhatsappUrl = `https://wa.me/${floatingWhatsappNumber}?text=${encodeURIComponent(floatingWhatsappMessage)}`;
  const coconutWhatsappUrl = `https://wa.me/${floatingWhatsappNumber}?text=${encodeURIComponent(coconutWhatsappMessage)}`;

  function submitResearchRequest(event, channel) {
    const form = event.currentTarget.form;
    if (!form) return;

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    const body = [
      'Form Permintaan Riset - NeuroTech ID',
      '',
      `Nama Perusahaan: ${values.company || '-'}`,
      `Nama PIC: ${values.pic || '-'}`,
      `Email Perusahaan: ${values.email || '-'}`,
      `Nomor WhatsApp: ${values.whatsapp || '-'}`,
      '',
      'Kebutuhan Riset:',
      values.needs || '-',
    ].join('\n');

    if (channel === 'email') {
      const subject = encodeURIComponent('Permintaan Riset - NeuroTech ID');
      const encodedBody = encodeURIComponent(body);
      const recipient = researchTargetEmail ? researchTargetEmail : '';
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${encodedBody}`;
      return;
    }

    if (channel === 'whatsapp') {
      const cleanWhatsapp = researchTargetWhatsapp.replace(/\D/g, '');
      const whatsappUrl = cleanWhatsapp
        ? `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(body)}`
        : `https://wa.me/?text=${encodeURIComponent(body)}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <main className={`site-shell tone-${active.tone}`}>
      <div className="background-layer" style={backgroundStyle} />
      <div className="vignette-layer" />
      <div className="soft-layer" />
      <div
        className={`menu-screen-dim ${menuOpen ? 'is-active' : ''}`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <button
        className="menu-trigger"
        type="button"
        aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <aside className={`side-menu ${menuOpen ? 'is-open' : 'is-closed'}`}>
        <nav className="section-list" aria-label="Menu utama">
          {sections.map((section, index) => (
            <button
              key={section.id}
              className={index === activeIndex ? 'active' : ''}
              type="button"
              onClick={() => goToSection(index)}
            >
              <span className="menu-label">{section.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {active.id === 'home' && (
        <button
          className="escape-brand"
          type="button"
          aria-label="Kembali ke Home"
          onClick={() => goToSection(0)}
        >
          <div className="brand-topline">
            <p className="brand-kicker">PT. Neurosains Inti Technology ID</p>
          </div>
          <div className="brand-row">
            <h1>ESCAPE</h1>
            <img src="/butterfly-logo.png" alt="Logo kupu-kupu Escape" />
          </div>
          <p className="brand-subtitle">RUANG UNTUK KESEHATAN MENTAL &amp; PRODUKTIVITAS</p>
        </button>
      )}

      {active.id === 'bisnis-manusia' && (
        <section className="business-human-section" aria-live="polite">
          <article className="business-human-copy">
            <p className="business-human-kicker">01 <span>/</span> Bisnis &amp; Manusia</p>
            <h2>Bisnis tumbuh bersama manusia dan akar bumi Indonesia.</h2>
            <p>
              Halaman ini menjadi ruang penghubung antara produk mentah unggulan, nilai kemanusiaan,
              dan arah bisnis NeuroTech ID. Kita mulai dari komoditas yang dekat dengan kehidupan:
              kelapa Indonesia sebagai simbol daya tahan, keberlanjutan, dan peluang global.
            </p>
          </article>

          <aside className="raw-product-panel" aria-label="Produk mentah unggulan">
            <p>Produk mentah unggulan</p>
            <button
              className="raw-product-link"
              type="button"
              onClick={() => {
                setCoconutSlideIndex(0);
                setCoconutModalOpen(true);
              }}
            >
              <span>Indonesia Coconut</span>
              <em>Lihat narasi produk</em>
            </button>
          </aside>
        </section>
      )}

      {coconutModalOpen && (
        <div className="coconut-showcase" role="presentation" onClick={() => setCoconutModalOpen(false)}>
          <section
            key={activeCoconutSlide.id}
            className={`coconut-slide coconut-slide-${activeCoconutSlide.mode} ${activeCoconutSlide.variant ? `coconut-slide-${activeCoconutSlide.variant}` : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label="Indonesia Coconut"
            style={{ backgroundImage: `url(${activeCoconutSlide.background})` }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="coconut-close"
              type="button"
              aria-label="Tutup Indonesia Coconut"
              onClick={() => setCoconutModalOpen(false)}
            >
              ×
            </button>

            <button
              className="coconut-arrow coconut-arrow-left"
              type="button"
              aria-label="Slide sebelumnya"
              onClick={() => setCoconutSlideIndex((current) => (current - 1 + coconutSlides.length) % coconutSlides.length)}
            >
              <span aria-hidden="true" />
            </button>

            <button
              className="coconut-arrow coconut-arrow-right"
              type="button"
              aria-label="Slide berikutnya"
              onClick={() => setCoconutSlideIndex((current) => (current + 1) % coconutSlides.length)}
            >
              <span aria-hidden="true" />
            </button>

            {activeCoconutSlide.mode === 'opening' && (
              <div className="coconut-opening-content">
                <img src="/butterfly-logo.png" alt="Logo Escape" />
                <h3>
                  <span>{activeCoconutSlide.titleTop}</span>
                  <strong>{activeCoconutSlide.titleBottom}</strong>
                </h3>
                <div className="coconut-band">
                  <p>{activeCoconutSlide.eyebrow}</p>
                  <small>{activeCoconutSlide.description}</small>
                  <a className="coconut-whatsapp-cta" href={coconutWhatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>
              </div>
            )}

            {activeCoconutSlide.mode === 'story' && (
              <div className="coconut-story-content">
                <p className="coconut-story-top">{activeCoconutSlide.upperText}</p>
                <div className="coconut-story-band">
                  <h3>{activeCoconutSlide.eyebrow}</h3>
                  <p>{activeCoconutSlide.description}</p>
                  <a className="coconut-whatsapp-cta" href={coconutWhatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>
              </div>
            )}

            {activeCoconutSlide.mode === 'editorial' && (
              <div className={`coconut-editorial-content coconut-editorial-${activeCoconutSlide.variant || 'default'}`}>
                <div className="coconut-editorial-head">
                  <h3>{activeCoconutSlide.title}</h3>
                  {activeCoconutSlide.subtitle ? <p>{activeCoconutSlide.subtitle}</p> : null}
                </div>
                <p className="coconut-editorial-top">{activeCoconutSlide.upperText}</p>
                <div className="coconut-editorial-band">
                  {activeCoconutSlide.bandTitle ? <h4>{activeCoconutSlide.bandTitle}</h4> : null}
                  <p>{activeCoconutSlide.description}</p>
                  <a className="coconut-whatsapp-cta" href={coconutWhatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>
              </div>
            )}

            {activeCoconutSlide.mode === 'contact' && (
              <div className="coconut-contact-content">
                <header className="coconut-contact-header">
                  <h3>{activeCoconutSlide.title}</h3>
                  <p>{activeCoconutSlide.subtitle}</p>
                  <a className="coconut-whatsapp-cta coconut-contact-wa" href={coconutWhatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </header>

                <div className="coconut-contact-gallery" aria-label="Galeri produk mentah unggulan">
                  {(activeCoconutSlide.gallery || []).map((item) => (
                    <figure className="coconut-contact-tile" key={item.label}>
                      <img src={item.image} alt={item.label} loading="lazy" decoding="async" />
                    </figure>
                  ))}
                </div>
              </div>
            )}

            <div className="coconut-slide-dots" aria-label="Indikator slide">
              {coconutSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={index === coconutSlideIndex ? 'active' : ''}
                  type="button"
                  aria-label={`Buka slide ${index + 1}`}
                  onClick={() => setCoconutSlideIndex(index)}
                />
              ))}
            </div>
          </section>
        </div>
      )}

      {active.id === 'ruang-aman' && (
        <section className="safe-onboarding safe-centered" aria-live="polite">
          <header className="safe-header">
            <div className="safe-mark" aria-hidden="true">Ɛʃ</div>
            <p className="safe-kicker">02 <span>|</span> RUANG AMAN</p>
            <h2>Safe Onboarding for Personal &amp; Business Growth</h2>
            <p className="safe-intro">
              Daftarkan bisnis Anda untuk terhubung &amp; tumbuh. Ruang Aman menjadi gerbang awal bagi personal
              user maupun pemilik bisnis untuk masuk ke ekosistem Escape, E-Course, dan produk layanan
              NeuroTech ID.
            </p>
          </header>

          <div className="safe-paths">
            <article className="safe-path-card">
              <div className="safe-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4.8 5.6c0-.9.7-1.6 1.6-1.6h4.4c.7 0 1.2.5 1.2 1.2v14.2c0 .4-.5.6-.8.3-.7-.6-1.7-1-2.7-1H6.4c-.9 0-1.6-.7-1.6-1.6V5.6Z" stroke="currentColor" strokeWidth="1.7"/>
                  <path d="M19.2 5.6c0-.9-.7-1.6-1.6-1.6h-4.4c-.7 0-1.2.5-1.2 1.2v14.2c0 .4.5.6.8.3.7-.6 1.7-1 2.7-1h2.1c.9 0 1.6-.7 1.6-1.6V5.6Z" stroke="currentColor" strokeWidth="1.7"/>
                </svg>
              </div>
              <span>Untuk Personal</span>
              <h3>Masuk ke Galeri E-Course</h3>
              <p>
                Pengguna personal diarahkan ke galeri E-Course sebagai ruang belajar awal. Materi akan
                menyusul dan bisa diganti dari data atau link yang Anda siapkan nanti.
              </p>
              <button className="button-ghost" type="button" onClick={openECourseGallery}>
                Buka Galeri E-Course
              </button>
            </article>

            <article className="safe-path-card">
              <div className="safe-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 20.1s-7.3-4.5-8.7-9.3C2.4 7.9 4.2 5.5 7 5.5c1.7 0 3.1.9 4 2.2.9-1.3 2.3-2.2 4-2.2 2.8 0 4.6 2.4 3.7 5.3C19.3 15.6 12 20.1 12 20.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
                  <path d="M7.5 11.2h2.7l1.1-2.1 2.1 4.3 1.1-2.2h2.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Untuk Pemilik Bisnis</span>
              <h3>Terhubung ke Produk &amp; Layanan</h3>
              <p>
                Pemilik bisnis diarahkan ke halaman Produk Layanan untuk melihat Employee Emotion Tracking,
                Corporate Mental Health Program, Digital Wellness, asesmen, dan custom layanan.
              </p>
              <button className="button-solid" type="button" onClick={() => goToSectionId('produk-layanan')}>
                Lihat Produk Layanan
              </button>
            </article>
          </div>
        </section>
      )}

      {active.id === 'produk-layanan' && (
        <section className="mental-products-section" aria-live="polite">
          <article className="mental-products-hero">
            <p className="mental-products-kicker">03 <span>/</span> Produk Layanan Kesehatan Mental</p>
            <h2>Produk Layanan</h2>
            <p className="mental-products-subtitle">Digital mental health support untuk bisnis yang ingin tumbuh tanpa kehilangan sisi manusia.</p>
            <p className="mental-products-body">
              Di balik target, angka, dan strategi besar, selalu ada manusia yang bekerja dengan hati.
              Layanan NeuroTech ID membantu perusahaan memahami kondisi psikologis tim, membangun budaya kerja
              yang lebih sehat, dan mengambil keputusan dengan lebih manusiawi.
            </p>
            <p className="mental-products-terms">
              Catatan: detail hak akses, batas penggunaan data, dan ketentuan layanan bisnis dapat dirapikan lagi
              dalam T&amp;C perjanjian penggunaan untuk user bisnis.
            </p>
            <div className="mental-products-chips" aria-label="Kategori layanan">
              <span>Digital Support</span>
              <span>Digital Wellness</span>
              <span>Assessment</span>
              <span>Custom</span>
            </div>
            <a className="mental-products-cta" href={floatingWhatsappUrl} target="_blank" rel="noopener noreferrer">
              Konsultasi Layanan Bisnis
            </a>
          </article>

          <aside className="mental-products-panel" aria-label="Detail produk layanan kesehatan mental">
            <div className="mental-panel-scroll-hint" aria-hidden="true">scroll layanan</div>

            <section className="mental-service-intro">
              <span>Untuk Organisasi</span>
              <h3>Bangun ekosistem kerja yang sehat, terukur, dan tetap manusiawi.</h3>
              <p>
                Paket layanan dapat disusun bertahap sesuai kebutuhan perusahaan: mulai dari pemetaan emosi,
                program corporate mental health, wellness digital, asesmen, hingga rancangan layanan khusus.
              </p>
            </section>

            {mentalHealthServices.map((group) => (
              <section className="mental-service-group" key={group.category}>
                <p className="mental-group-title">{group.category}</p>
                <div className="mental-service-list">
                  {group.items.map((item) => (
                    <article className="mental-service-card" key={item.title}>
                      <span>{item.tagline}</span>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}

            <section className="mental-assessment-block">
              <div className="mental-assessment-head">
                <div>
                  <p className="mental-group-title">Asesmen Psikologis</p>
                  <h3>99+ Model Skrining Psikologis Tersedia Disini</h3>
                </div>
                <span>IN / ENG</span>
              </div>
              <p className="mental-assessment-quote">
                “Membangun bisnis bukan hanya soal strategi, tapi soal menempatkan hati di tempat yang tepat.
                Layanan asesmen kami hadir untuk membantu Anda mengenal tim lebih dalam—bukan sekadar kompetensi,
                tapi juga kenyamanan mereka dalam berkarya.”
              </p>
              <div className="mental-assessment-list">
                {assessmentModels.map((item, index) => (
                  <article key={item.title}>
                    <small>{String(index + 1).padStart(2, '0')}</small>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.source}</p>
                    </div>
                    <span>{item.status}</span>
                  </article>
                ))}
              </div>
              <div className="mental-result-note">
                <strong>Catatan hasil</strong>
                <p>
                  Hasil skrining bersifat edukatif dan indikatif, bukan diagnosis klinis. Untuk keputusan medis,
                  pengguna tetap diarahkan berkonsultasi dengan psikolog, psikiater, atau tenaga profesional berwenang.
                </p>
              </div>
            </section>

            <section className="mental-custom-service">
              <p className="mental-group-title">Custom Layanan</p>
              <h3>Karena bisnis yang sehat dimulai dari tim yang bahagia dan dipahami.</h3>
              <p>
                Di balik setiap angka dan target yang besar, ada manusia-manusia hebat yang berjuang dengan sepenuh hati.
                Mari bantu mereka menemukan potensi terbaiknya melalui pendekatan yang tepat. Bersama NeuroTech ID,
                mari melangkah membangun masa depan yang lebih sejahtera.
              </p>
              <a href={floatingWhatsappUrl} target="_blank" rel="noopener noreferrer">
                Request / Buy Access
              </a>
            </section>
          </aside>
        </section>
      )}

      {active.id === 'dukungan-komunitas' && (
        <section className="community-support community-two-column" aria-live="polite">
          <div className="community-left-panel">
            <p className="community-kicker">04 <span>|</span> DUKUNGAN KOMUNITAS</p>
            <h2>Community Support, Storytelling &amp; Music Window</h2>
            <p className="community-lead">
              Mari melihat dunia dan cerita mereka. Kita tidak sendirian. Kita bisa berpegangan tangan,
              saling memberi dukungan, dan membangun ruang aman untuk cerita satu arah yang jujur,
              hangat, dan tetap terjaga.
            </p>
            <div className="community-left-note">
              <span>Dukungan Komunitas</span>
              <p>
                Ruang ini dibangun agar cerita manusia dapat hadir apa adanya tanpa kehilangan rasa aman.
              </p>
            </div>
            <div className="music-window music-left">
              <span>Musik Rekomendasi</span>
              <button type="button" onClick={openCommunityYoutube} disabled={!communityYoutubeUrl}>
                via YouTube
              </button>
            </div>
          </div>

          <aside className="community-scroll-panel" aria-label="Detail dukungan dan komunitas">
            <div className="scroll-hint" aria-hidden="true">scroll untuk membaca</div>

            <section className="community-copy-section">
              <p className="community-eyebrow">Fitur Utama Tersedia</p>
              <div className="feature-list feature-list-scroll">
                <article>
                  <span>01</span>
                  <h3>Kolom Cerita Satu Arah</h3>
                  <p>Ruang komentar tanpa balasan, sehingga setiap orang bisa menulis cerita dengan lebih aman, tenang, dan tidak merasa dihakimi.</p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Tombol Dukungan</h3>
                  <p>Love atau like sederhana untuk memberi tanda bahwa cerita seseorang didengar dan mendapat dukungan dari komunitas.</p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Anonim atau Nama Pilihan</h3>
                  <p>Pengguna dapat memilih tampil anonim atau menulis nama sendiri sesuai kenyamanan saat membagikan cerita.</p>
                </article>
                <article>
                  <span>04</span>
                  <h3>Moderasi Admin</h3>
                  <p>Admin dapat menghapus komentar yang dirasa tidak pantas agar ruang komunitas tetap sehat, teduh, dan saling menjaga.</p>
                </article>
              </div>
            </section>

            <section className="community-copy-section community-youtube-section" aria-label="Musik rekomendasi via YouTube">
              <div className="youtube-copy-head">
                <p className="community-eyebrow">Musik Rekomendasi</p>
                <span>via YouTube</span>
              </div>
              {communityYoutubeEmbedUrl ? (
                <div className="youtube-frame-wrap">
                  <iframe
                    src={communityYoutubeEmbedUrl}
                    title="Musik rekomendasi komunitas Escape"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="youtube-placeholder">
                  <span>Video YouTube</span>
                  <p>Link belum terbaca di file. Isi nanti di konstanta communityYoutubeUrl.</p>
                </div>
              )}
            </section>

            <section className="community-copy-section">
              <p className="community-eyebrow">Kategori Cerita</p>
              <div className="category-stack">
                <article>
                  <h3>Curhat &amp; Realitas</h3>
                  <p>Di sini kamu bisa cerita sejujurnya tanpa nama, tentang kejadian yang kamu alami hari ini, dan membiarkan dunia tahu betapa kerasnya hidup ini.</p>
                </article>
                <article>
                  <h3>Inspiratif &amp; Kebaikan</h3>
                  <p>Biarkan dunia tahu tentang kebaikan dan harapan. Ceritakan kisah inspiratif serta pengalaman yang kamu punya untuk membangun semangat orang lain di sini.</p>
                </article>
                <article>
                  <h3>Pengakuan Dosa &amp; Pengampunan</h3>
                  <p>Biarkan ia lepas di sini. Manusia pasti pernah membuat kesalahan. Mari jeda sejenak, menuliskannya, lalu memulai langkah baru menuju penebusan.</p>
                </article>
              </div>
            </section>

            <section className="community-copy-section community-disclaimer">
              <p className="community-eyebrow">Catatan Pengalaman</p>
              <p>
                Komunitas ini bukan ruang diagnosis dan bukan pengganti bantuan profesional. Ia hadir sebagai ruang berbagi,
                mendengar, dan memberi dukungan ringan agar setiap orang merasa lebih ditemani dalam prosesnya.
              </p>
            </section>
          </aside>
        </section>
      )}

      {active.id === 'riset-pengembangan' && (
        <section className="research-development research-final" aria-live="polite">
          <article className="research-hero-column">
            <p className="research-kicker">05 <span>/</span> Riset dan Pengembangan Manusia</p>
            <h2>Riset &amp; Pengembangan</h2>
            <p className="research-title-detail">International Research Library &amp; Evidence-Based Development</p>
            <p className="research-subtitle">Riset internasional untuk keputusan bisnis yang lebih manusiawi.</p>
            <p className="research-body">
              Manusia sebagai aset utama bukan lagi sekadar retorika, melainkan sebuah komitmen yang harus
              dilandasi oleh data. Melalui riset-riset terbaru ini, kita tidak hanya membaca statistik, tetapi
              kita sedang belajar memahami bagaimana mendukung kesejahteraan mereka agar perusahaan dapat tumbuh
              bersama jiwa-jiwa yang sehat dan tangguh.
            </p>
            <button
              className="research-main-cta"
              type="button"
              onClick={() => document.querySelector('[name="company"]')?.focus()}
            >
              Bangun riset untuk bisnis Anda bersama NeuroTech ID
            </button>
          </article>

          <aside className="research-panel-column" aria-label="Form dan perpustakaan riset">
            <form id="research-request-form" className="research-request-form" onSubmit={(event) => event.preventDefault()}>
              <div className="research-form-head">
                <p>Form Permintaan Riset</p>
                <h3>Hubungkan kebutuhan bisnis dengan data yang bisa dipertanggungjawabkan.</h3>
              </div>

              <div className="research-form-grid">
                <label>
                  <span>Nama Perusahaan</span>
                  <input name="company" type="text" placeholder="PT / Instansi / Brand" />
                </label>

                <label>
                  <span>Nama PIC</span>
                  <input name="pic" type="text" placeholder="Nama penghubung" />
                </label>

                <label>
                  <span>Email Perusahaan</span>
                  <input name="email" type="email" placeholder="email@perusahaan.com" />
                </label>

                <label>
                  <span>Nomor WhatsApp</span>
                  <input name="whatsapp" type="tel" placeholder="08xx / 62xx" />
                </label>
              </div>

              <label className="research-form-wide">
                <span>Kebutuhan Riset</span>
                <textarea
                  name="needs"
                  rows="4"
                  placeholder="Contoh: asesmen karyawan, employee emotion tracking, sleep & wellness, burnout prevention..."
                />
              </label>

              <div className="research-actions">
                <button type="button" onClick={(event) => submitResearchRequest(event, 'email')}>
                  Kirim ke Email
                </button>
                <button type="button" onClick={(event) => submitResearchRequest(event, 'whatsapp')}>
                  Kirim ke WhatsApp
                </button>
              </div>
            </form>

            <section className="research-library-note" aria-label="Perpustakaan jurnal internasional">
              <p>Perpustakaan Jurnal Internasional</p>
              <h3>Bahan bacaan terhubung ke sumber data eksternal.</h3>
              <small>
                Intisari disusun dalam Bahasa Indonesia agar mudah dibaca oleh user bisnis. Link eksternal
                disediakan agar klien dapat melihat sumbernya langsung dari perpustakaan jurnal, lembaga riset,
                atau publikasi internasional.
              </small>
            </section>

            <div className="research-reference-list">
              {researchReferences.map((item, index) => (
                <article className="research-reference-card" key={item.title}>
                  <div className="research-cover-shot" aria-hidden="true">
                    <span>{item.source}</span>
                    <strong>{item.year}</strong>
                  </div>
                  <div className="research-reference-copy">
                    <span className="research-reference-topic">{String(index + 1).padStart(2, '0')} · {item.topic}</span>
                    <h4>{item.title}</h4>
                    <p>{item.summary}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      Pelajari lebih dalam
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </section>
      )}


      {active.id === 'tentang-kami' && (
        <section className={`about-us-section ${aboutExpanded ? 'is-bod-expanded' : ''}`} aria-live="polite">
          <div className="about-intro-column">
            <p className="about-kicker">06 <span>/</span> Tentang Kami</p>
            <h2>Manusia, Bisnis, dan Ruang Pulih yang Bertumbuh.</h2>
            <p className="about-lead">
              NeuroTech ID dibangun sebagai ruang kolaborasi antara tata kelola bisnis, teknologi,
              dan kesehatan mental manusia. Kami percaya perusahaan yang kuat tidak hanya tumbuh dari
              angka, tetapi juga dari manusia yang merasa aman, didengar, dan mampu berkembang.
            </p>
            <div className="about-quote-line">
              <span>Board of Directors</span>
              <p>
                Pesan kepemimpinan kami disusun sebagai kompas nilai: transparansi, ketahanan jiwa,
                keberlanjutan, dan keberanian membangun ekosistem kerja yang lebih manusiawi.
              </p>
            </div>
          </div>

          <aside className="bod-drawer" aria-label="Kolom Board of Directors">
            <div className="bod-head">
              <h3>Pesan Kepemimpinan</h3>
            </div>

            <div className="bod-thumb-list" role="tablist" aria-label="Pilih profil pimpinan">
              {boardMembers.map((member, index) => (
                <button
                  key={member.name}
                  className={index === selectedBoardIndex ? 'is-active' : ''}
                  type="button"
                  role="tab"
                  aria-selected={index === selectedBoardIndex}
                  onClick={() => setSelectedBoardIndex(index)}
                >
                  <span className="bod-thumb-image">
                    {member.image ? (
                      <img src={member.image} alt={`Foto ${member.name}`} />
                    ) : (
                      <strong>{member.initials}</strong>
                    )}
                  </span>
                  <span className="bod-thumb-copy">
                    <strong>{member.name}</strong>
                    <em>{member.role}</em>
                  </span>
                </button>
              ))}
            </div>

            <article className="bod-detail-card">
              <div className="bod-detail-portrait">
                {selectedBoardMember.image ? (
                  <img src={selectedBoardMember.image} alt={`Foto ${selectedBoardMember.name}`} />
                ) : (
                  <span>{selectedBoardMember.initials}</span>
                )}
              </div>
              <div className="bod-detail-copy">
                <p className="bod-role">{selectedBoardMember.role}</p>
                <h3>{selectedBoardMember.name}</h3>
                <h4>{selectedBoardMember.highlight}</h4>
                <div className="bod-message-scroll">
                  <p>{selectedBoardMember.message}</p>
                </div>
              </div>
            </article>
          </aside>
        </section>
      )}

      {active.id !== 'home' && active.id !== 'bisnis-manusia' && active.id !== 'ruang-aman' && active.id !== 'produk-layanan' && active.id !== 'dukungan-komunitas' && active.id !== 'riset-pengembangan' && active.id !== 'tentang-kami' && (
        <section className="content-card" aria-live="polite">
          <div>
            <p>{active.number}</p>
            <h2>{active.title}</h2>
          </div>
          <span>{active.tagline}</span>
        </section>
      )}

      <a
        className="floating-whatsapp"
        href={floatingWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi NeuroTech ID melalui WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path d="M16.03 4.1A11.86 11.86 0 0 0 5.84 22.02L4.4 27.34l5.45-1.43a11.84 11.84 0 0 0 6.18 1.74h.01A11.78 11.78 0 0 0 27.9 15.9 11.85 11.85 0 0 0 16.03 4.1Zm.01 21.55h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.23.85.86-3.15-.24-.38a9.85 9.85 0 1 1 8 4.26Zm5.4-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
        </svg>
        <span>WhatsApp</span>
      </a>
    </main>
  );
}
