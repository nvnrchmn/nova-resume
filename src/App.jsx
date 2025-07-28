import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-gray-800 font-saira">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </div>
  )
}
