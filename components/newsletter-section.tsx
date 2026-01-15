"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#A06BFF] to-[#FF6B35] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Mail className="h-10 w-10 text-white" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">Join the Zero Waste Movement</h2>

          <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto">
            Get early access to new products, sustainable living tips, and exclusive offers.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-14 rounded-full bg-white/90 backdrop-blur-sm border-none text-[#0B3D33] placeholder:text-[#0B3D33]/50 px-6 text-lg"
          />

          <Button
            size="lg"
            className="bg-[#0B3D33] hover:bg-[#0B3D33]/90 text-white px-8 h-14 rounded-full font-display text-lg shadow-2xl hover:scale-105 transition-transform"
          >
            Subscribe
          </Button>
        </div>

        <p className="text-center text-white/70 text-sm mt-4">We respect your privacy. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
