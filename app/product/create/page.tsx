'use client'

import { useState } from 'react'
import ProductForm from './ProductForm'
import ProductList from './ProductList'
import Navbar from '@/components/pages/navbar'
import Footer from '@/components/pages/footer'

export default function CreateProductPage() {
  const [products, setProducts] = useState<any[]>([])

  const handleProductAdd = (product: any) => {
    setProducts((prev) => [
      ...prev,
      { ...product, id: Date.now(), createdAt: new Date().toISOString() },
    ])
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
            <ProductList products={products} />
        </div>
       </div>

      </main>

      <Footer />
    </>
  )
}
