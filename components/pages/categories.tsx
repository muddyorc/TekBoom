'use client'

import Image from 'next/image'

const categories = [
  { name: 'Monitores', icon: '/icons/monitor.png' },
  { name: 'Notebooks', icon: '/icons/notebook.png' },
  { name: 'Video Games', icon: '/icons/videogame.png' },
  { name: 'Hardware', icon: '/icons/hardware.png' },
  { name: 'Computadores', icon: '/icons/computador.png' },
  { name: 'Cadeiras', icon: '/icons/cadeira.png' },
  { name: 'Redes', icon: '/icons/wifi.png' },
  { name: 'Periféricos', icon: '/icons/cabo.png' },
]

export default function CategoryList() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 mt-10">
      {/* Título da seção */}
      <h2 className="text-2xl font-semibold mb-6 text-zinc-900 flex items-center">
        Categorias
        <span className="flex-1 h-px bg-zinc-400 opacity-30 ml-5"></span>
      </h2>

      {/* Lista de categorias (scroll horizontal) */}
      <div className="flex gap-4 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-zinc-200">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="min-w-[120px] flex-shrink-0 text-center p-4 bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition-transform cursor-pointer"
          >
            <Image
              src={cat.icon}
              alt={cat.name}
              width={36}
              height={36}
              className="mx-auto mb-2"
            />
            <span className="text-sm text-zinc-800">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
