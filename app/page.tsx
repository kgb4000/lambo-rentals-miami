import Image from 'next/image'
import Hero from '@/components/Hero'
import Fleet from '@/components/Fleet'
import RentLambo from '@/components/RentLambo'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <main>
      <Hero />
      <Fleet />
      <RentLambo />
      <FAQ />
    </main>
  )
}
