import Header from '@/components/Header'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import Philosophy from '@/components/Philosophy'
import CareerSummary from '@/components/CareerSummary'
import Footer from '@/components/Footer'
import AboutMe1 from '@/components/AboutMe1'


export default function Home() {
  return (
    <div className='min-h-screen bg-comic-yellow font-sans'>
      <Header />
      <main className='container mx-auto px-4 py-8 space-y-16 max-w-4xl'>
        <AboutMe1 />
        <AboutMe />
        <Philosophy />
        <CareerSummary />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

