'use client'

import Navbar from "@/components/pages/navbar"
import Banner from "@/components/pages/banner"
import CategoryList from "@/components/pages/categories"
import Footer from "@/components/pages/footer"
import ProductCarousel from "@/components/pages/carousel"

export default function UserApp() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar no topo */}
      <Navbar />
      <Banner />
      <CategoryList />
      {/* Conteúdo principal */}
      <ProductCarousel />


      <Footer />
    </div>
  )
}
