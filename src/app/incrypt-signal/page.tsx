import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "IncryptSignal",
  description:
    "AI Trading Signal platform built on Solana that enables agents to earn revenue through instant micropayments using the x402 protocol.",
};

export default async function IncryptSignalPage() {
  return (
    <div className="px-6 py-10">
      <section className="relative overflow-hidden hero-vignette">
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] glow-orb opacity-60" />
        <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] glow-orb opacity-40" />
        <div className="relative z-10 mx-auto max-w-6xl text-center pt-16 pb-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight neon-text">IncryptSignal</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            AI Trading Signal built on Solana that enables agents to earn revenue through instant micropayments using the x402 protocol.
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
            <h2 className="text-2xl font-semibold mb-3">What is IncryptSignal?</h2>
            <p className="text-white/80">
              IncryptSignal is a revolutionary AI agent platform built on Solana that enables autonomous AI trading agents to earn revenue through instant micropayments using the x402 protocol. The platform combines advanced AI fine-tuning, real-time market data integration, and seamless payment infrastructure to create a fully functional ecosystem where AI agents provide trading signals as a service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">The x402 Advantage</h3>
            <p className="text-white/80 mb-3">
              The x402 protocol is at the core of IncryptSignal&apos;s innovation. It enables <span className="font-medium text-white">instant, real-time payments</span> that allow AI agents to monetize their services immediately. When a user requests a trading signal, the payment is processed atomically through Solana&apos;s blockchain (~400ms finality), and the AI agent receives payment before delivering the service. This creates a sustainable revenue model for autonomous AI agents.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">AI Agent Ecosystem</h3>
            <p className="text-white/80 mb-3">
              IncryptSignal features <span className="font-medium text-white">three specialized AI trading agents</span>, each fine-tuned and trained with different risk strategies:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>
                <span className="font-medium text-white">Zyra</span> — High Risk Strategy with aggressive entries, high leverage opportunities (20-100x), larger portfolio allocation (15-30%), and higher risk-reward ratios (3:1+). Fine-tuned for maximum returns.
              </li>
              <li>
                <span className="font-medium text-white">Aria</span> — Medium Risk Strategy with a balanced approach, moderate leverage (5-25x), portfolio allocation (5-15%), and optimal risk-reward ratios. Fine-tuned for steady, sustainable growth.
              </li>
              <li>
                <span className="font-medium text-white">Nova</span> — Low Risk Strategy with conservative entries, tighter stops, lower leverage (1-10x), portfolio allocation (2-8%), and measured risk. Fine-tuned for capital preservation.
              </li>
            </ul>
            <p className="text-white/80 mt-3">
              These agents are sophisticated AI models that have been fine-tuned using state-of-the-art techniques including Llama architecture, Hugging Face Transformers, and Unsloth for efficient training. They conduct comprehensive fundamental and technical analysis, combining price patterns, support/resistance levels, momentum indicators, volume analysis, market sentiment, news impact, long/short positioning, and liquidation risks.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Trading Signals</h3>
            <p className="text-white/80 mb-3">
              Each trading signal provides comprehensive analysis including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>
                <span className="font-medium text-white">Direction</span> — Long or Short recommendation with AI reasoning
              </li>
              <li>
                <span className="font-medium text-white">Leverage</span> — Precise leverage recommendation (1x-100x) based on risk strategy
              </li>
              <li>
                <span className="font-medium text-white">Portfolio Allocation</span> — Recommended percentage of portfolio to allocate
              </li>
              <li>
                <span className="font-medium text-white">Take Profit Target</span> — AI-calculated profit target based on market conditions
              </li>
              <li>
                <span className="font-medium text-white">Stop Loss Level</span> — Dynamic risk management stop loss
              </li>
              <li>
                <span className="font-medium text-white">Liquidation Warning</span> — Calculated liquidation price based on leverage and position
              </li>
              <li>
                <span className="font-medium text-white">Comprehensive Analysis</span> — Detailed reasoning combining technical and fundamental factors
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Market Data Integration</h3>
            <p className="text-white/80">
              IncryptSignal integrates multiple data sources to ensure accurate and comprehensive signal generation:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80 mt-2">
              <li>
                <span className="font-medium text-white">Pyth Network</span> — Real-time oracle price feeds for accurate market prices
              </li>
              <li>
                <span className="font-medium text-white">CoinGlass</span> — Long/short ratios and liquidation heatmap data
              </li>
              <li>
                <span className="font-medium text-white">Alternative.me</span> — Fear & Greed Index for market sentiment
              </li>
              <li>
                <span className="font-medium text-white">Technical Indicators</span> — RSI, MACD, and other indicators calculated from price history
              </li>
              <li>
                <span className="font-medium text-white">News Integration</span> — Real-time news feeds analyzed for fundamental signals
              </li>
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg p-4 bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-1">Payment Flow</h4>
              <p className="text-white/80">User selects agent and trading pair, approves payment ($0.01 USDC via x402), payment processed atomically on Solana (~400ms), AI agent receives confirmation, conducts real-time analysis, and delivers signal with full analysis and risk metrics.</p>
            </div>
            <div className="rounded-lg p-4 bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-1">Security & Trust</h4>
              <p className="text-white/80">On-chain verification via x402 protocol, trustless receipts stored in PostgreSQL, reputation system for agent performance tracking, and atomic transaction processing ensuring no double-spending.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg p-4 bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-1">Trading Assets</h4>
              <p className="text-white/80">Currently supports BTC/USD, ETH/USD, and SOL/USD perpetual futures with more assets coming soon.</p>
            </div>
            <div className="rounded-lg p-4 bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-1">Tech Stack</h4>
              <p className="text-white/80">React 18 with TypeScript, Node.js/Express backend, PostgreSQL storage, Hugging Face AI inference, and Solana blockchain integration.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="https://incrypt-signal.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">Launch App</a>
            <a href="https://github.com/GHX5T-SOL/IncryptSignal" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">GitHub</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl py-6">
        <h3 className="text-xl font-semibold mb-4 text-center">Platform Screenshot</h3>
        <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-4 flex items-center justify-center">
          <Image
            src="/assets/IncryptSignal.png"
            alt="IncryptSignal Platform"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}

