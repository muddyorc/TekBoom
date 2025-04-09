'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    img: '/images/banner.png',
    title: 'Super Oferta de Abril',
    text: 'Até 50% OFF em produtos selecionados. Aproveite enquanto durar!',
    button: 'Ver Ofertas',
  },
  {
    id: 2,
    img: '/images/banner2.png',
    title: 'Lançamentos Exclusivos',
    text: 'Confira os novos produtos recém-chegados!',
    button: 'Ver Novidades',
  },
]

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full mt-5 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="relative h-[50vh] md:h-[280px] rounded-xl overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full h-full absolute transition-opacity duration-700 ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 bg-black/70 max-w-xs md:max-w-md p-4 md:p-6 rounded">
              <h2 className="text-white text-lg md:text-2xl font-bold mb-2">
                {slide.title}
              </h2>
              <p className="text-white text-sm md:text-base mb-4">{slide.text}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-5 md:py-2 rounded font-bold transition text-sm md:text-base">
                {slide.button}
              </button>
            </div>
          </div>
        ))}

        {/* Dots (bolinhas) */}
        <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-20">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === activeIndex
                  ? 'bg-orange-500 opacity-100'
                  : 'bg-white opacity-60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
