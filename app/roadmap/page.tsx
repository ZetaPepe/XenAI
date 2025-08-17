"use client"

import { Button } from "@/components/ui/button"
import XAINavigation from "@/components/xai-navigation"

export default function RoadmapPage() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation & Launch",
      period: "Q1 2024",
      status: "completed",
      items: [
        "XenAI core AI model development",
        "XLayer Chain integration and testing",
        "Smart contract deployment",
        "Community building and initial partnerships",
        "Token generation event (TGE)",
      ],
    },
    {
      phase: "Phase 2",
      title: "Platform Development",
      period: "Q2 2024",
      status: "in-progress",
      items: [
        "AI inference API launch",
        "Governance system implementation",
        "Staking mechanism deployment",
        "Developer SDK and documentation",
        "First AI model upgrades",
      ],
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Expansion",
      period: "Q3 2024",
      status: "upcoming",
      items: [
        "Multi-model AI architecture",
        "Cross-chain bridge development",
        "Enterprise partnerships",
        "Advanced AI capabilities",
        "Mobile application launch",
      ],
    },
    {
      phase: "Phase 4",
      title: "Autonomous Operations",
      period: "Q4 2024",
      status: "upcoming",
      items: [
        "Fully autonomous AI agents",
        "Self-improving model architecture",
        "Decentralized model training",
        "Global expansion initiatives",
        "Advanced governance features",
      ],
    },
    {
      phase: "Phase 5",
      title: "AI Singularity",
      period: "2025+",
      status: "future",
      items: [
        "AGI capabilities integration",
        "Quantum computing compatibility",
        "Interplanetary AI network",
        "Universal AI translator",
        "Complete ecosystem maturity",
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-600"
      case "in-progress":
        return "bg-yellow-500"
      case "upcoming":
        return "bg-blue-500"
      case "future":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In Progress"
      case "upcoming":
        return "Upcoming"
      case "future":
        return "Future Vision"
      default:
        return "Unknown"
    }
  }

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
              <span className="text-green-400">XenAI</span> Roadmap
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our journey to revolutionize AI on blockchain - from inception to AI singularity
            </p>
          </div>

          {/* Progress Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Foundation</h3>
              <p className="text-green-400 text-sm font-medium">Completed</p>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-xl font-bold">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Platform</h3>
              <p className="text-yellow-400 text-sm font-medium">In Progress</p>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expansion</h3>
              <p className="text-blue-400 text-sm font-medium">Upcoming</p>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">∞</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Singularity</h3>
              <p className="text-purple-400 text-sm font-medium">Future Vision</p>
            </div>
          </div>

          {/* Detailed Roadmap */}
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < roadmapItems.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-green-500 to-green-300 opacity-30"></div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div
                    className={`w-12 h-12 ${getStatusColor(item.status)} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{item.phase}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)} text-white`}
                          >
                            {getStatusText(item.status)}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold text-green-400 mb-2">{item.title}</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-white">{item.period}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {item.items.map((subItem, subIndex) => (
                        <div key={subIndex} className="flex items-center space-x-3">
                          <div
                            className={`w-2 h-2 ${item.status === "completed" ? "bg-green-400" : "bg-gray-400"} rounded-full flex-shrink-0`}
                          ></div>
                          <p className={`text-sm ${item.status === "completed" ? "text-green-300" : "text-gray-300"}`}>
                            {subItem}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Milestones */}
          <div className="mt-16 mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Key Milestones</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">1M</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Users</h3>
                  <p className="text-green-400 text-sm">Target by Q3 2024</p>
                </div>
                <p className="text-gray-300 text-sm text-center">
                  Reach 1 million active users across the XenAI ecosystem
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">100</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Partners</h3>
                  <p className="text-green-400 text-sm">Target by Q4 2024</p>
                </div>
                <p className="text-gray-300 text-sm text-center">
                  Strategic partnerships with leading blockchain and AI companies
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">∞</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">AGI</h3>
                  <p className="text-green-400 text-sm">Vision for 2025+</p>
                </div>
                <p className="text-gray-300 text-sm text-center">
                  Achieve artificial general intelligence on blockchain
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the most ambitious AI project on blockchain. Help us build the future of decentralized
              artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Join Community
              </Button>
              <Button
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
              >
                Follow Updates
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
