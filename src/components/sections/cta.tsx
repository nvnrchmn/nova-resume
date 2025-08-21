import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-sky-600 to-sky-800 text-white">
          <h3 className="text-lg sm:text-2xl font-bold">Butuh bantuan membangun aplikasi Laravel?</h3>
          <p className="mt-2 text-white/90 text-sm sm:text-base">Saya siap kolaborasi: dari desain sistem, implementasi, hingga dokumentasi.</p>
          <div className="mt-4 sm:mt-5 flex flex-wrap gap-3">
            <Link href="mailto:nv.nrchmn@gmail.com">
              <Button className="bg-white text-sky-800 hover:bg-white/90">Email Saya</Button>
            </Link>
            <Link href="https://wa.me/628983342429" target="_blank" rel="noopener">
              <Button variant="outline" className="border-white/70 text-white">WhatsApp</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


