import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className="my-20">
      <div className="mx-auto flex items-center bg-white py-24 px-6 ">
        <div className="mx-auto relative px-5 max-w-screen-xl text-center dark:bg-neutral-900">
          <h1 className="mt-2 mb-5 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl leading-relaxed">
            Lamborghini Rentals Miami
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Elevate your Miami adventure with an unbelievable driving experience
            in a Lamborghini.
          </p>
          <Button text="Reserve Your Lambo Today!" link="#fleet" />
        </div>
      </div>
    </section>
  )
}

export default Hero
