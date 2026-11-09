/**
 * Content for /program/bisnis-digital.
 * Copy is reproduced verbatim from the live page (including the CMS rich-text
 * markup, inline styles and stray quote characters), so nothing is reworded.
 */

export const CDN = 'https://dibimbing-cdn.sgp1.cdn.digitaloceanspaces.com';
export const LOGO_URL = `${CDN}/1772181010671-logo-cakrawala-v2..webp`;
export const REGISTER_URL = 'https://register.cakrawala.ac.id/';
export const WHATSAPP_PHONE = '6282128900863';

export function whatsappUrl(message: string): string {
  const text = ['Halo Admin Icha!', message].filter(Boolean).join(' ');
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
}

export const seo = {
  title: 'Digital Business (S1) - Cakrawala University',
  description:
    'Jurusan Digital Business Cakrawala University mengajarkan digital marketing, big data, desain website, dan manajemen inovasi untuk transformasi bisnis masa kini.',
  canonical: 'https://www.cakrawala.ac.id/program/bisnis-digital',
};

export const program = {
  name: 'Digital Business (S1)',
  description:
    'Integrasi digital marketing, analitik data, financial technology, dan UI/UX design untuk mencetak pemimpin dan mendorong inovasi bisnis di era ekonomi digital.',
  heroImageUrl: `${CDN}/media-strapi/597df31a58ae2118a4e9c806e7416ab0.webp`,
  whatsappMessage: 'Mau detail informasi Digital Business (S1) di Cakrawala University dong!',
};

export const sidenavItems = [
  { id: 'overview', title: 'Overview' },
  { id: 'whyDepartment', title: 'Mengapa Pilih Jurusan Ini' },
  { id: 'curriculum', title: 'Kurikulum' },
  { id: 'jobOpportunity', title: 'Prospek Kerja' },
  { id: 'achievement', title: 'Capaian Pembelajaran' },
  { id: 'skills', title: 'Skill yang Didapat' },
  { id: 'testimony', title: 'Testimoni' },
  { id: 'faq', title: 'FAQ' },
];

export const overview = {
  title: 'Tentang Program Sarjana (S1) Digital Business',
  // Rendered after an empty `.prose` paragraph, exactly as the browser parses the original markup.
  html:
    '<p>Program studi Digital Business di Cakrawala University membekali mahasiswa dengan kompetensi strategis untuk menghadapi perkembangan ekonomi global. Kurikulumnya mengintegrasikan kepemimpinan bisnis, analitik data prediktif, sistem teknologi keuangan, dan inovasi teknologi untuk menyelesaikan tantangan korporasi yang kompleks.</p>\n' +
    '<p>Mahasiswa dapat menentukan dua pilihan jalur konsentrasi: Data &amp; Analytics atau Financial Technology. Melalui skema 3 tahun pembelajaran di kampus dan 1 tahun pengalaman industri praktis serta proyek akhir, lulusan akan meraih gelar Sarjana Manajemen (S.M.) dengan kualifikasi profesional yang siap bersaing di era digital.</p>\n' +
    '<p></p>',
};

const SPAN_OUTER =
  'background-color:transparent;color:#000000;font-family:Arial,sans-serif;font-size:12pt;';
const SPAN_TEXT =
  'font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;';
const SPAN_ITALIC =
  'font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;';

const richText = (inner: string) =>
  `<meta charset="utf-8"><span style="${SPAN_OUTER}">${inner}</span>`;
const text = (t: string) => `<span style="${SPAN_TEXT}">${t}</span>`;
const italic = (t: string) => `<i><span style="${SPAN_ITALIC}">${t}</span></i>`;

