"use client";

import React from "react";

import {Avatar, Spinner} from "@heroui/react";

// ─── Social proof data ───────────────────────────────────────────────────────

const socialProofAvatars = [
  "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg",
  "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
  "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
  "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
];

// ─── Yours Truly wordmark ─────────────────────────────────────────────────────

function YoursTrulyWordmark() {
  return (
    <div className="flex items-baseline gap-1 select-none">
      <span className="text-base font-bold tracking-tight text-white">YOURS</span>
      <span className="text-base italic font-light text-white/90">Truly</span>
    </div>
  );
}

// ─── Decorative corner images ─────────────────────────────────────────────────

const cornerImages = [
  {
    src: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg",
    className: "absolute -top-4 -right-4 w-40 h-28 rounded-2xl rotate-6",
  },
  {
    src: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg",
    className: "absolute top-10 right-24 w-28 h-20 rounded-2xl -rotate-3",
  },
];

// ─── Loading screen ───────────────────────────────────────────────────────────

export type LoadingScreenProps = {
  /** Called after auto-advance timer fires (≈ 2.5 s). Hook for flow navigation. */
  onComplete?: () => void;
};

export function LoadingScreen({onComplete}: LoadingScreenProps) {
  const [progress, setProgress] = React.useState(0);

  /* Auto-advance and drive the progress bar */
  React.useEffect(() => {
    const duration = 2400; // ms
    const interval = 40;
    const step = (interval / duration) * 100;
    let current = 0;

    const ticker = setInterval(() => {
      current = Math.min(current + step, 100);
      setProgress(current);
      if (current >= 100) {
        clearInterval(ticker);
        onComplete?.();
      }
    }, interval);

    return () => clearInterval(ticker);
  }, [onComplete]);

  return (
    <div className="flex h-screen min-h-[600px] w-full items-center justify-center bg-background p-6">
      {/* Full-bleed amber banner card (24 px inset matching Figma frame) */}
      <div className="relative flex h-full w-full overflow-hidden rounded-3xl bg-amber-400">

        {/* ── Background SVG / decorative large lettering ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden select-none"
        >
          <span className="translate-x-1/4 text-[28rem] font-black leading-none tracking-tighter text-white/[0.07]">
            YT
          </span>
        </div>

        {/* ── Top-right corner: two overlapping photo clips ── */}
        <div aria-hidden className="pointer-events-none absolute -top-4 right-0 h-40 w-48 overflow-visible select-none">
          {cornerImages.map((img, i) => (
            <img
              key={i}
              alt=""
              className={`${img.className} object-cover opacity-90 shadow-xl`}
              src={img.src}
            />
          ))}
        </div>

        {/* ── Top-left logo ── */}
        <div className="absolute top-10 left-10">
          <YoursTrulyWordmark />
        </div>

        {/* ── Centre: headline + spinner ── */}
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-6 px-16">
          <div className="space-y-2">
            <p className="text-7xl font-extrabold leading-none text-white">Life Is Short</p>
            <p className="text-7xl font-extrabold leading-none italic text-white/85">
              Make It Sweet
            </p>
          </div>

          <p className="max-w-md text-lg text-white/70">
            Join YoursTruly, where your story lives on
          </p>

          {/* Progress bar */}
          <div className="mt-2 h-1.5 w-72 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-white transition-all duration-75 ease-linear"
              style={{width: `${progress}%`}}
            />
          </div>

          <div className="flex items-center gap-3">
            <Spinner className="text-white" size="sm" />
            <span className="text-sm text-white/70">Setting up your space…</span>
          </div>
        </div>

        {/* ── Bottom: social proof ── */}
        <div className="absolute bottom-10 left-10 flex items-center gap-3">
          <div className="flex -space-x-2">
            {socialProofAvatars.map((src, i) => (
              <Avatar key={i} className="size-8 ring-2 ring-amber-400">
                <Avatar.Image alt={`User ${i + 1}`} src={src} />
                <Avatar.Fallback className="text-xs">U</Avatar.Fallback>
              </Avatar>
            ))}
            <div className="flex size-8 items-center justify-center rounded-full bg-amber-600 ring-2 ring-amber-400">
              <span className="text-[10px] font-bold text-white">+4</span>
            </div>
          </div>
          <span className="text-sm text-white/80">Join 70,000+ users</span>
        </div>
      </div>
    </div>
  );
}
