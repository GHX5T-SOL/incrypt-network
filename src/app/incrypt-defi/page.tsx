import { marked } from "marked";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "IncryptDefi",
  description:
    "AI Intelligent DeFi on Solana with Meteora, Kamino, MarginFi and IncryptAI.",
};

export default async function IncryptDefiPage() {
  return (
    <div className="px-6 py-10">
      <section className="relative overflow-hidden hero-vignette">
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] glow-orb opacity-60" />
        <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] glow-orb opacity-40" />
        <div className="relative z-10 mx-auto max-w-6xl text-center pt-16 pb-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight neon-text">IncryptDefi</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            AI Intelligent DeFi on Solana: Meteora liquidity, Kamino/MarginFi lending, and IncryptAI strategies.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <a href="#content" className="btn-neon rounded-md px-5 py-2.5 bg-white/5 border border-white/10">Read Overview</a>
            <Link href="/#contact" className="btn-neon rounded-md px-5 py-2.5 bg-[rgba(255,43,209,0.08)] border border-[rgba(255,43,209,0.35)]">Contact</Link>
          </div>
        </div>
      </section>

      <section id="content" className="mx-auto max-w-5xl py-6">
        <div className="glass rounded-xl p-6 sm:p-10 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">What is IncryptDefi?</h2>
            <p className="text-white/80">
              IncryptDefi is a mobile-first Solana Dapp that makes LP farming simple. It
              unifies liquidity provision and lending across protocols like Meteora, Kamino, and MarginFi,
              while <span className="text-[var(--neon-pink)] font-medium">IncryptAI</span> suggests and optimizes strategies tailored to your goals and risk.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>
                <span className="font-medium text-white">AI Strategy Builder</span> — Chat in plain English to design strategies (e.g., SOL–USDC DLMM range, leverage levels) with risk flags.
              </li>
              <li>
                <span className="font-medium text-white">LP Farming</span> — Create/join Meteora DLMM/DAMM pools with intuitive controls and auto-compounding.
              </li>
              <li>
                <span className="font-medium text-white">Lending & Leverage</span> — Use Kamino/MarginFi to lend, borrow, and construct leveraged LP positions with health monitoring.
              </li>
              <li>
                <span className="font-medium text-white">Token Safety</span> — On-demand checks using Rugcheck and DexScreener style assessments before you commit.
              </li>
              <li>
                <span className="font-medium text-white">Mobile-First UX</span> — Built for Solana Mobile; works great on desktop and the web demo.
              </li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg p-4 bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-1">Why it matters</h4>
              <p className="text-white/80">DeFi is complex—IncryptDefi streamlines discovery, planning, and execution into a single, guided flow.</p>
            </div>
            <div className="rounded-lg p-4 bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-1">Who it’s for</h4>
              <p className="text-white/80">Yield seekers who want clear steps, safety checks, and actionable strategies on Solana.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="https://expo.dev/accounts/ghxstxbt/projects/incrypt/builds/f84d20af-5920-4774-84e7-770621c2ce54" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">Android Demo</a>
            <a href="https://incrypt--demo.expo.app" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">Web Demo</a>
            <a href="https://github.com/GHX5T-SOL/incrypt" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">GitHub</a>
          </div>
          <p className="text-center text-white/70 text-sm">iOS demo app coming soon.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl py-6">
        <h3 className="text-xl font-semibold mb-4 text-center">Screenshots</h3>
        <div className="grid sm:grid-cols-2 gap-6 items-center">
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-4 flex items-center justify-center">
            <Image
              src="/assets/IncryptDefi-homepage-screenshot.svg"
              alt="IncryptDefi App — Home screen"
              width={500}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-4 flex items-center justify-center">
            <Image
              src="/assets/IncryptDefi-screenshot-dashboard.svg"
              alt="IncryptDefi App — Dashboard"
              width={500}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}


