import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero */}
      <section className="relative overflow-hidden hero-vignette">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <video
            className="w-[900px] max-w-[90vw] h-auto mix-blend-screen opacity-80"
            preload="none"
            poster="/assets/brain-vid.png"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src="/assets/brain-vid.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28 text-center">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight neon-text">
            Incrypt Network
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
            AI-powered DeFi and next-gen trading on Solana. Build, trade, and scale with
            IncryptDefi and IncryptX.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link href="#products" className="btn-neon rounded-md px-5 py-3 bg-[rgba(255,255,255,0.06)] border border-white/10">
              Explore Products
            </Link>
            <a href="https://x.com/Incrypt_defi" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-5 py-3 bg-[rgba(255,43,209,0.08)] border border-[rgba(255,43,209,0.35)]">
              Follow on X
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="absolute -z-10 -top-24 left-10 w-[420px] h-[420px] glow-orb opacity-50" />
        <div className="absolute -z-10 -bottom-24 right-10 w-[520px] h-[520px] glow-orb opacity-40" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">AI Intelligence</h3>
            <p className="text-white/80">Strategy generation, risk analysis, and market insights infused across the suite.</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Mobile-first + Desktop</h3>
            <p className="text-white/80">Built for Solana Mobile with seamless desktop experiences.</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">High Performance</h3>
            <p className="text-white/80">Low-latency infra and smart liquidity mechanics for traders and builders.</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Products</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-xl flex flex-col gap-3">
            <h3 className="text-xl font-semibold">IncryptDefi</h3>
            <p className="text-white/80">AI Intelligent DeFi on Solana: Meteora liquidity, Kamino/MarginFi lending, and IncryptAI strategies.</p>
            <div className="flex gap-3 flex-wrap mt-2">
              <Link href="/incrypt-defi" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">Learn more</Link>
              <a href="https://expo.dev/accounts/ghxstxbt/projects/incrypt/builds/792f6288-7fd2-4bd0-82be-70a00248121f" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">Android Demo</a>
              <a href="https://incrypt--demo.expo.app" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">Web Demo</a>
              <a href="https://github.com/GHX5T-SOL/incrypt" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">GitHub</a>
            </div>
          </div>
          <div className="glass p-6 rounded-xl flex flex-col gap-3">
            <h3 className="text-xl font-semibold">IncryptX</h3>
            <p className="text-white/80">Launchpad, X Curve AMM, advanced trading, P2P escrow, and Perps on Solana.</p>
            <div className="flex gap-3 flex-wrap mt-2">
              <Link href="/incrypt-x" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">Learn more</Link>
              <a href="https://incryptx-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">Demo</a>
              <a href="https://github.com/GHX5T-SOL/incryptX" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="glass rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3 text-center">Contact</h2>
          <div className="flex flex-col items-center gap-3 text-white/80">
            <p>
              Email: <a className="underline" href="mailto:incryptinvestments@protonmail.com">incryptinvestments@protonmail.com</a>
            </p>
            <a href="https://x.com/Incrypt_defi" target="_blank" rel="noopener noreferrer" className="btn-neon inline-block rounded-md px-4 py-2 bg-white/5 border border-white/10">Follow @Incrypt_defi</a>
          </div>
        </div>
      </section>
    </div>
  );
}