export const whyDepartment = {
  title: 'Alasan Memilih Digital Business (S1)',
  items: [
    {
      icon: 'bx:buildings',
      title: 'Prospek Karier Luas',
      html: richText(
        text(
          'Berbagai organisasi tengah merancang model bisnis mereka melalui transformasi digital, memicu lonjakan kebutuhan akan talenta yang ahli mengelola unit bisnis digital serta mengambil keputusan berbasis data.',
        ),
      ),
    },
    {
      icon: 'bx:trending-up',
      title: 'Potensi Kompensasi Kompetitif',
      html: richText(
        text(
          'Karier di bidang Digital Business dan teknologi informasi secara konsisten menempati jajaran profesi dengan tingkat kompensasi tertinggi di sektor teknologi global.',
        ),
      ),
    },
    {
      icon: 'bx:shopping-bag',
      title: 'Inkubasi Ideal untuk Wirausaha Digital',
      html: richText(
        text(
          'Dinamika lanskap bisnis digital memberikan fondasi praktis bagi mahasiswa untuk merancang, membangun, dan membesarkan&nbsp;',
        ) +
          italic('startup') +
          text(' teknologi milik sendiri.'),
      ),
    },
    {
      icon: 'bx:shape-circle',
      title: 'Terbuka untuk Semua Latar Belakang Pendidikan',
      html: richText(
        text(
          'Kurikulum dirancang secara bertahap dari prinsip paling mendasar, memungkinkan mahasiswa tanpa latar belakang teknis/coding untuk menguasai kompetensi digital secara penuh.',
        ),
      ),
    },
    {
      icon: 'bx:laptop',
      title: 'Peluang Kerja Fleksibel',
      html: richText(
        text(
          'Industri digital memberikan fleksibilitas operasional yang tinggi, membuka peluang kerja jarak jauh (',
        ) +
          italic('remote') +
          text(') maupun hybrid dengan portofolio global.'),
      ),
    },
  ],
};

export const curriculum = {
  title: 'Kurikulum  Digital Business (S1)',
  semesters: [
    {
      semester: '1',
      subjects: [
        'Basic Digital Marketing & Analytics (3 SKS)',
        'Consumer Behavior (3 SKS)',
        'Social Media Marketing (3 SKS)',
        'Digital Visual Communication (3 SKS)',
        'Customer Relationship Management (3 SKS)',
        'AI for Marketing Applications (2 SKS)',
        'SEM & SEO Management (3 SKS)',
      ],
    },
    {
      semester: '2',
      subjects: [
        'Introduction to Accounting (3 SKS)',
        'Introduction to Economics (3 SKS)',
        'Business & Economic Mathematics (3 SKS)',
        'English (2 SKS)',
        'Introduction to IT & Information Systems (3 SKS)',
        'Design Thinking (2 SKS)',
        'Introduction to Digital Business & Management (3 SKS)',
      ],
    },
    {
      semester: '3',
      subjects: [
        'Introduction to Data Analytics (3 SKS)',
        'Statistics for Business (3 SKS)',
        'Business Intelligence & Data (3 SKS)',
        'UI/UX Design (User-Centered Design) (3 SKS)',
        'Risk Management (3 SKS)',
        'Human Capital Management (3 SKS)',
        'E-Commerce (3 SKS)',
      ],
    },
    {
      semester: '4',
      subjects: [
        'Strategic Marketing Management (3 SKS)',
        'Strategic Management (3 SKS)',
        'Intro to Startups (3 SKS)',
        'Business Communication & Negotiation (3 SKS)',
        'Technical / Professional Writing (2 SKS)',
        'Supply Chain & Operations Management (3 SKS)',
        'Brand Management (3 SKS)',
        'Accounting Management (3 SKS)',
      ],
    },
    {
      semester: '5 : Concentration I (Data & Analytics)',
      subjects: [
        'SQL for Data Analyst (3 SKS)',
        'Data Visualization & Dashboarding (3 SKS)',
        'Big Data Analytics (3 SKS)',
        'Operations & Supply Chain Analytics (3 SKS)',
        'AI for Data & Predictive Analytics (3 SKS)',
        'Gamification & Engagement Analytics (3 SKS)',
        'Web Development (2 SKS)',
      ],
    },
    {
      semester: '5 : Concentration II (Financial Technology)',
      subjects: [
        'Assets Valuation (3 SKS)',
        'Financial Risk Management (3 SKS)',
        'Investment Analyst (3 SKS)',
        'Blockchain in Finance (3 SKS)',
        'AI for Financial Decision Making (3 SKS)',
        'FinTech Regulations & Compliance (2 SKS)',
        'Financial Market & FinTech (3 SKS)',
      ],
    },
    {
      semester: '6',
      subjects: [
        'Organization Management (3 SKS)',
        'Digital Economy (3 SKS)',
        'Agile Methodology (3 SKS)',
        'Feasibility Study on Digital Business (3 SKS)',
        'Innovation and Entrepreneurship (3 SKS)',
        'Indonesian Way of Life / Pancasila (2 SKS)',
        'Religions of the World (2 SKS)',
      ],
    },
    {
      semester: '7',
      subjects: [
        'Leadership Management (3 SKS)',
        'Organization Behaviour (3 SKS)',
        'Business Analyst (3 SKS)',
        'Decision Making & Problem Solving (3 SKS)',
        'Social Project: Digital Business Literacy (3 SKS)',
        'Applied Indonesian Language (2 SKS)',
        'Civic Education (Kewarganegaraan) (2 SKS)',
      ],
    },
    {
      semester: '8',
      subjects: ['Capstone Project (6 SKS)', 'Professional Ethics (2 SKS)'],
    },
  ],
};

