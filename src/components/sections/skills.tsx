export function Skills() {
  const items = [
    {
      title: "Administrasi & Operasional",
      desc:
        "Pengelolaan data & dokumen, pencatatan aset/inventory, penyusunan laporan, serta dukungan administrasi harian.",
    },
    {
      title: "Manajemen Aset & Gudang",
      desc:
        "Monitoring stok & aset, kontrol keluar/masuk barang, pelacakan perbaikan, dan optimalisasi efisiensi pergudangan.",
    },
    {
      title: "IT Support & Teknologi",
      desc:
        "Instalasi & troubleshooting hardware/software, jaringan dasar, serta pengembangan aplikasi web sederhana dengan HTML, CSS, PHP/Laravel, dan MySQL.",
    },
    {
      title: "Analisis & Laporan",
      desc:
        "Pengolahan data dengan Microsoft Excel (Pivot Table, Chart), penyusunan laporan analitis, serta dokumentasi proses kerja.",
    },
    {
      title: "Komunikasi & Layanan",
      desc:
        "Kemampuan komunikasi efektif, pelayanan pelanggan, koordinasi lintas tim, dan adaptasi di lingkungan kerja dinamis.",
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-14 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Keahlian Utama</h2>
        <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-6 sm:mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {items.map((it) => (
            <div key={it.title} className="p-4 sm:p-5 rounded-xl border bg-card h-full transition hover:shadow-lg hover:-translate-y-0.5">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-violet-500/70 to-fuchsia-500/70 mb-3" />
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


