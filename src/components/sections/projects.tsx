"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

type Project = {
  title: string;
  tag: string;
  description: string;
  code?: string;
  demo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Creativo Studio",
    tag: "Next JS",
    description: "Landing Page company of Creativo Studio",
    code: "https://github.com/nvnrchmn/creativo-studio",
    demo: "https://creativo-studio.netlify.app/",
  },
  // Add other projects here mapped from original if needed
];

const FILTERS = ["*", "Next JS", "Tailwind CSS", "Shadcn UI"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("*");

  const filtered = useMemo(() => {
    if (filter === "*") return PROJECTS;
    return PROJECTS.filter((p) => p.tag.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="scroll-mt-24 py-14 sm:py-16 md:py-20 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">Proyek Pilihan</h2>
          <Link
            href="https://github.com/nvnrchmn?tab=repositories"
            target="_blank"
            rel="noopener"
            className="text-xs sm:text-sm hover:underline"
          >
            Semua repos
          </Link>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.title} className="group p-5 rounded-xl border bg-card hover:shadow-lg transition">
              <header className="flex items-center justify-between gap-3">
                <h3 className="font-semibold">{p.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-sky-600 text-white">{p.tag}</span>
              </header>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <footer className="mt-4 flex gap-3">
                {p.code && (
                  <Link href={p.code} target="_blank" rel="noopener">
                    <Button variant="outline" size="sm">Kode</Button>
                  </Link>
                )}
                {p.demo && (
                  <Link href={p.demo} target="_blank" rel="noopener">
                    <Button size="sm">Demo</Button>
                  </Link>
                )}
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm" aria-label="Filter proyek">
          <span className="opacity-70">Filter:</span>
          {FILTERS.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f)}
            >
              {f === "*" ? "Semua" : f}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}


