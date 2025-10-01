import { marked } from "marked";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "IncryptExchange",
  description:
    "A Decentralized Omnichain Perpetual Futures Exchange with shared Deep Liquidity and 140+ high leverage assets available for trading.",
};

export default async function IncryptExchangePage() {
  return (
    <div className="px-6 py-10">
      <section className="relative overflow-hidden hero-vignette">
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] glow-orb opacity-60" />
        <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] glow-orb opacity-40" />
        <div className="relative z-10 mx-auto max-w-6xl text-center pt-16 pb-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight neon-text">IncryptExchange</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            A Decentralized Omnichain Perpetual Futures Exchange with shared Deep Liquidity and 140+ high leverage assets available for trading.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <a href="#content" className="btn-neon rounded-md px-5 py-2.5 bg-white/5 border border-white/10">Read Overview</a>
            <Link href="/#contact" className="btn-neon rounded-md px-5 py-2.5 bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.35)]">Contact</Link>
          </div>
        </div>
      </section>

      <section id="content" className="mx-auto max-w-5xl py-6">
        <div className="glass rounded-xl p-6 sm:p-10 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">What is IncryptExchange?</h2>
            <p className="text-white/80">
              IncryptExchange is a fully-featured omnichain perpetual futures exchange built on Orderly Network's 
              low-latency shared liquidity infrastructure. It provides access to 140+ assets with high leverage 
              trading across 17+ major blockchain networks, enabling seamless cross-chain trading without the 
              complexity of bridging funds.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>
                <span className="font-medium text-white">Omnichain Trading</span> — Trade against liquidity from all major chains without leaving your preferred network. A trader on Polygon can trade against traders on Arbitrum or AVAX seamlessly.
              </li>
              <li>
                <span className="font-medium text-white">Deep Liquidity</span> — Unified orderbook powered by multiple top-tier market makers, ensuring there are never liquidity shortages with ready-to-use liquidity pools.
              </li>
              <li>
                <span className="font-medium text-white">High Leverage Assets</span> — Access to 140+ assets with leverage options exceeding 100x, providing diverse trading opportunities.
              </li>
              <li>
                <span className="font-medium text-white">CEX-Level Performance</span> — Sub-200ms latency for high-frequency trading with self-custody, onchain orders, and full transparency.
              </li>
              <li>
                <span className="font-medium text-white">Gasless Trading</span> — No gas fees once funds are deposited and trading keys are activated, with one-click trading sessions.
              </li>
              <li>
                <span className="font-medium text-white">Self-Custody</span> — Complete control over your assets with private key ownership, eliminating concerns about exchange insolvency.
              </li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg p-4 bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-1">Unified Infrastructure</h4>
              <p className="text-white/80">Built on Orderly Network's proven infrastructure with 700K+ traders, 55+ trusted partners, and $110B+ cumulative trading volume.</p>
            </div>
            <div className="rounded-lg p-4 bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-1">Professional Security</h4>
              <p className="text-white/80">Professional-grade security with renowned auditing and cybersecurity firms providing 24/7 monitoring and smart contract protection.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="https://incrypt.exchange" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">Launch Dex</a>
            <a href="https://github.com/OrderlyNetworkDexCreator/incrypt-exchange-9353" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">GitHub</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl py-6">
        <h3 className="text-xl font-semibold mb-4 text-center">System Architecture</h3>
        <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-4 flex items-center justify-center">
          <Image
            src="/assets/High_level_architecture.png"
            alt="IncryptExchange System Architecture"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <div className="mt-4 text-center text-white/70 text-sm">
          <p>Three-layer architecture: Asset Layer (user interactions), Settlement Layer (transaction ledger), and Engine Layer (orderbook and order services)</p>
        </div>
      </section>
    </div>
  );
}
