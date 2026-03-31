/**
 * Custom SVG — business → digital (no external asset required).
 * Swap for Undraw/Figma art when ready; keep alt on wrapper.
 */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <figure className={className}>
      <svg
        viewBox="0 0 440 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[min(100%,26rem)]"
        role="img"
        aria-label="Local business storefront connected to a laptop showing growth—digital transformation made simple."
      >
        <defs>
          <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(32 100% 55%)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="hsl(217 100% 62%)" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <rect
          x="20"
          y="24"
          width="400"
          height="252"
          rx="18"
          className="fill-card stroke-border"
          strokeWidth="1.5"
        />
        <rect x="32" y="36" width="376" height="228" rx="12" fill="url(#hero-grad)" />

        <path
          d="M64 176 V118 h82 v58 H64z"
          className="fill-muted stroke-border"
          strokeWidth="1.5"
        />
        <path
          d="M64 118 L105 94 h20 l41 24 v14 H64z"
          className="stroke-foreground/20"
          strokeWidth="1.5"
          fill="hsl(var(--muted))"
        />
        <rect x="88" y="138" width="26" height="32" rx="2" className="fill-background stroke-border" strokeWidth="1" />

        <path
          d="M162 142 h46"
          className="stroke-brand-blue"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M200 134 l14 8 l-14 8"
          className="stroke-brand-blue"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <rect x="232" y="104" width="124" height="80" rx="8" className="fill-foreground/[0.06] stroke-border" strokeWidth="1.5" />
        <rect x="240" y="112" width="108" height="58" rx="4" className="fill-background" />
        <rect x="222" y="182" width="144" height="9" rx="3" className="fill-foreground/10" />
        <path
          d="M252 154 l16-18 12 10 18-24 14 20"
          className="stroke-primary"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="314" cy="130" r="3" className="fill-brand-green" />

        <path
          d="M88 246 Q210 198 352 230"
          className="stroke-success"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
      </svg>
      <figcaption className="mt-3 text-center font-diagram text-xs text-muted-foreground">
        Illustration: your business → clear online presence
      </figcaption>
    </figure>
  );
}
