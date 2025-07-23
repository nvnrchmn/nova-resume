const jobs = [
  {
    title: "Staff Inventory Asset - PT. Kaliabang Jaya Pratama (2023–2025)",
    bullets: [
      "Performed hardware/software support for internal teams during inventory system operations",
      "Managed asset location tracking, repair cycles, and system documentation",
      "Created operational reports and supported decision-making through structured data",
      "Acted as a liaison between warehouse operations and IT administrative systems"
    ]
  },
  {
    title: "Barista & Trainer - Barista.ID & Tusixti Coffee (2022–2023)",
    bullets: [
      "Barista Trainer: Trained baristas in technical skills and elevated customer experience through coffee. Fostered creativity and upheld high standards in coffee preparation.",
      "Beverage R&D Lead:  Led beverage menu innovation by crafting unique flavor combinations and incorporating industry trends to enhance brand appeal.",
      "SOP Developer: Developed and implemented detailed operational SOPs, ensuring consistency and contributing to the coffee shop’s quality-driven identity."
    ]
  },
  {
    title: "Parts Warehouse Control - Epson (2020–2022)",
    bullets: [
      "Inventory Management: Oversaw the receipt, inspection, and documentation of incoming materials from vendors, ensuring all products met established quality and specification standards.",
      "Warehouse Optimization: Implemented strategic shelf arrangements and warehouse layouts to enhance accessibility and streamline operations for faster response to customer demands.",
      "Stock Monitoring: Maintained accurate inventory records and performed regular stock monitoring to support operational efficiency and avoid shortages or overstocking.",
      "Administrative Support: Handled administrative tasks within the Parts Warehouse Control department, including attendance, leave management, and documentation, contributing to an organized and efficient work environment."
    ]
  },
  {
    title: "Quality Assurance - Mitsubishi Electric (2018–2019)",
    bullets: [
    "Test Plan Design: Developed detailed and measurable test plans to ensure each product stage is thoroughly evaluated and meets high-quality standards.",
    "Quality Assurance Procedures: Created and implemented effective QA procedures, enabling smooth testing processes and comprehensive quality checks before product release or mass production.",
    "Product Testing & Measurement: Performed precise measurements and rigorous testing on all components to ensure functionality aligns with strict quality requirements.",
    "Quality-Driven Approach: Maintained a quality-oriented mindset, contributing to the product’s strong reputation for excellence in performance and reliability."
    ]
  },
  {
    title: "Quality Control - Cabinido Putra (2016–2018)",
    bullets: [
      "Raw Material & In-Process Inspection: Conducted thorough inspections of raw materials and production processes to ensure compliance with strict quality standards.",
      "Defect Identification & Resolution: Actively identified and addressed defects across design, manufacturing, and delivery stages to maintain product integrity and customer satisfaction.",
      "Quality Control Procedure Development: Played a key role in developing and updating QC procedures to continually enhance product quality beyond established standards.",
      "Commitment to Excellence: Promoted a culture of rigor, innovation, and dedication to quality, strengthening both technical expertise and the company’s reputation."
    ]
  },
]

export default function Experience() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Career</h2>
      {jobs.map((job, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">{job.title}</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            {job.bullets.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
