'use client'

import { useState, useEffect } from 'react'
import ProductForm from './ProductForm'
import ProductList from './ProductList'
import Navbar from '@/components/pages/navbar'
import Footer from '@/components/pages/footer'
import { supabase } from '@/lib/supabase' // ✅ Adicionado: importar o Supabase

export default function CreateProductPage() {
  const [products, setProducts] = useState<any[]>([])

  // ✅ Adicionado: buscar produtos do Supabase ao carregar a página
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('product').select('*')
      if (!error && data) setProducts(data)
      else console.error('Erro ao buscar produtos:', error)
    }

    fetchProducts()
  }, [])

  // ✅ Atualizado: agora insere no Supabase também
  const handleProductAdd = async (product: any) => {
    const { data, error } = await supabase.from('product').insert([product]).select()

    if (error) {
      console.error('Erro ao inserir produto:', error)
      return
    }

    // ✅ Atualiza a lista local com o novo produto salvo no Supabase
    if (data && data[0]) {
      setProducts((prev) => [...prev, data[0]])
    }
  }

  // ✅ Função para deletar um produto do Supabase e da lista local
  const handleDeleteProduct = async (id: number) => {
    const { error } = await supabase.from('product').delete().eq('id', id)

    if (error) {
      console.error('Erro ao deletar produto:', error)
      return
    }

    // ✅ Remove da lista local
    setProducts((prev) => prev.filter((product) => product.id !== id))
  }

  return (
    <>
      <Navbar />

      <main className="max-w-screen-xl mx-auto px-4 py-10 space-y-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:flex-[1]">
            <ProductForm onProductAdd={handleProductAdd} />
          </div>
          <div className="lg:flex-[1.5]">
            {/* ✅ Adicionado: passa a função de deletar para o ProductList */}
            <ProductList products={products} onDelete={handleDeleteProduct} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
