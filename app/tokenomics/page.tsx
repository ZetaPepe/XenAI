"use client"

import { Button } from "@/components/ui/button"
import XAINavigation from "@/components/xai-navigation"

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="matrix-bg h-full w-full"></div>
      </div>

      <XAINavigation />

      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-green-400">XenAI</span> Tokenomics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Sustainable economics powering the first AI agent on XLayer Chain
            </p>
          </div>

          {/* Token Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Total Supply</h3>
              <p className="text-3xl font-bold text-green-400 mb-2">1,000,000,000</p>
              <p className="text-gray-300 text-sm">XenAI Tokens</p>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Initial Price</h3>
              <p className="text-3xl font-bold text-green-400 mb-2">not live</p>
              <p className="text-gray-300 text-sm">Per XenAI Token</p>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Market Cap</h3>
              <p className="text-3xl font-bold text-green-400 mb-2">not live</p>
              <p className="text-gray-300 text-sm">At Launch</p>
            </div>
          </div>

          {/* Token Distribution */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Token Distribution</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Community & Ecosystem</h4>
                    <p className="text-gray-300 text-sm">Long-term growth and adoption</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-400">10%</p>
                    <p className="text-gray-300 text-sm">400M tokens</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <div>
                    <h4 className="text-lg font-semibold text-white">AI Development Fund</h4>
                    <p className="text-gray-300 text-sm">Model training and improvements</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-400">5%</p>
                    <p className="text-gray-300 text-sm">250M tokens</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Public Sale</h4>
                    <p className="text-gray-300 text-sm">Initial distribution to supporters</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-400">0%</p>
                    <p className="text-gray-300 text-sm">200M tokens</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Team & Advisors</h4>
                    <p className="text-gray-300 text-sm">4-year vesting schedule</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-400">0%</p>
                    <p className="text-gray-300 text-sm">100M tokens</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Liquidity & Exchange</h4>
                    <p className="text-gray-300 text-sm">Market making and trading</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-400">85%</p>
                    <p className="text-gray-300 text-sm">50M tokens</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-80 h-80 relative">
                  {/* Pie Chart Visualization */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="20" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="20"
                      strokeDasharray="100.53 251.33"
                      strokeDashoffset="0"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="20"
                      strokeDasharray="62.83 251.33"
                      strokeDashoffset="-100.53"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#15803d"
                      strokeWidth="20"
                      strokeDasharray="50.27 251.33"
                      strokeDashoffset="-163.36"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#166534"
                      strokeWidth="20"
                      strokeDasharray="25.13 251.33"
                      strokeDashoffset="-213.63"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#14532d"
                      strokeWidth="20"
                      strokeDasharray="12.57 251.33"
                      strokeDashoffset="-238.76"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-400">XenAI</p>
                      <p className="text-gray-300 text-sm">Token Distribution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Utility & Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Token Utility</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-400 text-xl font-bold">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Inference</h3>
                <p className="text-gray-300 text-sm">Pay for AI model computations and queries</p>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-400 text-xl font-bold">🗳</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Governance</h3>
                <p className="text-gray-300 text-sm">Vote on protocol upgrades and model improvements</p>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-400 text-xl font-bold">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Staking Rewards</h3>
                <p className="text-gray-300 text-sm">Earn rewards by securing the network</p>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-400 text-xl font-bold">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Access Premium</h3>
                <p className="text-gray-300 text-sm">Unlock advanced AI features and capabilities</p>
              </div>
            </div>
          </div>

          {/* Vesting Schedule */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Vesting Schedule</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Team & Advisors</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">12-month cliff</span>
                    <span className="text-green-400">0% released</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Year 1-4</span>
                    <span className="text-green-400">25% per year</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Community Rewards</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Launch</span>
                    <span className="text-green-400">10% released</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monthly</span>
                    <span className="text-green-400">7.5% per month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join XenAI?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the first AI agent ecosystem on XLayer Chain and help shape the future of decentralized
              artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Get XenAI Tokens
              </Button>
              <Button
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
              >
                View Whitepaper
              </Button>
            </div>
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
