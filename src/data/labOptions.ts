import type { LabPosition } from './signatureLab';

/** Section order of the program page, used for the wireframe strips on /preview. */
export const pageOrder = [
  { key: 'overview', label: 'Overview' },
  { key: 'whyDepartment', label: 'Kenapa Prodi Ini' },
  { key: 'curriculum', label: 'Kurikulum' },
  { key: 'jobOpportunity', label: 'Prospek Kerja' },
  { key: 'achievement', label: 'Hasil Belajar' },
  { key: 'skills', label: 'Skills' },
  { key: 'testimony', label: 'Testimoni' },
  { key: 'faq', label: 'FAQ' },
  { key: 'cta', label: 'CTA Daftar' },
] as const;

export interface LabOption {
  slug: string;
  letter: string;
  name: string;
  position: LabPosition;
  /** pageOrder key the lab sits right after; null means above the sidebar area. */
  after: string | null;
  recommended?: boolean;
  summary: string;
  pros: string[];
  cons: string[];
}

export const labOptions: LabOption[] = [
  {
    slug: 'opsi-a',
    letter: 'A',
    name: 'Setelah Overview',
    position: 'after-overview',
    after: 'overview',
    summary: 'Lab muncul tepat setelah pengenalan prodi, sebelum alasan memilih prodi dan kurikulum.',
    pros: [
      'Key message muncul paling awal, dilihat hampir semua pengunjung.',
      'Langsung jadi pembeda sebelum pengunjung membandingkan dengan kampus lain.',
      'Masuk sidebar di urutan kedua, mudah ditemukan.',
    ],
    cons: [
      'Terasa promosi sebelum pengunjung paham dasar prodinya.',
      'Mendorong Kenapa Prodi Ini dan Kurikulum lebih jauh ke bawah.',
      'Mengambil sorotan dari Overview yang sudah jadi pintu masuk halaman.',
    ],
  },
  {
    slug: 'opsi-b',
    letter: 'B',
    name: 'Setelah Kenapa Prodi Ini',
    position: 'after-why',
    after: 'whyDepartment',
    recommended: true,
    summary: 'Lab jadi bukti konkret dari klaim di bagian Kenapa Prodi Ini, sebelum Kurikulum.',
    pros: [
      'Alurnya masuk akal: alasan memilih prodi, lalu bukti yang dibawa saat lulus.',
      'Cocok untuk orang tua yang mencari kepastian anaknya bisa kerja.',
      'Posisinya masih di paruh atas halaman dan tetap punya item sidebar.',
    ],
    cons: [
      'Perlu scroll dua section dulu, tidak sejelas Opsi A atau E.',
      'Kurikulum tergeser satu blok ke bawah.',
    ],
  },
  {
    slug: 'opsi-c',
    letter: 'C',
    name: 'Setelah Kurikulum',
    position: 'after-curriculum',
    after: 'curriculum',
    summary: 'Lab dibaca sebagai praktik yang menyusul setelah pengunjung melihat mata kuliah.',
    pros: [
      'Alur teori ke praktik terasa natural.',
      'Pengunjung yang serius membaca kurikulum langsung dapat konteks praktiknya.',
      'Tidak mengganggu section pembuka yang sudah ada.',
    ],
    cons: [
      'Letaknya jauh, banyak pengunjung mobile tidak sampai ke sini.',
      'Marketing Lab tidak tercantum sebagai mata kuliah, bisa menimbulkan pertanyaan.',
      'Kurikulum yang panjang membuat lab terasa seperti tambahan.',
    ],
  },
  {
    slug: 'opsi-d',
    letter: 'D',
    name: 'Setelah Skills',
    position: 'after-skills',
    after: 'skills',
    summary: 'Lab menutup rangkaian hasil: Prospek Kerja, Hasil Belajar, Skills, lalu bukti nyata.',
    pros: [
      'Menyambung cerita hasil yang dibawa lulusan, sesuai arah brief.',
      'Menjadi klimaks sebelum testimoni dan FAQ.',
      'Tidak mengubah urutan section informatif di atasnya.',
    ],
    cons: [
      'Sangat dalam, paling banyak terlewat pengunjung yang scroll cepat.',
      'Peran sebagai pembeda utama jadi lemah.',
      'Bagian Skills dan Hasil Belajar bisa terasa mengulang isinya.',
    ],
  },
  {
    slug: 'opsi-e',
    letter: 'E',
    name: 'Band Full-Width di Atas',
    position: 'band',
    after: null,
    summary: 'Blok lebar penuh tepat di bawah hero, di luar kolom konten dan sidebar.',
    pros: [
      'Visibilitas tertinggi, langsung terlihat setelah hero.',
      'Tampilan gelap lebar jadi pemisah yang jelas dari konten standar.',
      'Mudah dipasang sebagai pola yang sama di semua halaman prodi.',
    ],
    cons: [
      'Memecah layout kolom dan sidebar yang konsisten.',
      'Tidak punya item sidebar, tidak ikut scroll-spy.',
      'Mendorong semua isi prodi ke bawah, pengunjung yang cari kurikulum harus melewatinya.',
    ],
  },
];
