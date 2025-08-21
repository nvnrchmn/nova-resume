export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-14 sm:py-16 md:py-20 border-t">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 sm:gap-10">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Tentang Saya</h2>
        </div>
        <div className="md:col-span-2 space-y-4 text-sm sm:text-base text-muted-foreground">
          <p>
            Profesional multitalenta dengan pengalaman di bidang <strong>administrasi & pengelolaan data</strong>, <strong>manajemen aset/inventory</strong>, dokumentasi rapi, dan solusi web sederhana.
          </p>
          <p>
            Saat ini juga mengembangkan aplikasi web berbasis <strong>Laravel</strong> dan teknologi pendukung (Livewire, Tailwind, MySQL) sebagai portofolio tambahan.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/nvnrchmn" target="_blank" rel="noopener" className="inline-flex px-3 py-1.5 rounded-lg border">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


