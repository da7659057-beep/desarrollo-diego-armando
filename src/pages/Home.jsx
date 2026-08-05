import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/sections/Hero.jsx'
import Services from '../components/sections/Services.jsx'
import Stats from '../components/sections/Stats.jsx'
import WhyChooseMe from '../components/sections/WhyChooseMe.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import Process from '../components/sections/Process.jsx'
import FAQ from '../components/sections/FAQ.jsx'
import Contact from '../components/sections/Contact.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <WhyChooseMe />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