export const jobOpportunity = {
  title: 'Prospek Kerja Digital Business (S1)',
  // The CMS stores no icon for these jobs, so the icon slot renders empty (as on the live page).
  items: [
    {
      title: 'Digital Marketer',
      description:
        'Merancang strategi pemasaran digital berbasis data, mengelola kampanye iklan berbayar, serta mengoptimalkan tingkat konversi untuk pertumbuhan bisnis. Estimasi gaji profesi ini berkisar antara Rp7.000.000 hingga Rp13.000.000/bulan.',
    },
    {
      title: 'Data Analyst',
      description:
        'Mengekstrak, mengolah, dan menganalisis data bisnis serta perilaku konsumen untuk memberikan wawasan operasional berbasis data. Estimasi gaji profesi ini berkisar antara Rp7.000.000 hingga Rp12.000.000/bulan.',
    },
    {
      title: 'Business Intelligence Analyst',
      description:
        'Merancang dashboard visual interaktif, memantau metrik performa perusahaan, serta mengintegrasikan data bisnis menggunakan SQL dan Power BI. Estimasi gaji profesi ini berkisar antara Rp8.000.000 hingga Rp13.000.000/bulan.',
    },
    {
      title: 'Digital Product Manager',
      description:
        'Mengelola siklus hidup produk digital mulai dari riset pasar, ideasi fitur, hingga peluncuran aplikasi bersama tim teknologi dan UI/UX. Estimasi gaji profesi ini berkisar antara Rp8.500.000 hingga Rp15.000.000/bulan.',
    },
    {
      title: 'E-Commerce Manager',
      description:
        'Mengelola operasional platform e-commerce, merancang strategi penetapan harga, serta mengoptimalkan pengalaman belanja pelanggan secara digital. Estimasi gaji profesi ini berkisar antara Rp8.000.000 hingga Rp14.000.000/bulan.',
    },
    {
      title: 'Business Development Analyst',
      description:
        'Menganalisis peluang pasar baru, merancang kemitraan strategis, serta mengeksekusi strategi ekspansi bisnis di ekosistem digital. Estimasi gaji profesi ini berkisar antara Rp7.500.000 hingga Rp13.500.000/bulan.',
    },
  ],
};

