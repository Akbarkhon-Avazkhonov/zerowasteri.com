'use client'

import { ShoppingCart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Straight Razors',
    price: '$120',
    description: 'Surgical-grade stainless steel with ergonomic handles',
    image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Safety Razors',
    price: '$45',
    description: 'Precision-engineered for the perfect shave',
    image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Badger Hair Brushes',
    price: '$85',
    description: 'Handcrafted with premium badger hair',
    image: 'https://images.unsplash.com/photo-1633598201241-81f1dc8b6b4e?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Premium Lathers',
    price: '$28',
    description: 'Nutrient-rich shaving creams and soaps',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Aftershave Balms',
    price: '$32',
    description: 'Cooling and nourishing post-shave care',
    image: 'https://images.unsplash.com/photo-1565958011504-98f3afa9f062?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Honing Strops',
    price: '$95',
    description: 'Professional leather maintenance tools',
    image: 'https://images.unsplash.com/photo-1633613286991-611bcede9a46?w=400&h=400&fit=crop',
  },
]

export function ProductGrid() {
  return (
    <section id="steel" className="py-24 px-4 sm:px-6 lg:px-8 bg-lather-white dark:bg-midnight-steel">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-midnight-steel dark:text-lather-white mb-4">
            Steel Selection
          </h2>
          <p className="text-lg sm:text-xl text-midnight-steel/70 dark:text-lather-white/70 max-w-2xl mx-auto">
            Precision instruments crafted from surgical-grade materials. Every blade, every bristle engineered for perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl frosted-glass border border-electric-chrome/30 hover:border-razor-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-razor-cyan/20 hover:-translate-y-2"
            >
              {/* Product image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-razor-cyan/10 to-cyber-purple/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 float-animation"
                />
                {/* Overlay shimmer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product details */}
              <div className="relative p-6 space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-midnight-steel dark:text-lather-white mb-2 group-hover:text-razor-cyan transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-midnight-steel/60 dark:text-lather-white/60">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-display font-bold text-midnight-steel dark:text-lather-white">
                    {product.price}
                  </span>
                  <button className="p-3 bg-gradient-to-r from-razor-cyan to-cyber-purple text-white rounded-lg hover:shadow-lg hover:shadow-razor-cyan/50 transition-all duration-300 cyber-glow">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
