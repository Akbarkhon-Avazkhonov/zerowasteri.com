"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Naked Soap Bars",
    price: "$12",
    gradient: "from-pink-400 to-purple-400",
    description: "Hand-crafted, fragrance-free cleansing bars",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Bamboo Fiber Sponges",
    price: "$8",
    gradient: "from-teal-400 to-emerald-500",
    description: "Biodegradable exfoliating sponges",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Mineral Soak Salts",
    price: "$24",
    gradient: "from-amber-300 to-orange-400",
    description: "Himalayan pink salt with essential oils",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Solid Shampoo Bars",
    price: "$16",
    gradient: "from-indigo-400 to-purple-500",
    description: "Zero-waste hair care for all types",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Konjac Sponges",
    price: "$6",
    gradient: "from-rose-300 to-pink-400",
    description: "Gentle facial cleansing sponges",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Body Oil Blends",
    price: "$32",
    gradient: "from-yellow-300 to-amber-400",
    description: "Nourishing botanical oil infusions",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
  },
]

export function ProductGrid() {
  return (
    <section className="py-24 px-4 bg-[#F0F7F4]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-[#0B3D33] mb-4">The Texture-First Shop</h2>
          <p className="text-lg md:text-xl text-[#0B3D33]/70 max-w-2xl mx-auto">
            Every product is a celebration of nature, crafted without plastic, designed for pure indulgence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-90`} />

              {/* Product image placeholder with generated image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover float-animation"
                />
              </div>

              {/* Product details */}
              <div className="relative p-6 bg-white">
                <h3 className="font-display text-2xl font-bold text-[#0B3D33] mb-2">{product.name}</h3>
                <p className="text-[#0B3D33]/70 mb-4">{product.description}</p>

                <div className="flex items-center justify-between">
                  <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-6">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
