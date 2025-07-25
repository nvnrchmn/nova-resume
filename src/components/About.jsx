import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-2">About Me</h2>
      <p>
        Tech-savvy and solution-oriented individual with a background in IT infrastructure, inventory systems, and hands-on experience in technical environments. Strong foundation in computer networking, web development basics, and troubleshooting hardware/software issues. Currently expanding expertise in web technologies and system development with a commitment to continuous learning and team collaboration. Adept at translating technical knowledge into actionable support and development efforts in dynamic IT environments.
      </p>
    </motion.section>
  )
}
