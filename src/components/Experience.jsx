import { motion } from "framer-motion";

const jobs = [
  {
    title: "Staff Inventory Asset – PT. Kaliabang Jaya Pratama (2023–2025)",
    bullets: [
      "Performed hardware/software support for internal teams during inventory system operations.",
      "Managed asset location tracking, repair cycles, and system documentation.",
      "Created operational reports and supported decision-making through structured data.",
      "Acted as a liaison between warehouse operations and IT administrative systems."
    ]
  },
  {
    title: "Barista & Trainer – Barista.ID & Tusixti Coffee (2022–2023)",
    bullets: [
      "Barista Trainer: Trained baristas in technical skills and elevated customer experience through coffee.",
      "Beverage R&D Lead: Led beverage menu innovation by crafting unique flavor combinations and tracking trends.",
      "SOP Developer: Developed and implemented detailed operational SOPs to maintain consistency."
    ]
  },
  {
    title: "Parts Warehouse Control – Epson (2020–2022)",
    bullets: [
      "Oversaw the receipt, inspection, and documentation of incoming materials from vendors.",
      "Optimized shelf arrangements and layout to streamline daily operations.",
      "Maintained accurate inventory records and monitored stock to prevent shortages.",
      "Supported administrative tasks such as attendance, leave, and document management."
    ]
  },
  {
    title: "Quality Assurance – Mitsubishi Electric (2018–2019)",
    bullets: [
      "Developed test plans to ensure products met internal standards.",
      "Created and implemented QA procedures for better testing workflows.",
      "Performed accurate testing and measurements for components and products.",
      "Upheld a quality-first approach for reliable mass production."
    ]
  },
  {
    title: "Quality Control – Cabinido Putra (2016–2018)",
    bullets: [
      "Inspected raw materials and production processes for quality compliance.",
      "Identified defects and improved product consistency.",
      "Helped develop and refine QC procedures.",
      "Promoted a rigorous and quality-driven culture within production."
    ]
  }
];

export default function Experience() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4">Career</h2>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.01, delay: index * 0.01 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -4 }}
            // whileHover={{
            //   y: -4,
            //   boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)"
            // }}
            className="p-4 border border-gray-200 rounded-md bg-white transition-all"
          >
            <h3 className="font-semibold text-blue-700">{job.title}</h3>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              viewport={{ once: false }}
              className="list-disc pl-5 text-sm text-gray-700 mt-2 space-y-1"
            >
              {job.bullets.map((point, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
