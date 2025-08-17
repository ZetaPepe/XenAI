"use client"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Button } from "@/components/ui/button"
import TypewriterText from "@/components/typewriter-text"

export default function HeroWithCanvasReveal() {
  return (
    <div className="relative h-[70vh] flex items-start justify-center overflow-hidden pt-20">
      {/* Canvas Reveal Effect Background */}
      <div className="absolute inset-0">
        <CanvasRevealEffect
          animationSpeed={2}
          containerClassName="bg-black"
          colors={[
            [0, 180, 0], // Brighter green
            [0, 220, 0], // Even brighter green
            [100, 255, 100], // Light green
          ]}
          dotSize={3}
          opacities={[0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1]}
        />
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4">
            First AI Model on XLayer Chain
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 font-mono">
          <TypewriterText text="Meet XenAI" className="text-green-400" speed={200} pauseDuration={3000} />
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
          The revolutionary AI agent pioneering the future of blockchain intelligence. Experience the power of the first
          AI model on XLayer Chain, now issuing the XenAI token.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Get XenAI Token
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-green-500 text-green-400 hover:bg-green-500/10 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 bg-transparent"
          >
            Learn More
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">First</div>
            <div className="text-gray-400">AI Model on XLayer Chain</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">XenAI</div>
            <div className="text-gray-400">Native Token</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">∞</div>
            <div className="text-gray-400">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  )
}
