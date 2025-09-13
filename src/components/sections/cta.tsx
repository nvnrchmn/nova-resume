import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type CtaVariant = "sky" | "violet" | "emerald";

const CTA_STYLES: Record<CtaVariant, { bg: string; glow: string; accent2: string; solidText: string }> = {
  sky: {
    bg: "from-sky-600 to-sky-800",
    glow: "rgba(2,132,199,0.6)",
    accent2: "bg-cyan-200/20",
    solidText: "text-sky-800",
  },
  violet: {
    bg: "from-violet-600 to-fuchsia-700",
    glow: "rgba(139,92,246,0.6)",
    accent2: "bg-fuchsia-200/20",
    solidText: "text-violet-900",
  },
  emerald: {
    bg: "from-emerald-600 to-teal-700",
    glow: "rgba(5,150,105,0.6)",
    accent2: "bg-emerald-200/20",
    solidText: "text-emerald-900",
  },
};

export function Cta({ variant = "violet" }: { variant?: CtaVariant }) {
  const style = CTA_STYLES[variant];
  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl p-6 sm:p-8 md:p-10 bg-gradient-to-br ring-1 ring-white/10",
            `shadow-[0_10px_40px_-10px_${style.glow}]`,
            style.bg
          )}
        >
          <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(180px_180px_at_20%_20%,#000_30%,transparent_70%)]" aria-hidden>
            <div className="absolute -top-20 -left-24 size-[300px] rounded-full bg-white/20 blur-3xl" />
            <div className={cn("absolute -bottom-24 -right-10 size-[280px] rounded-full blur-3xl", style.accent2)} />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] sm:text-xs text-white/90 backdrop-blur">
              Tersedia • Project freelance / full-time
            </span>
            <h3 className="mt-3 text-xl sm:text-3xl font-extrabold tracking-tight text-white">
              Bangun sistem inventory & administrasi yang rapi dan efisien
            </h3>
            <p className="mt-2 text-white/90 text-sm sm:text-base max-w-2xl">
              Saya bantu dari perencanaan, implementasi, hingga dokumentasi — fokus pada kejelasan data dan proses kerja yang mudah di-maintain.
            </p>

            <ul className="mt-4 grid sm:grid-cols-3 gap-3 text-white/95 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-white/90" /> Setup & migrasi data</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-white/90" /> Laporan & dashboard</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-white/90" /> Dokumentasi & training</li>
            </ul>

            <div className="mt-5 sm:mt-6 flex flex-wrap gap-3">
              <Link href="mailto:nv.nrchmn@gmail.com">
                <Button variant="soft">
                  <Mail className="mr-2 size-4" /> Diskusikan via Email
                </Button>
              </Link>
              <Link href="https://wa.me/628983342429" target="_blank" rel="noopener">
                <Button variant="soft">
                  <MessageCircle className="mr-2 size-4" /> Chat WhatsApp
                </Button>
              </Link>
              <a href="#projects">
                <Button variant="soft">Lihat Proyek</Button>
              </a>
            </div>

            <p className="mt-3 text-xs text-white/80">Respon cepat ≤ 24 jam kerja</p>
          </div>
        </div>
      </div>
    </section>
  );
}


