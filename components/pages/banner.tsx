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
    <section className="w-full mt-5 h-[280px] relative rounded-xl overflow-hidden mx-auto max-w-6xl">
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
          <div className="absolute bottom-10 left-10 bg-black/70 max-w-md p-6 rounded">
            <h2 className="text-white text-2xl font-bold mb-2">{slide.title}</h2>
            <p className="text-white mb-4">{slide.text}</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded font-bold transition">
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      {/* Dots (bolinhas) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === activeIndex ? 'bg-orange-500 opacity-100' : 'bg-white opacity-60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
