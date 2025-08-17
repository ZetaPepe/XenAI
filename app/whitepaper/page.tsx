"use client"

import { Button } from "@/components/ui/button"
import XAINavigation from "@/components/xai-navigation"

export default function WhitepaperPage() {
  const sections = [
    {
      id: "abstract",
      title: "Abstract",
      content:
        "XenAI represents a paradigm shift in artificial intelligence deployment on blockchain infrastructure. As the first AI agent model native to XLayer Chain, XenAI combines advanced neural network architectures with decentralized consensus mechanisms to create autonomous, intelligent systems that operate transparently and efficiently on-chain.",
    },
    {
      id: "introduction",
      title: "Introduction",
      content:
        "The convergence of artificial intelligence and blockchain technology presents unprecedented opportunities for creating decentralized, autonomous systems. XenAI addresses the fundamental challenges of AI deployment in decentralized environments while maintaining the transparency, security, and immutability that blockchain technology provides.",
    },
    {
      id: "architecture",
      title: "Technical Architecture",
      content:
        "XenAI employs a hybrid architecture that combines on-chain governance and verification with off-chain computation for optimal performance. The system utilizes advanced transformer models optimized for blockchain environments, with smart contracts managing model updates, inference requests, and reward distribution.",
    },
    {
      id: "consensus",
      title: "Consensus Mechanism",
      content:
        "Our novel Proof-of-Intelligence (PoI) consensus mechanism ensures that AI model outputs are verified through distributed computation and consensus. This approach maintains decentralization while providing reliable, tamper-proof AI inference results that can be trusted by the entire network.",
    },
    {
      id: "tokenomics",
      title: "Economic Model",
      content:
        "The XenAI token serves multiple functions within the ecosystem: payment for AI inference, governance voting, staking for network security, and incentivizing model improvements. The economic model is designed to create sustainable value accrual while encouraging long-term participation and development.",
    },
    {
      id: "governance",
      title: "Decentralized Governance",
      content:
        "XenAI implements a sophisticated governance system where token holders can propose and vote on model upgrades, parameter changes, and ecosystem developments. This ensures that the AI system evolves according to community needs while maintaining technical excellence and security standards.",
    },
  ]

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
              <span className="text-green-400">XenAI</span> Whitepaper
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Technical Documentation: Decentralized AI on XLayer Chain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Download PDF
              </Button>
              <Button
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
              >
                View on GitHub
              </Button>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-500/10 transition-colors group"
                >
                  <span className="text-green-400 font-bold text-sm bg-green-600/20 w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-gray-300 group-hover:text-green-300 transition-colors">{section.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Document Sections */}
          <div className="space-y-16">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                </div>
                <div className="bg-green-900/10 border border-green-500/20 rounded-2xl p-8">
                  <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p>

                  {/* Additional content for specific sections */}
                  {section.id === "architecture" && (
                    <div className="mt-8 grid md:grid-cols-3 gap-6">
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">On-Chain Layer</h4>
                        <p className="text-gray-300 text-sm">Smart contracts, governance, and verification</p>
                      </div>
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Computation Layer</h4>
                        <p className="text-gray-300 text-sm">Distributed AI inference and model execution</p>
                      </div>
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Application Layer</h4>
                        <p className="text-gray-300 text-sm">User interfaces and developer APIs</p>
                      </div>
                    </div>
                  )}

                  {section.id === "consensus" && (
                    <div className="mt-8">
                      <h4 className="text-xl font-semibold text-white mb-4">Proof-of-Intelligence Process</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            1
                          </div>
                          <p className="text-gray-300">Inference request submitted to network</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            2
                          </div>
                          <p className="text-gray-300">Multiple validators compute result independently</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            3
                          </div>
                          <p className="text-gray-300">Results aggregated through consensus mechanism</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            4
                          </div>
                          <p className="text-gray-300">Final result verified and recorded on-chain</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === "tokenomics" && (
                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Token Utility</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">AI inference payments</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">Governance voting rights</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">Network security staking</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">Premium feature access</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Value Accrual</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">Transaction fee burns</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">Staking rewards distribution</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">Ecosystem growth incentives</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">Developer revenue sharing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* Technical Specifications */}
          <div className="mt-16 bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Blockchain Infrastructure</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Network</span>
                    <span className="text-green-400">XLayer Chain</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Consensus</span>
                    <span className="text-green-400">Proof-of-Intelligence</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Block Time</span>
                    <span className="text-green-400">3 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">TPS</span>
                    <span className="text-green-400">10,000+</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Model Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Architecture</span>
                    <span className="text-green-400">Transformer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Parameters</span>
                    <span className="text-green-400">7B+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Context Length</span>
                    <span className="text-green-400">32K tokens</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Inference Time</span>
                    <span className="text-green-400">&lt;100ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              XenAI represents the future of decentralized artificial intelligence, combining cutting-edge AI technology
              with the transparency and security of blockchain. By creating the first AI agent model on XLayer Chain,
              we're establishing the foundation for a new era of autonomous, intelligent systems that serve the global
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Join XenAI
              </Button>
              <Button
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
              >
                Technical Discussion
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
