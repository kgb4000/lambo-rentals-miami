import Image from 'next/image'
import Hero from '@/components/Hero'
import Fleet from '@/components/Fleet'
import RentLambo from '@/components/RentLambo'
import FAQ from '@/components/FAQ'
import Reasons from '@/components/Reasons'
import Why from '@/components/Why'
import Footer from '@/components/Footer'
import WhyDrive from '@/components/WhyDrive'
import LamboComparisons from '@/components/LamboComparisons'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Fleet />
        <LamboComparisons />
        <RentLambo />
        <Reasons />
        <Why />
        <WhyDrive />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
