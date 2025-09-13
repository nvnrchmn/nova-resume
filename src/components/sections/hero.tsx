import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(240px_240px_at_20%_20%,#000_20%,transparent_70%)]" aria-hidden>
        <div className="absolute -top-24 -left-24 size-[360px] rounded-full bg-violet-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 size-[320px] rounded-full bg-fuchsia-300/30 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
        <div>
          <div className="inline-flex items-center text-[10px] sm:text-xs px-2 py-1 rounded-full border mb-2 sm:mb-4">
            Tersedia untuk peluang kerja
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Nova Nurachman
            <span className="block bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">Administrasi & Operasional • Inventory & Aset</span>
          </h1>
          <p className="mt-2 sm:mt-4 text-muted-foreground max-w-prose text-sm sm:text-base">
            Profesional multitalenta di bidang <strong>administrasi & pengelolaan data</strong>, serta <strong>manajemen aset/inventory</strong>.
          </p>
          <div className="mt-5 sm:mt-6 flex flex-wrap gap-3">
            <a href="#projects">
              <Button> Lihat Proyek </Button>
            </a>
            <a href="mailto:nv.nrchmn@gmail.com">
              <Button variant="outline"> Kontak Saya </Button>
            </a>
            <Link href="https://www.linkedin.com/in/nvnrchmn/" target="_blank" rel="noopener">
              <Button variant="outline"> LinkedIn </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl ring-1 ring-inset p-1">
            <div className="h-full w-full rounded-2xl bg-card grid place-items-center text-center p-6 sm:p-8">
              <div className="flex flex-col items-center">
                <Image
                  src="/img/profile.jpeg"
                  alt="Foto Nova Nurachman"
                  width={720}
                  height={720}
                  priority
                  className="rounded-full w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 object-cover"
                />
                <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground mt-4">
                  Administrasi & Operasional
                </p>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground mt-4">
                  Inventory & Aset
                </p>
                <div className="flex justify-between gap-2">
                  <Link href="/nova-nurachman-cv.pdf" target="_blank" rel="noopener">
                    <Button className="mt-4">Unduh CV</Button>
                  </Link>
                  <Link href="https://wa.me/628983342429" target="_blank" rel="noopener">
                    <Button variant="outline" className="mt-4">WhatsApp</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
