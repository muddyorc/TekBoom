'use client'

import Image from 'next/image'

const menuItems = [
  "Home",
  "Categorias",
  "Ofertas",
  "Novidades",
  "Contato"
]

export default function Navbar() {
  return (
    <header className="w-full bg-zinc-900 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">
          Loja<span className="text-white">Tech</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {menuItems.map((item, index) => (
            <a key={index} href="#" className="hover:text-orange-400 transition">
              {item}
            </a>
          ))}
        </nav>

        {/* Search + Cart */}
        <div className="flex items-center space-x-4">
          {/* Campo de busca */}
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              className="bg-white rounded-full px-4 py-1 text-black text-sm w-56 pr-8"
            />
            <Image
              src="/icons/lupa.png"
              alt="Buscar"
              width={16}
              height={16}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
            />
          </div>

          {/* Carrinho */}
          <div className="relative cursor-pointer">
            <Image
              src="/icons/carrinho.png"
              alt="Carrinho"
              width={20}
              height={20}
            />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
