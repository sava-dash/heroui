"use client";

import {ChevronRight} from "@gravity-ui/icons";
import {Button} from "@heroui/react";
import React from "react";

// ─── YoursTruly logo (large variant used on the onboarding screen) ────────────

function YoursTrulyLogo() {
  return (
    <div className="flex flex-col items-center leading-tight select-none">
      {/* Decorative amber accent ring */}
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-400 shadow-lg shadow-amber-200">
        <span className="text-4xl font-black italic text-white">YT</span>
      </div>
      <span className="text-2xl font-black tracking-tight text-foreground">YOURS</span>
      <span className="text-2xl font-light italic text-foreground/70">Truly</span>
    </div>
  );
}

// ─── Decorative background blobs ─────────────────────────────────────────────

function BackgroundBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Top-left amber blob */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />
      {/* Bottom-right amber blob */}
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />
      {/* Centre-top purple hint */}
      <div className="absolute -top-12 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-purple-100/40 blur-3xl" />
    </div>
  );
}

// ─── Step indicators ─────────────────────────────────────────────────────────

function StepIndicators({total, current}: {total: number; current: number}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({length: total}).map((_, i) => (
        <div
          key={i}
          className={[
            "h-1.5 rounded-full transition-all duration-300",
            i === current ? "w-8 bg-amber-400" : "w-1.5 bg-foreground/15",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

// ─── Onboarding screen ────────────────────────────────────────────────────────

export type OnboardingScreenProps = {
  /** Called when the user taps "Get Started". */
  onStart?: () => void;
};

export function OnboardingScreen({onStart}: OnboardingScreenProps) {
  return (
    <div className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden rounded-2xl bg-background">
      <BackgroundBlobs />

      {/* Main centred card */}
      <div className="relative z-10 flex w-full max-w-xl flex-col items-center gap-10 px-8 py-12">

        {/* Logo */}
        <YoursTrulyLogo />

        {/* Welcome copy */}
        <div className="text-center">
          <h1 className="mb-3 text-4xl font-extrabold leading-tight text-foreground">
            Welcome to <br />
            <span className="italic text-amber-400">YoursTruly</span>
          </h1>
          <p className="mx-auto max-w-sm text-base leading-relaxed text-muted">
            Your personal life canvas is ready. Start documenting what matters — memories,
            goals, connections, and the little moments that make you, <em>you</em>.
          </p>
        </div>

        {/* Feature highlights */}
        <ul className="flex w-full flex-col gap-3">
          {[
            {emoji: "🌟", text: "Earn XP by completing life milestones"},
            {emoji: "🤖", text: "Let AI help you capture and organise your story"},
            {emoji: "🤝", text: "Connect and share moments with loved ones"},
          ].map(({emoji, text}) => (
            <li
              key={text}
              className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-sm"
            >
              <span className="text-xl">{emoji}</span>
              <span className="text-sm text-foreground/80">{text}</span>
            </li>
          ))}
        </ul>

        {/* Step indicators */}
        <StepIndicators current={0} total={3} />

        {/* CTA */}
        <Button
          className="w-full max-w-xs gap-2"
          size="lg"
          variant="primary"
          onPress={onStart}
        >
          Get Started
          <ChevronRight className="size-5" />
        </Button>

        {/* Skip / log in */}
        <p className="text-xs text-muted">
          Already have an account?{" "}
          <button className="font-medium text-accent hover:underline">Log In</button>
        </p>
      </div>
    </div>
  );
}
