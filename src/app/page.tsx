import Image from 'next/image'
import { Hero } from './_components/Hero/Hero'
import { Who } from './_components/Who/Who'

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Who/>
    </>
  )
}
