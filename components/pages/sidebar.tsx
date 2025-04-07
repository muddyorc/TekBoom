'use client'

import Image from 'next/image'

const menuItems = [
  { label: "Dashboard", icon: "/icons/painel.png" },
  { label: "Produtos", icon: "/icons/caixa-de-entrega.png" },
  { label: "Categorias", icon: "/icons/etiqueta.png" },
  { label: "Pedidos", icon: "/icons/carrinho.png" },
  { label: "Clientes", icon: "/icons/cliente.png" },
  { label: "Relatórios", icon: "/icons/estatistica.png" },
  { label: "Configurações", icon: "/icons/engrenagem.png" },
]

export default function Sidebar({ hovering, setHovering }: { hovering: boolean, setHovering: (val: boolean) => void }) {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen z-30 
        ${hovering ? 'w-64' : 'w-[20px]'} 
        bg-zinc-900 text-white flex flex-col 
        transition-all duration-700
      `}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Bolinha de abrir menu */}
      <div
        className="absolute top-4 -right-4 z-40 w-8 h-8 bg-orange-500 hover:bg-orange-600 
        rounded-full flex items-center justify-center shadow-md cursor-pointer"
        onMouseEnter={() => setHovering(true)}
        title="Abrir Menu"
      >
        ☰
      </div>

      {/* Logo */} 

    <div className="flex items-center justify-center h-16 px-2">
    <div
        className={`
        transition-all duration-300
        ${hovering ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `}
    >
        <span className="text-xl font-bold text-orange-400 whitespace-nowrap">
        TEKBOOM
        </span>
    </div>
    </div>



      {/* Itens do menu */}
      <nav className="flex-1 px-2 space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`
              transition-all duration-300
              ${hovering ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
            `}
          >
            <button
              className="flex items-center w-full p-2 rounded hover:bg-zinc-800 transition-all"
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className="min-w-[20px]"
              />
              {hovering && (
                <span className="whitespace-nowrap ml-2">
                  {item.label}
                </span>
              )}
            </button>
          </div>
        ))}
      </nav>

      {/* Botão Admin */}
      {hovering && (
        <div className="p-2">
          <button className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded text-sm transition">
            ADMINISTRADOR
          </button>
        </div>
      )}
    </aside>
  )
}
