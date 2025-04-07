'use client'

import Sidebar from "@/components/pages/sidebar"
import { useState } from "react"

export default function UserApp() {
  const [hovering, setHovering] = useState(false)

  return (
    <div className="flex">
      <Sidebar hovering={hovering} setHovering={setHovering} />

      <main
        className={`
          flex-1 bg-gray-100 p-8 transition-all duration-700 
          ${hovering ? 'ml-64' : 'ml-[20px]'}
        `}
      >
        <h1 className="text-2xl font-bold">Bem-vindo ao painel</h1>
      </main>
    </div>
  )
}
