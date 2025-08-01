import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
}

export default function About() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3">About Me</h2>
      <motion.p
        className="text-gray-700 text-base leading-relaxed text-justify"
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={fadeInUp.transition}
      >
        IT professional with a strong foundation in infrastructure, inventory systems, and hands-on technical support. 
        Skilled in networking, basic web development, and hardware/software troubleshooting. 
        Currently expanding expertise in modern web technologies, with a focus on adaptability, continuous learning, and collaborative work.
      </motion.p>
    </section>
  )
}
