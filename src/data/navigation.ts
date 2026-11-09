export interface Department {
  slug: string;
  title: string;
}

export interface School {
  title: string;
  description: string;
  departments: Department[];
}

export interface NavLink {
  title: string;
  link: string;
}

export interface NavItem {
  title: string;
  link: string;
  schools?: School[];
  child?: NavLink[];
}

export const academicCopy = {
  title: 'Akademik Cakrawala University',
  description:
    'Temukan potensi tak terbatas di Cakrawala University dengan lingkungan akademik yang inspiratif dan beragam program unggulan.',
  button: 'Lihat Detail',
};

const NOTE = '\n\nBerikut beberapa hal yang akan dipelajari di fakultas ini:';

export const navs: NavItem[] = [
  {
    link: '/akademik',
    title: 'Akademik',
    schools: [
      {
        title: 'School of Business and Economics (SBE)',
        description: `Mahasiswa belajar cara mengelola bisnis secara modern, mengolah data keuangan, menerapkan strategi investasi dan pasar digital hingga siap memulai karier profesional atau membangun usaha sendiri.${NOTE}`,
        departments: [
          { slug: 'bisnis-digital', title: 'Digital Business (S1)' },
          { slug: 'keuangan-dan-investasi', title: 'Finance and Investment (S1)' },
          { slug: 'manajemen-cakrawala', title: 'Business Management (S1)' },
          { slug: 'akuntansi-cakrawala', title: 'Accounting (S1)' },
        ],
      },
      {
        title: 'School of AI & Computer Science (SAC)',
        description: `Mahasiswa dipersiapkan untuk menguasai teknologi kecerdasan buatan, pengolahan data besar, pengembangan sistem informasi dan aplikasi inovatif untuk menjadi ahli di industri teknologi dan digital.${NOTE}\n`,
        departments: [
          { slug: 'ilmu-komputer', title: 'Computer Science (S1)' },
          { slug: 'sains-data', title: 'Data Science (S1)' },
          { slug: 'sistem-dan-teknologi-informasi', title: 'Information Systems (S1)' },
          { slug: 'artificial-intelligence-cakrawala', title: 'Artificial Intelligence (S1)' },
        ],
      },
      {
        title: 'School of Communication and Design (SCD)',
        description: `Mahasiswa akan mempelajari strategi komunikasi publik, merancang konten, hingga seni desain visual digital untuk berbagai platform media agar dapat berkarir di industri kreatif.${NOTE}\n`,
        departments: [
          { slug: 'ilmu-komunikasi-cakrawala', title: 'Communication (S1)' },
          { slug: 'dkv-cakrawala', title: 'Visual Communication Design (S1)' },
        ],
      },
      {
        title: 'School of Psychology and Education (SPE)',
        description: `Mahasiswa akan mendalami perilaku manusia, serta metode pendidikan modern untuk mengoptimalkan potensi siswa dan membimbing generasi masa depan melalui pendekatan yang suportif.${NOTE}\n`,
        departments: [{ slug: 'psikologi-cakrawala', title: 'Psychology (S1)' }],
      },
      {
        title: ' School of Law (SLA)',
        description: `Mahasiswa akan mengasah kemampuan berpikir kritis, mengkaji sistem hukum dan cara penerapannya untuk menyelesaikan berbagai masalah di masyarakat agar siap menjadi praktisi hukum profesional.${NOTE}\n`,
        departments: [{ slug: 'hukum-cakrawala', title: 'Business Law (S1)' }],
      },
      {
        title: 'School of Engineering (SEN)',
        description: `Mahasiswa akan mengeksplorasi sistem kelistrikan, optimasi sistem produksi, serta solusi lingkungan yang berkelanjutan untuk menjadi tenaga ahli yang inovatif di berbagai sektor industri.\n${NOTE}\n`,
        departments: [
          { slug: 'teknik-elektro-cakrawala', title: 'Electrical Engineering (S1)' },
          { slug: 'teknik-industri-cakrawala', title: 'Industrial Engineering (S1)' },
          {
            slug: 'teknik-lingkungan-dan-rekayasa-berkelanjutan',
            title: 'Environmental Engineering and Sustainability (S1)',
          },
        ],
      },
    ],
  },
  { link: '/admisi', title: 'Admisi' },
  { link: '/beasiswa', title: 'Beasiswa' },
  {
    link: '/tentang-kami',
    title: 'Tentang Kami',
    child: [
      { title: 'Tentang Cakrawala', link: '/tentang-kami' },
      { title: 'Founders', link: '/founders' },
      { title: 'Scholars', link: '/dosen' },
    ],
  },
  { link: '/student-outcomes', title: 'Student Outcomes' },
  {
    link: '/berita',
    title: 'Insight',
    child: [
      { title: 'Berita', link: '/berita' },
      { title: 'Blog', link: '/blog' },
    ],
  },
];

/** Same truncation as the original `S()` helper: cut to `max - 1` chars and append "...". */
export function truncate(text: string, max: number): string {
  return text.length > max ? `${text.substring(0, max - 1)}...` : text;
}

export const languages = [
  { value: 'en', label: 'EN', imageUrl: '/images/flag/en.svg' },
  { value: 'id', label: 'ID', imageUrl: '/images/flag/id.svg' },
];

/** Locale-aware path, matching the original helper (id = no prefix, en = /en prefix). */
export function localePath(lang: string, path: string): string {
  const clean = path.replace(/^\/en/, '');
  return lang === 'id' ? clean : `/en${clean}`;
}
