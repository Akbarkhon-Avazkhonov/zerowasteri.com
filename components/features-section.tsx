"use client"

import { Sparkles, Leaf, Package, Heart } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Plastic-Free Packaging",
    description: "Every product arrives in compostable, reusable, or recyclable materials. Zero plastic, ever.",
    color: "text-[#A06BFF]",
    bgColor: "bg-[#A06BFF]/10",
  },
  {
    icon: Leaf,
    title: "Nature-First Ingredients",
    description: "Sourced from organic farms and sustainable suppliers. Pure botanicals, no synthetics.",
    color: "text-[#0B3D33]",
    bgColor: "bg-[#0B3D33]/10",
  },
  {
    icon: Package,
    title: "Refill & Return Program",
    description: "Send back your empties for a discount on your next order. Circular by design.",
    color: "text-[#FF6B35]",
    bgColor: "bg-[#FF6B35]/10",
  },
  {
    icon: Heart,
    title: "B Corp Certified",
    description: "We meet the highest standards of social and environmental performance.",
    color: "text-[#A06BFF]",
    bgColor: "bg-[#A06BFF]/10",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-[#0B3D33] mb-4">Why Zerowasteri?</h2>
          <p className="text-lg md:text-xl text-[#0B3D33]/70 max-w-2xl mx-auto">
            We believe luxury shouldn't cost the earth. Every choice we make puts people and planet first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-[#F0F7F4] hover:bg-white border-2 border-transparent hover:border-[#A06BFF] transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>

              <h3 className="font-display text-2xl font-bold text-[#0B3D33] mb-3">{feature.title}</h3>

              <p className="text-[#0B3D33]/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
