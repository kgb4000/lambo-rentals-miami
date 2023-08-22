import React from 'react'

const Hero = () => {
  return (
    <section className="my-20">
      <div className="mx-auto flex items-center bg-white py-24 px-6 ">
        <div className="mx-auto relative px-5 max-w-screen-xl text-center dark:bg-neutral-900">
          <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl leading-relaxed">
            Lamborghini Rentals Miami
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Elevate your Miami adventure with an unbelievable driving
            experience in a Lamborghini.
          </p>
          <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Reserve Your Lambo Today!
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