export const learningOutcomes = {
  title: 'Capaian Pembelajaran Lulusan',
  items: [
    {
      title: 'Aspek Sikap (S)',
      icon: 'bx:user',
      reference:
        "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia No. 3 Tahun 2020 tentang Standar Nasional Pendidikan Tinggi, Bloom's Taxonomy ranah sikap & Visi misi Prodi/Universitas",
      aspects: [
        ['S1', 'Menunjukkan sikap religius dan ketakwaan kepada Tuhan Yang Maha Esa'],
        ['S2', 'Menjalankan tugas berdasarkan agama, moral dan etika serta dapat menjunjung tinggi nilai kemanusiaan'],
        ['S3', 'Bekerja sama dan menunjukkan kepekaan sosial serta kepedulian terhadap masyarakat dan lingkungan'],
        ['S4', 'Berperan sebagai warga negara yang bangga dan cinta tanah air memiliki nasionalisme serta rasa tanggungjawab pada negara dan bangsa'],
        ['S5', 'Berkontribusi dalam peningkatan mutu kehidupan bermasyarakat, berbangsa dan bernegara berdasarkan Pancasila'],
        ['S6', 'Menunjukkan bentuk penghargaan terhadap keanekaragaman agama, kepercayaan, pandangan dan budaya, serta pendapat atau temuan orisinal orang lain'],
        ['S7', 'Menaati ketentuan hukum dan disiplin dalam kehidupan bermasyarakat dan bernegara'],
        ['S8', 'Menunjukkan sikap bertanggung jawab atas pekerjaan di bidang keahliannya\nsecara mandiri\n'],
        ['S9', 'Menunjukkan internalisasi norma, nilai, dan etika akademik'],
        ['S10', 'Menunjukkan internalisasi kejuangan, kewirausahaan, dan semangat kemandirian'],
        ['S11', 'Memiliki integritas, kredibilitas, dan etos kerja yang tinggi serta bertanggung jawab'],
      ],
    },
    {
      title: ' Aspek Pengetahuan (P)',
      icon: 'bx:book-bookmark',
      reference:
        "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia No. 3 Tahun 2020 tentang Standar Nasional Pendidikan Tinggi, Bloom's Taxonomy ranah pengetahuan & Visi misi Prodi/Universitas",
      aspects: [
        ['P1', 'Memadukan konsep integritas akademik secara umum dan konsep plagiarisme secara khusus, dalam hal jenis plagiarisme, konsekuensi pelanggaran dan upaya pencegahannya'],
        ['P2', 'Mengaitkan konsep teoritis ekonomi secara umum dan konsep teoritis bagian khusus dalam bidang pengetahuan tersebut secara mendalam'],
        ['P3', 'Menguraikan konsep ilmu ekonomi yang terdiri dari manajemen, sumber daya manusia, keuangan, dan operasi'],
        ['P4', 'Memproyeksikan konsep ilmu ekonomi termasuk perencanaan, penciptaan, pengembangan, dan pemodelan usaha Secara umum'],
        ['P5', 'Menghubungkan penerapan keilmuan ekonomi dalam penciptaan dan pengembangan usaha baru'],
        ['P6', 'Mengambil kebijakan ekonomi yang tepat berdasarkan olahan dan analisis data'],
        ['P7', 'Mengoperasikan aplikasi pengolah data, desain dan aplikasi digital lainnya'],
        ['P8', 'Merinci dasar ilmu matematika dan statistika bisnis'],
        ['P9', 'Membenarkan kode etik profesi di bidang ekonomi dan keuangan'],
      ],
    },
    {
      title: 'Aspek Keterampilan Umum (KU)',
      icon: 'bx:bookmark',
      reference:
        "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia No. 3 Tahun 2020 tentang Standar Nasional Pendidikan Tinggi, profil lulusan, Bloom's Taxonomy ranah keterampilan & Visi misi Prodi/Universitas",
      aspects: [
        ['KU1', 'Menerapkan pemikiran logis, kritis, sistematis, dan inovatif dalam pengembangan atau implementasi ilmu pengetahuan dan teknologi sesuai bidang keahlian dengan memperhatikan dan menerapkan nilai humaniora'],
        ['KU2', 'Menunjukkan kinerja bermutu, terukur, dan mandiri'],
        ['KU3', 'Mengkaji implikasi pengembangan atau implementasi ilmu pengetahuan teknologi dengan memperhatikan dan menerapkan nilai humaniora berdasarkan kaidah, tata cara dan etika ilmiah sesuai dengan keahliannya dalam rangka menghasilkan gagasan atau solusi'],
        ['KU4', 'Mendeskripsikan hasil kajian tersebut di atas secara saintifik dalam bentuk skripsi atau laporan tugas akhir, dan mengunggahnya dalam laman perguruan tinggi'],
        ['KU5', 'Mengambil keputusan secara tepat berdasarkan hasil analisis informasi dan data dalam konteks penyelesaian masalah di bidang keahliannya'],
        ['KU6', 'Memelihara dan mengembangkan jaringan kerja dengan kolega, pembimbing, dan sejawat baik di dalam maupun di luar lembaganya'],
        ['KU7', 'Melakukan supervisi dan evaluasi terhadap penyelesaian pekerjaan yang ditugaskan kepada pekerja yang berada di bawah tanggung jawabnya dan bertanggung jawab atas pencapaian hasil kerja kelompok'],
        ['KU8', 'Mengelola pembelajaran secara mandiri dan melakukan proses evaluasi diri terhadap kelompok kerja yang berada dibawah tanggung jawabnya'],
        ['KU9', 'Mendokumentasikan, menyimpan, mengamankan, dan menemukan kembali data untuk menjamin kesahihan dan mencegah plagiasi.'],
      ],
    },
    {
      title: 'Aspek Keterampilan Khusus (KK)',
      icon: 'bx:award',
      reference:
        "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia No. 3 Tahun 2020 tentang Standar Nasional Pendidikan Tinggi, profil lulusan, Bloom's Taxonomy ranah keterampilan & Visi misi Prodi/Universitas",
      aspects: [
        ['KK1', 'Mengembangkan pengetahuan dan kemampuan di bidang ekonomi dan keuangan dalam berbagai aspek Secara inovatif dan kreatif'],
        ['KK2', 'Menggunakan ilmu pengetahuan dan teknologi dalam menyelesaikan masalah'],
        ['KK3', 'Memainkan jiwa kewirausahaan untuk mendorong kesejahteraan masyarakat'],
        ['KK4', 'Mendesain solusi permasalahan data dengan metode yang tepat'],
        ['KK5', 'Membuat rencana keuangan yang sesuai dengan kebutuhan bisnis/pelanggan'],
        ['KK6', 'Membuat Strategi pada level operasional suatu organisasi (Manajemen, keuangan, operasi, sumber daya manusia)'],
      ],
    },
  ] as { title: string; icon: string; reference: string; aspects: [string, string][] }[],
};

