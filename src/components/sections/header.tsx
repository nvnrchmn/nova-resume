"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ModeToggle from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between">
        <Link href="#home" className="font-semibold tracking-tight">
          Nova Nurachman<span className="text-sky-600">.</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm" aria-label="Navigasi utama">
          <a href="#about" className="hover:text-sky-600">Tentang</a>
          <a href="#skills" className="hover:text-sky-600">Keahlian</a>
          <a href="#projects" className="hover:text-sky-600">Proyek</a>
          <a href="#contact" className="hover:text-sky-600">Kontak</a>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/nova-nurachman-cv.pdf" target="_blank" rel="noopener">
            <Button variant="outline" className="hidden sm:inline-flex">Unduh CV</Button>
          </Link>
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="md:hidden">
              <div className="grid gap-1 text-sm">
                <a className="py-3 border-b" href="#about">Tentang</a>
                <a className="py-3 border-b" href="#skills">Keahlian</a>
                <a className="py-3 border-b" href="#projects">Proyek</a>
                <a className="py-3" href="#contact">Kontak</a>
                <Link className="mt-1" href="/nova-nurachman-cv.pdf" target="_blank" rel="noopener">
                  <Button className="w-full" variant="default">Unduh CV</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


