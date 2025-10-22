import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Chumchon",
  description:
    "Decentralized Social Network built on Solana with Token/NFT‑gated communities, on‑chain escrow for OTC swaps, verifiable reputation via PDAs, and ECIES‑encrypted DMs.",
};

export default async function ChumchonPage() {
  return (
    <div className="px-6 py-10">
      <section className="relative overflow-hidden hero-vignette">
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] glow-orb opacity-60" />
        <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] glow-orb opacity-40" />
        <div className="relative z-10 mx-auto max-w-6xl text-center pt-16 pb-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight neon-text">Chumchon</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            A decentralized social app built for Solana Mobile, featuring token-gated communities, on-chain messaging, escrow trading, and meme challenges.
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
            <h2 className="text-2xl font-semibold mb-3">What is Chumchon?</h2>
            <p className="text-white/80">
              Chumchon is a decentralized social network built on Solana that combines social interaction with blockchain technology. 
              It features <span className="text-[var(--neon-pink)] font-medium">token-gated communities</span>, secure messaging, 
              on-chain escrow trading, and gamified experiences designed specifically for mobile users.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Core Social Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>
                <span className="font-medium text-white">User Profiles</span> — Create and customize your on-chain profile with NFT profile pictures
              </li>
              <li>
                <span className="font-medium text-white">Token-Gated Groups</span> — Create and join exclusive communities based on token or NFT ownership
              </li>
              <li>
                <span className="font-medium text-white">Messaging System</span> — Send encrypted messages in groups and tip content creators with SOL or SPL Tokens
              </li>
              <li>
                <span className="font-medium text-white">Escrow System</span> — Securely trade tokens with other users through on-chain escrow in &quot;Whale Groups&quot;
              </li>
              <li>
                <span className="font-medium text-white">Invite System</span> — Generate and share invite links to bring friends into groups
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Gamification & Rewards</h3>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>
                <span className="font-medium text-white">Meme Challenges</span> — Create AI-powered meme contests with SOL or token rewards
              </li>
              <li>
                <span className="font-medium text-white">Educational Rewards</span> — Complete tutorials to earn SOL or token rewards
              </li>
              <li>
                <span className="font-medium text-white">Community Contests</span> — Participate in community-driven challenges and competitions
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Mobile-First Experience</h3>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>
                <span className="font-medium text-white">Native Mobile App</span> — Built specifically for Android with React Native
              </li>
              <li>
                <span className="font-medium text-white">Wallet Integration</span> — Seamless connection with Phantom, Backpack, and other mobile wallets
              </li>
              <li>
                <span className="font-medium text-white">Fast Transactions</span> — Optimized for mobile blockchain interactions
              </li>
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg p-4 bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-1">Technology Stack</h4>
              <p className="text-white/80">React Native (Expo), Solana (Anchor Framework), Mobile Wallet Adapter (MWA), TypeScript</p>
            </div>
            <div className="rounded-lg p-4 bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-1">Security Features</h4>
              <p className="text-white/80">ECIES-encrypted DMs, secure token transfers through escrow contracts, comprehensive account validation</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="https://chumchon.app" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">Launch App</a>
            <a href="https://github.com/GHX5T-SOL/chumchon" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">GitHub</a>
            <a href="https://drive.google.com/file/d/12ti28SJwCDthR6AAxyG7Uj4m3909FOqb/view" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-md px-4 py-2 bg-white/5 border border-white/10">Technical Whitepaper</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl py-6">
        <h3 className="text-xl font-semibold mb-4 text-center">App Screenshot</h3>
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-4 flex items-center justify-center max-w-md">
            <Image
              src="/assets/chumchon screenshot.png"
              alt="Chumchon App Screenshot"
              width={400}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
