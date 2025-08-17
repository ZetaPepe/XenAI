"use client"

import { Button } from "@/components/ui/button"
import XAINavigation from "@/components/xai-navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="matrix-bg h-full w-full"></div>
      </div>

      <XAINavigation />

      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-green-400">XenAI</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The revolutionary AI agent pioneering the future of blockchain intelligence on XLayer Chain
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                XenAI represents the convergence of artificial intelligence and blockchain technology. As the first AI
                agent model deployed on XLayer Chain, we're building the foundation for autonomous, intelligent
                blockchain interactions that will reshape how we think about decentralized systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to democratize AI capabilities through blockchain technology, making advanced artificial
                intelligence accessible, transparent, and community-owned.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">What Makes Us Different</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">First AI agent model native to XLayer Chain</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Community-governed development and decision making</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Transparent, on-chain AI model training and inference</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Self-improving algorithms through blockchain consensus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Technology Stack</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-400 text-2xl font-bold">AI</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Neural Networks</h3>
                <p className="text-gray-300 text-sm">
                  Advanced transformer architecture optimized for blockchain environments
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-400 text-2xl font-bold">⛓</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">XLayer Chain</h3>
                <p className="text-gray-300 text-sm">High-performance blockchain infrastructure for AI workloads</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-400 text-2xl font-bold">🔗</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Smart Contracts</h3>
                <p className="text-gray-300 text-sm">
                  Autonomous execution and governance through decentralized protocols
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Built by the Community</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              XenAI is developed by a global community of AI researchers, blockchain developers, and visionaries who
              believe in the power of decentralized artificial intelligence.
            </p>
            <Button className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Join Our Community
            </Button>
          </div>
        </div>
      </main>

      <style jsx>{`
        .matrix-bg {
          background-image: 
            linear-gradient(90deg, transparent 98%, rgba(34, 197, 94, 0.1) 100%),
            linear-gradient(transparent 98%, rgba(34, 197, 94, 0.1) 100%);
          background-size: 20px 20px;
          animation: matrix-scroll 20s linear infinite;
        }
        
        @keyframes matrix-scroll {
          0% { background-position: 0 0; }
          100% { background-position: 20px 20px; }
        }
      `}</style>
    </div>
  )
}
