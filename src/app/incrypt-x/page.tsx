import { marked } from "marked";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

export const metadata = {
  title: "IncryptX",
  description:
    "Launchpad, X Curve AMM, advanced trading, P2P escrow, and Perps on Solana.",
};

export default async function IncryptXPage() {
  const mdPath = path.join(process.cwd(), "src", "IncryptX.md");
  const md = fs.readFileSync(mdPath, "utf8");
  const html = marked.parse(md);
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
        <div className="glass rounded-xl p-6 sm:p-8">
          <div className="prose prose-invert prose-incrypt" dangerouslySetInnerHTML={{ __html: html as string }} />
        </div>
      </section>
    </div>
  );
}


