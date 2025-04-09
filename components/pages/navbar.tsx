'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const menuItems = [
  { label: "Home", path: "/user-app" },
  { label: "Categorias", path: "/categorias" },
  { label: "Ofertas", path: "/ofertas" },
  { label: "Novidades", path: "/novidades" },
  { label: "Criar Produtos", path: "/product/create" }
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-zinc-900 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-orange-500">
            Tek<span className="text-white">Boom</span>
          </span>
        </div>

        {/* Botão de menu mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Menu normal (desktop) */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path} className="hover:text-orange-400 transition">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search + Cart */}
        <div className="hidden md:flex items-center space-x-4">
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

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-800 px-6 py-3 space-y-2 text-sm font-medium">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path} className="block hover:text-orange-400 transition">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
