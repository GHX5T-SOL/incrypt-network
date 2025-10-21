import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "IncryptOracle",
  description:
    "Decentralized prediction market oracle platform built on Binance Smart Chain. Reliable, tamper-proof data feeds powered by community-governed validators and the $IO token.",
};

export default async function IncryptOraclePage() {
  return (
    <div className="px-6 py-10">
      <section className="relative overflow-hidden hero-vignette">
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] glow-orb opacity-60" />
        <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] glow-orb opacity-40" />
        <div className="relative z-10 mx-auto max-w-6xl text-center pt-16 pb-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight neon-text">IncryptOracle</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Decentralized oracle infrastructure powering the next generation of prediction markets on Binance Smart Chain. Fast, secure, and community-governed.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <a href="#content" className="btn-neon rounded-md px-5 py-2.5 bg-white/5 border border-white/10">Read Overview</a>
            <Link href="/#contact" className="btn-neon rounded-md px-5 py-2.5 bg-[rgba(255,200,0,0.08)] border border-[rgba(255,200,0,0.35)]">Contact</Link>
          </div>
        </div>
      </section>

      <section id="content" className="mx-auto max-w-5xl py-6">
        <div className="glass rounded-xl p-6 sm:p-10 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">What is IncryptOracle?</h2>
            <p className="text-white/80">
              IncryptOracle is a decentralized prediction market oracle platform built on Binance Smart Chain. 
              It provides reliable, tamper-proof data feeds specifically designed for prediction markets, powered 
              by a community-governed network of validators and the native $IO token. With sub-second oracle updates 
              and minimal gas fees, IncryptOracle enables instant settlement and real-time outcome resolution for 
              prediction markets.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Oracle Infrastructure</h3>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>
                <span className="font-medium text-white">Decentralized Validation</span> — Multiple validator nodes ensure data integrity with 99.97% uptime and reputation-weighted consensus.
              </li>
              <li>
                <span className="font-medium text-white">Real-time Data Feeds</span> — Sub-second oracle updates with minimal gas fees and average 1.1s latency.
              </li>
              <li>
                <span className="font-medium text-white">High Confidence Scoring</span> — Reputation-weighted consensus mechanism ensures accurate data delivery.
              </li>
              <li>
                <span className="font-medium text-white">Prediction Market Optimized</span> — Purpose-built for outcome resolution with instant settlement capabilities.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">IncryptPredict Demo</h3>
            <p className="text-white/80 mb-3">
              Experience the power of decentralized prediction markets with IncryptPredict, our demo application showcasing the oracle infrastructure:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg p-3 bg-white/5 border border-white/10">
                <h4 className="font-semibold text-sm mb-1">Create Markets</h4>
                <p className="text-white/70 text-sm">Launch prediction markets on any event with custom parameters</p>
              </div>
              <div className="rounded-lg p-3 bg-white/5 border border-white/10">
                <h4 className="font-semibold text-sm mb-1">AMM Trading</h4>
                <p className="text-white/70 text-sm">Automated market maker for outcome shares with dynamic pricing</p>
              </div>
              <div className="rounded-lg p-3 bg-white/5 border border-white/10">
                <h4 className="font-semibold text-sm mb-1">Real-time Odds</h4>
                <p className="text-white/70 text-sm">Live price discovery and liquidity management</p>
              </div>
              <div className="rounded-lg p-3 bg-white/5 border border-white/10">
                <h4 className="font-semibold text-sm mb-1">Instant Settlement</h4>
                <p className="text-white/70 text-sm">Oracle-powered automatic resolution</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">DAO Governance</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg p-4 bg-white/5 border border-white/10">
                <h4 className="font-semibold mb-1">Community Control</h4>
                <p className="text-white/80">Submit and vote on platform improvements with stake-weighted voting on oracle parameters.</p>
              </div>
              <div className="rounded-lg p-4 bg-white/5 border border-white/10">
                <h4 className="font-semibold mb-1">Revenue Distribution</h4>
                <p className="text-white/80">50% of fees to holders, 50% to treasury for development, audits, and partnerships.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Developer Tools</h3>
            <p className="text-white/80 mb-3">
              Comprehensive developer toolkit for easy integration with your applications:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-white/80">
              <li><span className="font-medium text-white">JavaScript SDK</span> — Easy integration with comprehensive documentation</li>
              <li><span className="font-medium text-white">React Hooks</span> — Ready-to-use hooks for React applications</li>
              <li><span className="font-medium text-white">TypeScript Support</span> — Full type definitions for better developer experience</li>
              <li><span className="font-medium text-white">Multi-chain Ready</span> — BSC Mainnet, Testnet, and local development</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Live Metrics</h3>
            <div className="rounded-lg p-4 bg-white/5 border border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-semibold text-white">99.97%</div>
                  <div className="text-white/70 text-sm">Oracle Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">1.1s</div>
                  <div className="text-white/70 text-sm">Avg Latency</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">3</div>
                  <div className="text-white/70 text-sm">Active Validators</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">47</div>
                  <div className="text-white/70 text-sm">Data Feeds</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">$5.8k</div>
                  <div className="text-white/70 text-sm">Total Volume (Testnet)</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">92%</div>
                  <div className="text-white/70 text-sm">Test Coverage</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Security & Testing</h3>
            <div className="space-y-2">
              <div className="rounded-lg p-3 bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-white/80">CertiK Security Audit</span>
                <span className="font-semibold text-green-400">96/100 ✅</span>
              </div>
              <div className="rounded-lg p-3 bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-white/80">Slither Analysis</span>
                <span className="font-semibold text-green-400">0 Critical Issues ✅</span>
              </div>
              <div className="rounded-lg p-3 bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-white/80">Comprehensive Test Suite</span>
                <span className="font-semibold text-green-400">121 Tests, 92% Coverage ✅</span>
              </div>
              <div className="rounded-lg p-3 bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-white/80">OpenZeppelin Standards</span>
                <span className="font-semibold text-green-400">Battle-tested ✅</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">$IO Tokenomics</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg p-4 bg-white/5 border border-white/10">
                <h4 className="font-semibold mb-2">Token Details</h4>
                <ul className="space-y-1 text-white/80 text-sm">
                  <li>• <span className="font-medium text-white">Total Supply:</span> 1,000,000,000 IO</li>
                  <li>• <span className="font-medium text-white">Fair Launch:</span> Four Meme platform</li>
                  <li>• <span className="font-medium text-white">Team Allocation:</span> 0% (No team tokens)</li>
                  <li>• <span className="font-medium text-white">Network:</span> Binance Smart Chain</li>
                </ul>
              </div>
              <div className="rounded-lg p-4 bg-white/5 border border-white/10">
                <h4 className="font-semibold mb-2">Revenue Model</h4>
                <ul className="space-y-1 text-white/80 text-sm">
                  <li>• <span className="font-medium text-white">Market Fees:</span> 2% on all trades</li>
                  <li>• <span className="font-medium text-white">Oracle Fees:</span> Subscription-based</li>
                  <li>• <span className="font-medium text-white">Validator Stake:</span> Min 1,000 IO</li>
                  <li>• <span className="font-medium text-white">Distribution:</span> 50/50 split</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="https://incrypt.fun" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">Launch App</a>
            <a href="https://github.com/GHX5T-SOL/IncryptOracle" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">GitHub</a>
            <a href="https://testnet.bscscan.com/address/0x823C0Ead984707A4B73173274E0e075492866593" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">BSCScan</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl py-6">
        <h3 className="text-xl font-semibold mb-4 text-center">System Architecture</h3>
        <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-4 flex items-center justify-center">
          <Image
            src="/assets/IncryptOracle.png"
            alt="IncryptOracle System Architecture"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <div className="mt-4 text-center text-white/70 text-sm">
          <p>Five core smart contracts working together: IOToken, IncryptOracle, PredictionMarket, IncryptDAO, and RevenueDistributor</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl py-6">
        <h3 className="text-xl font-semibold mb-4 text-center">Roadmap</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <h4 className="font-semibold">Phase 1: Foundation ✅</h4>
            </div>
            <ul className="text-white/80 text-sm space-y-1 pl-4">
              <li>• Core smart contracts development</li>
              <li>• BSC testnet deployment</li>
              <li>• Basic frontend interface</li>
              <li>• JavaScript SDK v1.0</li>
            </ul>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <h4 className="font-semibold">Phase 2: Launch 🚀</h4>
            </div>
            <ul className="text-white/80 text-sm space-y-1 pl-4">
              <li>• Security audit completion</li>
              <li>• BSC mainnet deployment</li>
              <li>• $IO token launch on Four Meme</li>
              <li>• IncryptPredict beta launch</li>
            </ul>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <h4 className="font-semibold">Phase 3: Growth 📈</h4>
            </div>
            <ul className="text-white/80 text-sm space-y-1 pl-4">
              <li>• Mobile app development</li>
              <li>• Additional oracle data sources</li>
              <li>• Third-party integrations</li>
              <li>• Cross-chain expansion</li>
            </ul>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <h4 className="font-semibold">Phase 4: Scale 🌍</h4>
            </div>
            <ul className="text-white/80 text-sm space-y-1 pl-4">
              <li>• Advanced prediction markets</li>
              <li>• Institutional oracle services</li>
              <li>• DeFi protocol integrations</li>
              <li>• Global expansion</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

