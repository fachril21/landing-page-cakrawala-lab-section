/**
 * Signature Lab content for Digital Business (S1).
 * Source: "Brief Marketing: Signature Lab Cakrawala University" (Nov 7, 2026).
 * Copy rules from the brief: no em dash, lab name exactly "Marketing Lab",
 * no other brands, results the student carries (no salary or job promises),
 * no partner names until confirmed by the head of study program.
 */

export const signatureLab = {
  sectionId: 'signatureLab',
  navTitle: 'Signature Lab',
  title: 'Signature Lab Digital Business (S1)',
  keyMessage: 'Kuliah di Cakrawala, lulus bawa portofolio kerja nyata.',
  intro:
    'Setiap prodi di Cakrawala University punya satu Signature Lab: program praktik wajib yang bikin mahasiswa lulus bawa bukti kerja nyata, bukan cuma ijazah.',
  lab: {
    name: 'Marketing Lab',
    tagline: 'Jualan produk beneran lewat content dan performance marketing.',
    hook: 'Bukan cuma ngerti marketing, udah pernah bikin produk laku.',
  },
  work: {
    title: 'Yang Dikerjakan Mahasiswa',
    lead: 'Jualan produk sendiri atau produk perusahaan mitra lewat real project content marketing dan performance marketing.',
    steps: [
      { icon: 'solar:pen-new-square-broken', title: 'Bikin konten', text: 'Produksi konten untuk produk yang benar-benar dijual.' },
      { icon: 'solar:play-circle-broken', title: 'Jalanin ads', text: 'Jalankan iklan berbayar dengan budget nyata.' },
      { icon: 'solar:graph-up-broken', title: 'Ngitung ROAS', text: 'Ukur hasil penjualan dan hitung return dari tiap rupiah iklan.' },
    ],
  },
  proof: {
    title: 'Bukti yang Dibawa Saat Lulus',
    lead: 'Portofolio campaign dengan data nyata:',
    items: [
      { icon: 'solar:cart-large-2-broken', text: 'Data penjualan' },
      { icon: 'solar:chart-2-broken', text: 'ROAS' },
      { icon: 'solar:wallet-money-broken', text: 'Budget ads yang pernah dikelola' },
    ],
  },
  facts: [
    { value: '2.500+', label: 'mahasiswa aktif' },
    { value: 'Sejak semester pertama', label: 'mulai magang' },
    { value: '80%+', label: 'mahasiswa sudah magang' },
    { value: '1.000+', label: 'perusahaan mitra' },
    { value: 'Sudirman dan Kemang', label: 'dua kampus' },
  ],
};

export type LabVariant = 'column' | 'band';

/** Where the Signature Lab block sits on the program page. */
export type LabPosition = 'after-overview' | 'after-why' | 'after-curriculum' | 'after-skills' | 'band';
