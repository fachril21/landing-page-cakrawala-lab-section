/**
 * Signature Lab content (generic shape) and the Marketing Lab data for Digital Business (S1).
 * Source: "Brief Marketing: Signature Lab Cakrawala University" (Nov 7, 2026).
 * Copy rules from the brief: no em dash, lab name exactly "Marketing Lab",
 * no other brands, results the student carries (no salary or job promises),
 * no partner names until confirmed by the head of study program.
 */

export interface LabItem {
  icon: string;
  title: string;
  text: string;
}

export interface LabContent {
  sectionId: string;
  navTitle: string;
  name: string;
  description: string;
  work: { title: string; items: LabItem[] };
  proof: { title: string; items: LabItem[] };
}

export interface ShowcaseProject {
  title: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
  url: string;
}

export interface LabShowcase {
  name: string;
  description: string;
  ctaLabel: string;
  projects: ShowcaseProject[];
}

export type LabVariant = 'split' | 'kolom' | 'tab' | 'rincian' | 'kontras';
export type ShowcaseVariant = 's1' | 's2' | 's3' | 's4' | 'none';

export const marketingLab: LabContent = {
  sectionId: 'lab',
  navTitle: 'Marketing Lab',
  name: 'Marketing Lab',
  description: 'Jualan produk beneran lewat content dan performance marketing.',
  work: {
    title: 'Yang Dikerjakan Mahasiswa',
    items: [
      {
        icon: 'solar:pen-new-square-broken',
        title: 'Content Marketing',
        text: 'Memproduksi konten untuk produk sendiri atau produk perusahaan mitra yang benar-benar dijual.',
      },
      {
        icon: 'solar:play-circle-broken',
        title: 'Performance Marketing',
        text: 'Menjalankan iklan berbayar dengan budget nyata lewat real project.',
      },
      {
        icon: 'solar:graph-up-broken',
        title: 'Analisis ROAS',
        text: 'Mengukur hasil penjualan dan menghitung return dari setiap rupiah iklan.',
      },
    ],
  },
  proof: {
    title: 'Bukti Karya yang Dibawa Saat Lulus',
    items: [
      {
        icon: 'solar:cart-large-2-broken',
        title: 'Portofolio Campaign',
        text: 'Kumpulan campaign nyata lengkap dengan data penjualan.',
      },
      {
        icon: 'solar:chart-2-broken',
        title: 'Data ROAS',
        text: 'Angka return dari iklan yang pernah dijalankan sendiri.',
      },
      {
        icon: 'solar:wallet-money-broken',
        title: 'Budget Ads yang Dikelola',
        text: 'Riwayat budget iklan yang pernah dikelola selama project.',
      },
    ],
  },
};

const placeholderImage = (n: number) => ({
  src: `/images/lab/project-${n}.svg`,
  alt: `Foto project ${n} (placeholder)`,
  width: 800,
  height: 600,
});

/** PLACEHOLDER data and images: replace with real student projects when available. */
export const labShowcase: LabShowcase = {
  name: 'Hasil Karya Mahasiswa',
  description: 'Campaign nyata yang sudah dikerjakan mahasiswa lewat Marketing Lab.',
  ctaLabel: 'Lihat Project',
  projects: [
    {
      title: 'Campaign Produk Perawatan Kulit',
      description: 'Konten dan iklan berbayar untuk produk perawatan kulit lokal, dari riset audiens sampai laporan ROAS.',
      image: placeholderImage(1),
      url: '#',
    },
    {
      title: 'Peluncuran Produk Kopi Lokal',
      description: 'Strategi konten dan iklan untuk peluncuran produk baru dengan target penjualan bulanan.',
      image: placeholderImage(2),
      url: '#',
    },
    {
      title: 'Konten Produk Fashion Berkelanjutan',
      description: 'Rangkaian konten video pendek yang mendorong penjualan koleksi fashion berbahan daur ulang.',
      image: placeholderImage(3),
      url: '#',
    },
    {
      title: 'Iklan Produk Makanan Ringan',
      description: 'Uji beberapa materi iklan dengan budget terukur untuk menemukan kreatif dengan ROAS terbaik.',
      image: placeholderImage(4),
      url: '#',
    },
    {
      title: 'Campaign Musiman Produk Rumah Tangga',
      description: 'Campaign menjelang musim belanja dengan konten edukasi dan iklan retargeting.',
      image: placeholderImage(5),
      url: '#',
    },
    {
      title: 'Peningkatan Penjualan Produk Kerajinan',
      description: 'Menata ulang konten toko online dan iklan untuk produk kerajinan tangan dari perusahaan mitra.',
      image: placeholderImage(6),
      url: '#',
    },
  ],
};
