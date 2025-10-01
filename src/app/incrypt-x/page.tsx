import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "IncryptX",
  description:
    "Launchpad, X Curve AMM, advanced trading, P2P escrow, and Perps on Solana.",
};

export default async function IncryptXPage() {
  return (
    <div className="px-6 py-10">
      <section className="relative overflow-hidden hero-vignette">
        <div className="absolute -top-16 -right-20 w-[420px] h-[420px] glow-orb opacity-60" />
        <div className="absolute -bottom-24 -left-24 w-[520px] h-[520px] glow-orb opacity-40" />
        <div className="relative z-10 mx-auto max-w-6xl text-center pt-16 pb-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight neon-text">IncryptX</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Launchpad, X Curve AMM, advanced trading, P2P escrow, and Perps on Solana.
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
            <h2 className="text-2xl font-semibold mb-3">What is IncryptX?</h2>
            <p className="text-white/80">
              IncryptX is a next‑gen Solana launchpad and AMM DEX with a social layer. Projects can launch fairly,
              migrate liquidity, and grow communities with token‑gated chats and a Twitter‑like feed—while traders
              get powerful DEX tools and advanced markets.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Core Modules</h3>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li><span className="font-medium text-white">Launchpad</span> — Fast degen launches or advanced, customizable tokenomics with anti‑snipe and anti‑rug options.</li>
              <li><span className="font-medium text-white">X Curve AMM</span> — Hybrid AMM design for better price discovery and adaptable fees/liquidity.</li>
              <li><span className="font-medium text-white">Trade</span> — Simple and pro UIs, trustless P2P escrow, wallet tracking, and copy trading.</li>
              <li><span className="font-medium text-white">Perps</span> — Isolated AMM perp pools for qualified tokens (up to 100x leverage) with guardrails.</li>
              <li><span className="font-medium text-white">Social</span> — Token‑gated group chats and a feed to coordinate, announce, and engage holders.</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg p-4 bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-1">Fair + Secure Launches</h4>
              <p className="text-white/80">Anti‑snipe windows, MEV‑resistant flows, and optional locks. Bootstrap responsibly and migrate liquidity when ready.</p>
            </div>
            <div className="rounded-lg p-4 bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-1">Grow Communities</h4>
              <p className="text-white/80">Profiles, gated chats, bounties, and social posts make it easy to organize and reward real contributors.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="https://incryptx-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">Demo</a>
            <a href="https://github.com/GHX5T-SOL/incryptX" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">GitHub</a>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl py-6">
        <h3 className="text-xl font-semibold mb-4 text-center">Screenshots</h3>
        <div className="grid sm:grid-cols-2 gap-6 items-center">
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-4 flex items-center justify-center">
            <Image
              src="/assets/IncryptX-HomePage-screenshot.svg"
              alt="IncryptX — Homepage"
              width={900}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-4 flex items-center justify-center">
            <Image
              src="/assets/IncryptX-CreateToken-screenshot.svg"
              alt="IncryptX — Create Token"
              width={900}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}