export const skills = {
  title: 'Skill yang Didapat di Digital Business (S1)',
  soft: [
    {
      title: 'Strategic Communication & Negotiation',
      description:
        'Penguasaan presentasi bisnis, executive pitching, negosiasi strategis, dan kolaborasi lintas fungsi.',
    },
    {
      title: 'Analytical & Strategic Decision-Making',
      description:
        'Kemampuan menginterpretasikan data empiris untuk merumuskan strategi bisnis yang berdampak.',
    },
    {
      title: 'Innovation & Ideation',
      description:
        'Kompetensi dalam mengonseptualisasikan produk digital, strategi pertumbuhan, dan model bisnis startup yang dapat diposisikan untuk skala besar (scalable).',
    },
    {
      title: 'Agile Problem-Solving',
      description:
        'Kemampuan menyelesaikan tantangan operasional menggunakan kerangka kerja Agile dan solusi berbasis teknologi.\n',
    },
  ],
  hard: [
    {
      title: 'Digital Marketing & Growth Strategy',
      description:
        'Keahlian dalam eksekusi SEO/SEM, social media marketing, strategi konten, sistem CRM, dan kampanye berbasis AI.',
    },
    {
      title: 'Data Analytics & Business Intelligence',
      description: 'Penguasaan SQL, Power BI, Tableau, Python, analitik prediktif, dan pemodelan risiko.',
    },
    {
      title: 'Product Management & UI/UX Design',
      description:
        'Kemampuan membuat wireframe, mengembangkan prototipe tingkat tinggi menggunakan Figma, serta melakukan pengujian keterpakaian (usability testing).',
    },
    {
      title: 'Financial Technology & Valuation',
      description:
        'Keterampilan dalam pemodelan keuangan, valuasi aset, analisis investasi, aplikasi blockchain, dan kepatuhan FinTech.',
    },
  ],
};

