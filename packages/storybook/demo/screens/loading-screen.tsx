"use client";

import {Spinner} from "@heroui/react";
import React from "react";

// ─── Figma MCP assets ────────────────────────────────────────────────────────

const imgAvatar = "http://localhost:3845/assets/095bc2e03ae9d702f43979f556ba177f06f36acc.svg";
const imgAvatar1 = "http://localhost:3845/assets/047a2cc5c6c0ff74ebedb51a91f426c7a2211fa7.svg";
const imgAvatar2 = "http://localhost:3845/assets/4a46fc2bbdad419120ea80a8569097deda9779f2.svg";
const imgAvatar3 = "http://localhost:3845/assets/f895ec61f5c181536afa36d60e9db1f745dc8a10.svg";

const socialAvatars = [imgAvatar, imgAvatar1, imgAvatar2, imgAvatar3];

// Corner decoration images
const cornerImages = [
  {
    className: "absolute -top-4 -right-4 w-40 h-28 rounded-2xl rotate-6",
    src: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg",
  },
  {
    className: "absolute top-10 right-24 w-28 h-20 rounded-2xl -rotate-3",
    src: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg",
  },
];

// ─── Loading Screen ───────────────────────────────────────────────────────────

export type LoadingScreenProps = {
  /** Called after auto-advance timer fires (≈ 2.4 s). Hook for flow navigation. */
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
    /* Outer wrapper is transparent — page gradient from App.tsx shows in the 24 px gap */
    <div className="flex h-screen min-h-[600px] w-full items-center justify-center p-6">
      {/* Full-bleed card: deep purple (#52325d) — matches new brand accent */}
      <div className="relative flex h-full w-full overflow-hidden rounded-3xl bg-[#52325d]">
        {/* Background large watermark letter */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden select-none"
        >
          <span className="translate-x-1/4 text-[28rem] leading-none font-black tracking-tighter text-white/[0.06]">
            YT
          </span>
        </div>

        {/* Top-right corner: overlapping photo clips */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-4 right-0 h-40 w-48 overflow-visible select-none"
        >
          {cornerImages.map((img, i) => (
            <img
              key={i}
              alt=""
              className={`${img.className} object-cover opacity-90 shadow-xl`}
              src={img.src}
            />
          ))}
        </div>

        {/* Top-left wordmark */}
        <div className="absolute top-10 left-10 flex flex-col leading-tight select-none">
          <span className="text-base font-bold tracking-tight text-white">YOURS</span>
          <span className="text-base font-light text-white/80 italic">Truly</span>
        </div>

        {/* Centre: headline + progress */}
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-6 px-8 md:px-16">
          <div className="space-y-2">
            <p className="text-4xl leading-none font-extrabold text-white sm:text-5xl md:text-7xl">
              Life Is Short
            </p>
            <p
              className="text-4xl leading-none text-white/85 sm:text-5xl md:text-7xl"
              style={{fontFamily: "var(--font-script)"}}
            >
              Make It Sweet
            </p>
          </div>

          <p className="max-w-md text-base text-white/70 md:text-lg">
            Join YoursTruly, where your story lives on
          </p>

          {/* Progress bar */}
          <div className="mt-2 h-1.5 w-full max-w-[288px] overflow-hidden rounded-full bg-white/20">
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

        {/* Bottom: social proof */}
        <div className="absolute bottom-6 left-6 flex items-center gap-3 md:bottom-10 md:left-10">
          <div className="flex -space-x-2">
            {socialAvatars.map((src, i) => (
              <div key={i} className="size-8 overflow-hidden rounded-full ring-2 ring-[#52325d]">
                <img
                  alt={`Community member ${i + 1}`}
                  className="h-full w-full object-cover"
                  src={src}
                />
              </div>
            ))}
            <div className="flex size-8 items-center justify-center rounded-full bg-[#3b1f44] text-[10px] font-bold text-white ring-2 ring-[#52325d]">
              +4
            </div>
          </div>
          <span className="text-sm text-white/80">Join 70,000+ users</span>
        </div>
      </div>
    </div>
  );
}
