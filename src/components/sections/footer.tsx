export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="scroll-mt-24 border-t py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
        <div>
          <p className="font-semibold text-sm sm:text-base">© {year} Nova Nurachman</p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Bekasi, Indonesia · <a className="underline-offset-4 hover:underline" href="mailto:nv.nrchmn@gmail.com">nv.nrchmn@gmail.com</a>
          </p>
        </div>
        <div className="flex md:justify-end gap-2 sm:gap-3 text-xs sm:text-sm">
          <a className="px-3 py-1.5 rounded-lg border" href="#home">Kembali ke atas</a>
          <a className="px-3 py-1.5 rounded-lg border" href="https://github.com/nvnrchmn" target="_blank" rel="noopener">GitHub</a>
          <a className="px-3 py-1.5 rounded-lg border" href="https://www.linkedin.com/in/nvnrchmn/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}