export const testimonies = {
  title: 'Testimoni Mahasiswa Digital Business (S1) Cakrawala University',
  items: [
    {
      name: 'Aguini P. Tjandra',
      role: 'S1 Digital Business - 2024',
      photo: `${CDN}/media-strapi/f5454ccfa2d3ac2843868b893b46f902.jpg`,
      quote:
        '"Kurikulum di Cakrawala University sangat sesuai dengan perkembangan industri. Kami tidak hanya belajar teori, tetapi juga langsung belajar dari dosen praktisi yang berpengalaman dan ahli di bidangnya."',
    },
    {
      name: 'Attariq Hafidz',
      role: 'S1 Digital Business - 2024',
      photo: `${CDN}/media-strapi/2711f43f168ad3cb23c10ff1a5e0ac9a.webp`,
      quote:
        '“Menurutku, kuliah di Cakrawala University itu seru banget. Mulai dari jam-nya yang fleksibel terus bisa milih offline atau online. Dosen-dosennya juga baik banget, ngajarin kita tuh bener-bener detail sampai kita paham. Aku rasa dengan skill yang diajarkan di Cakrawala, peluang karir ke depan juga besar banget, karena skill yang diajarkan sangat relevan dengan kebutuhan industri saat ini.”',
    },
    {
      name: 'Zahid',
      role: 'S1 Digital Business - 2024',
      photo: `${CDN}/media-strapi/b0239891bb60104b1f62dc6e3b2b6306.webp`,
      quote:
        '"Kesan aku sebagai mahasiswa kelas reguler hybrid adalah privilege yang mungkin nggak didapatkan di kelas tipe online, yaitu ketemu teman-teman dan dosen secara langsung untuk memperluas relasi, yang mana itu sangat membantu ketika aku sudah menyelesaikan studi di Cakrawala University ini.\n\nLalu, untuk segi fleksibilitas mungkin kalau aku yang ada di kelas hybrid tidak terlalu kerasa, tetapi mendengar teman yang online, menurut mereka cukup fleksibel. Dosen-dosennya ramah polll dan tidak membeda-bedakan mahasiswanya, serta tidak pelit dan ramah menjawab setiap pertanyaan mahasiswanya.”',
    },
    {
      name: 'Jazz Khalid Matsal',
      role: 'S1 Digital Business - 2024',
      photo: `${CDN}/media-strapi/3c9ef11ee8a72d52c1cd18558cbab3bc.webp`,
      quote:
        '"Secara keseluruhan, kuliah di Cakrawala University bukan sekadar belajar secara akademik, tapi juga proses pembentukan diri. Lingkungan kampus yang suportif, didukung oleh kurikulum yang relevan dan dosen yang kompeten menjadi bekal berharga untuk aku menghadapi tantangan dunia kerja di masa depan.”',
    },
  ],
};

export const faq = {
  title: 'FAQ',
  items: [
    {
      question: 'Apa saja yang dipelajari di jurusan Digital Business?',
      answer:
        'Mahasiswa mempelajari manajemen bisnis digital, digital marketing, big data analytics, SQL, Python, Power BI, UI/UX design, financial technology (FinTech), hingga strategi pengembangan startup teknologi.',
    },
    {
      question: 'Apa saja prospek kerja lulusan Digital Business?',
      answer:
        'Lulusan dapat berkarier sebagai Digital Marketer, Data Analyst, Business Intelligence Analyst, Digital Product Manager, E-Commerce Manager, Business Development Analyst.',
    },
    {
      question: 'Apa gelar lulusan jurusan ini?',
      answer: 'Lulusan akan memperoleh gelar resmi Sarjana Manajemen (S.M.).',
    },
    {
      question: 'Jurusan ini cocok untuk siapa?',
      answer:
        'Jurusan Digital Business cocok untuk orang yang kreatif, adaptif, tertarik dengan teknologi, media sosial, bisnis, dan memiliki jiwa kewirausahaan.',
    },
    {
      question: 'Apa saja konsentrasi di jurusan ini?',
      answer:
        'Mulai Semester 5, mahasiswa dapat memilih satu dari dua jalur konsentrasi: Data & Analytics atau Financial Technology.',
    },
  ],
};

export const cta = {
  title: 'Bergabunglah dengan Cakrawala University Sekarang!',
  description:
    'Ambil langkah pertama menuju masa depan yang cerah dengan mendaftar di Cakrawala University.',
};
