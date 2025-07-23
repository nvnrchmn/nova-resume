export default function Projects() {
  const projects = [
    {
      name: "Electric Bill App",
      desc: "The Electricity Payment Application is a billing and electricity usage management system designed to facilitate both customers and administrators/officials in managing electricity data. This application allows customers to view their own billing history and usage, while administrators/officials can manage customer data, rates, usage, and payments.",
      link: "https://github.com/nvnrchmn/electric-bill"
    },
    {
      name: "E-Invoice",
      desc: "A simple and secure web-based invoice system built with Laravel 12, using RSA cryptography for digital signatures, PDF export, and QR code verification.",
      link: "https://github.com/nvnrchmn/e-invoice"
    },
    {
      name: "E-Voting App",
      desc: "A web-based e-voting application built using Laravel 10. This application is designed to facilitate the digital election process for chairpersons and vice-chairpersons, featuring multi-role functionality, vote encryption (RSA), and the ability to download voting receipts and vote result graphs.",
      link: "https://github.com/nvnrchmn/evoting-app"
    },
    {
      name: "Klinik App",
      desc: "Mobile-based clinic application (Flutter).",
      link: "https://github.com/nvnrchmn/klinik_app"
    },
  ]
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}w
            target="_blank"
            className="project-card block p-4 border border-gray-200 rounded-lg bg-white"
          >
            <h3 className="text-lg font-bold text-blue-600">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
