'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { supabase } from '@/lib/supabase';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  quantity: number;
};

export default function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('product').select('*');
      if (!error && data) setProducts(data);
      else console.error('Erro ao buscar produtos:', error);
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-[#f1f1f1] py-10 px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b border-gray-300 pb-2">
        Produtos em Destaque
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="border rounded shadow hover:shadow-md transition overflow-hidden h-full flex flex-col bg-white min-h-[480px]">
              
              {/* Área da imagem com altura fixa e centralização */}
              <div className="h-[200px] w-full flex items-center justify-center bg-white p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Informações do produto */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {product.description}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-orange-600 font-bold">
                    R$ {parseFloat(product.price).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Estoque: {product.quantity}
                  </p>
                  <p className="text-sm text-gray-500">
                    Categoria: {product.category}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
