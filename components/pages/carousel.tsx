'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ShoppingCart, Star } from 'lucide-react';

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
};

const featuredProducts: Product[] = [
  {
    id: 1,
    title: 'Smartphone Tech Pro com Super Desempenho e Câmera Avançada',
    price: 'R$ 2.499,99',
    image: '/images/computador.jpg',
    rating: 4,
    reviews: 245,
  },
  {
    id: 2,
    title: 'Notebook UltraSlim Edição Profissional com 16GB RAM',
    price: 'R$ 4.999,99',
    image: '/images/computador.jpg',
    rating: 5,
    reviews: 189,
  },
  {
    id: 3,
    title: 'Fones de Ouvido Bluetooth com Cancelamento de Ruído',
    price: 'R$ 299,99',
    image: '/images/computador.jpg',
    rating: 4,
    reviews: 320,
  },
  {
    id: 4,
    title: 'Smartwatch Sport Resistente à Água e com GPS Integrado',
    price: 'R$ 799,99',
    image: '/images/computador.jpg',
    rating: 4,
    reviews: 158,
  },
  {
    id: 5,
    title: 'Câmera DSLR Pro com Lente 50mm para Alta Qualidade',
    price: 'R$ 3.299,99',
    image: '/images/computador.jpg',
    rating: 5,
    reviews: 174,
  },
];

export default function ProductCarousel() {
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
        pagination={false}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="group bg-white rounded-lg shadow-sm p-4 relative hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-3 mb-2">
                {product.title}
              </h3>
              <p className="text-[#d40000] text-lg font-bold mb-2">{product.price}</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < product.rating ? '#f59e0b' : 'none'}
                    stroke="#f59e0b"
                  />
                ))}
                <span className="text-xs text-gray-600">({product.reviews})</span>
              </div>

              {/* Carrinho aparece só no hover */}
              <button className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-[#000a63] text-white p-2 rounded-full">
                <ShoppingCart size={18} />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
