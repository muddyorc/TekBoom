'use client'

import { Trash2 } from 'lucide-react'

export default function ProductList({
  products,
  onDelete,
}: {
  products: any[]
  onDelete: (id: number) => void
}) {
  if (products.length === 0) {
    return (
      <div className="products-section bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Produtos Cadastrados</h2>
        <p className="text-gray-500 text-center">Nenhum produto cadastrado ainda.</p>
      </div>
    )
  }

  return (
    <section className="products-section bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Produtos Cadastrados</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={product.id || index}
            className="border rounded shadow hover:shadow-md transition overflow-hidden relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-700 line-clamp-3">{product.description}</p>
              <p className="text-orange-600 font-bold mt-2">
                R$ {parseFloat(product.price).toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">Estoque: {product.quantity}</p>
              <p className="text-sm text-gray-500">Categoria: {product.category}</p>

              {/* Botão de deletar */}
              <button
                onClick={() => onDelete(product.id)}
                className="absolute bottom-2 right-2 text-red-500 hover:text-red-700"
                title="Excluir produto"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
