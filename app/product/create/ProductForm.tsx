'use client'

import { useState, useRef } from 'react'

export default function ProductForm({ onProductAdd }: { onProductAdd: (product: any) => void }) {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    quantity: '',
    image: ''
  })

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result as string)
        setProduct({ ...product, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!product.image) return alert('Adicione uma imagem!')
    onProductAdd(product)
    setProduct({ name: '', description: '', price: '', category: '', quantity: '', image: '' })
    setImagePreview(null)
    fileInputRef.current!.value = ''
  }

  return (
    <section className="form-section bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Cadastrar Produto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-medium">Imagem do Produto</label>
          <div
            className="border-2 border-dashed h-48 flex items-center justify-center rounded bg-gray-100 cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="max-h-full max-w-full object-contain" />
            ) : (
              <p className="text-gray-500">Clique ou arraste uma imagem</p>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="hidden"
          />
        </div>
        <input name="name" placeholder="Nome do Produto" value={product.name} onChange={handleInputChange} required className="form-control w-full px-4 py-2 border rounded" />
        <textarea name="description" placeholder="Descrição" value={product.description} onChange={handleInputChange} required className="form-control w-full px-4 py-2 border rounded" />
        <input name="price" type="number" placeholder="Preço (R$)" value={product.price} onChange={handleInputChange} required className="form-control w-full px-4 py-2 border rounded" />
        <select name="category" value={product.category} onChange={handleInputChange} required className="form-control w-full px-4 py-2 border rounded">
          <option value="">Selecione uma categoria</option>
          <option value="processadores">Processadores</option>
          <option value="placas-video">Placas de Vídeo</option>
          <option value="placas-mae">Placas-mãe</option>
          <option value="memorias">Memórias RAM</option>
          <option value="armazenamento">Armazenamento</option>
          <option value="gabinetes">Gabinetes</option>
          <option value="fontes">Fontes de Alimentação</option>
          <option value="perifericos">Periféricos</option>
          <option value="notebooks">Notebooks</option>
        </select>
        <input name="quantity" type="number" placeholder="Quantidade em Estoque" value={product.quantity} onChange={handleInputChange} required className="form-control w-full px-4 py-2 border rounded" />
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">Cadastrar Produto</button>
      </form>
    </section>
  )
}
