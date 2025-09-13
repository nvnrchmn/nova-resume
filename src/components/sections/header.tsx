"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ModeToggle from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl pl-4 pr-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
        <Link href="#home" className="font-semibold tracking-tight">
          Nova Nurachman<span className="text-violet-600 dark:text-violet-400">.</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm" aria-label="Navigasi utama">
          <a href="#about" className="hover:text-violet-600">Tentang</a>
          <a href="#skills" className="hover:text-violet-600">Keahlian</a>
          <a href="#projects" className="hover:text-violet-600">Proyek</a>
          <a href="#contact" className="hover:text-violet-600">Kontak</a>
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
            <SheetContent side="left" className="md:hidden p-4 pt-5">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="grid gap-1 text-base" aria-label="Navigasi mobile">
                <SheetClose asChild>
                  <a className="py-3 pl-4 pr-2 border-b" href="#about">Tentang</a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="py-3 pl-4 pr-2 border-b" href="#skills">Keahlian</a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="py-3 pl-4 pr-2 border-b" href="#projects">Proyek</a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="py-3 pl-4 pr-2" href="#contact">Kontak</a>
                </SheetClose>
                <SheetClose asChild>
                  <Link className="mt-3" href="/nova-nurachman-cv.pdf" target="_blank" rel="noopener">
                    <Button className="w-full" variant="default">Unduh CV</Button>
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


