import { useEffect } from 'react'

import Navbar from './components/Navbar'
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from './sections'

const App = () => {
  useEffect(() => {
    function animateScroll() {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      })

      document
        .querySelectorAll('.animateFromLeft, .animateFromRight, .animate')
        .forEach(section => {
          observer.observe(section)
        })
    }

    animateScroll()
  }, [])

  return (
    <main className='relative'>
      <Navbar />
      <section className='animate xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='animateFromRight padding'>
        <PopularProducts />
      </section>
      <section className='animateFromLeft padding'>
        <SuperQuality />
      </section>
      <section className='animateFromRight padding-x py-10'>
        <Services />
      </section>
      <section className='animateFromLeft padding'>
        <SpecialOffer />
      </section>
      <section className='animateFromRight padding bg-pale-blue'>
        <CustomerReviews />
      </section>
      <section className='animateFromLeft padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='animate padding-x padding-t bg-black pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default App
