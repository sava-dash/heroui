"use client";

import {Button, Input, Label, Separator, TextArea, TextField} from "@heroui/react";
import React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Step = 1 | 2 | 3 | 4 | 5 | 6;

const TOTAL_STEPS = 6;

// ─── Inline SVG icons ─────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg
      fill="none"
      height="12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      width="12"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      fill="none"
      height="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      fill="none"
      height="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      fill="none"
      height="13"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width="13"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      fill="none"
      height="14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width="14"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}

// ─── Step Indicator ───────────────────────────────────────────────────────────

function StepIndicator({current, total}: {current: number; total: number}) {
  return (
    <div className="flex items-center justify-center gap-1 py-6">
      {Array.from({length: total}, (_, i) => {
        const n = i + 1;
        const done = n < current;
        const active = n === current;

        return (
          <React.Fragment key={n}>
            <div
              aria-current={active ? "step" : undefined}
              aria-label={done ? `Step ${n}, completed` : `Step ${n}${active ? ", current" : ""}`}
              className={
                "flex size-7 items-center justify-center rounded-full text-xs font-medium transition-all " +
                (done
                  ? "bg-[#52325d] text-white"
                  : active
                    ? "text-[#52325d] ring-2 ring-[#52325d]"
                    : "text-[#a1a1aa] ring-1 ring-[#d4d4d8]")
              }
            >
              {done ? <CheckIcon /> : n}
            </div>
            {n < total && (
              <div className={"h-px w-5 " + (n < current ? "bg-[#52325d]/40" : "bg-[#d4d4d8]")} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─── Info Card (left column) ──────────────────────────────────────────────────

interface InfoCardProps {
  category: string;
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  whyMatters: string;
}

function InfoCard({category, description, icon, iconBg, title, whyMatters}: InfoCardProps) {
  return (
    <div className="flex w-full flex-col gap-5 rounded-[20px] bg-gradient-to-b from-white/90 to-white/50 p-8 shadow-[0_8px_40px_rgba(82,50,93,0.08)] backdrop-blur-sm">
      {/* Category + Icon */}
      <div className="flex items-start gap-3">
        <div
          className={
            "flex size-12 shrink-0 items-center justify-center rounded-[14px] text-xl " + iconBg
          }
        >
          {icon}
        </div>
        <div className="flex flex-col gap-0.5 pt-1">
          <p className="text-[11px] font-semibold tracking-widest text-[#52325d]">{category}</p>
          <h2 className="text-lg leading-snug font-bold text-foreground">{title}</h2>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-foreground/70">{description}</p>

      {/* Why This Matters box */}
      <div className="rounded-[14px] bg-surface-secondary px-4 py-3">
        <p className="mb-1 text-[10px] font-semibold tracking-wider text-foreground/50">
          WHY THIS MATTERS
        </p>
        <p className="text-xs leading-relaxed text-foreground/60">{whyMatters}</p>
      </div>

      {/* Privacy footer */}
      <div className="flex items-center gap-1.5 text-[11px] text-[#a1a1aa]">
        <ShieldIcon />
        <span>Your data is private and secure. You control who sees your story.</span>
      </div>
    </div>
  );
}

// ─── Toggle Chip ──────────────────────────────────────────────────────────────

function ToggleChip({
  emoji,
  label,
  onToggle,
  selected,
}: {
  label: string;
  emoji?: string;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      aria-pressed={selected}
      type="button"
      className={
        "flex items-center gap-1.5 rounded-full border-2 px-3 py-1.5 text-sm transition-all " +
        (selected
          ? "border-[#52325d] bg-[#52325d]/10 font-medium text-[#52325d]"
          : "border-[#d4d4d8] bg-[#f4f4f5] text-foreground/70 hover:border-[#52325d]/40")
      }
      onClick={onToggle}
    >
      {!!emoji && <span aria-hidden>{emoji}</span>}
      {label}
    </button>
  );
}

// ─── Radio Card (journey options) ─────────────────────────────────────────────

function RadioCard({
  emoji,
  label,
  onSelect,
  selected,
}: {
  emoji: string;
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      aria-pressed={selected}
      type="button"
      className={
        "flex w-full items-center gap-3 rounded-[12px] border-2 px-4 py-3 text-left text-sm transition-all " +
        (selected
          ? "border-[#52325d] bg-[#52325d]/8 text-foreground"
          : "border-[#e4e4e7] bg-[#f4f4f5] text-foreground/70 hover:border-[#52325d]/40")
      }
      onClick={onSelect}
    >
      <span aria-hidden className="shrink-0 text-lg">
        {emoji}
      </span>
      <span className="flex-1">{label}</span>
      {!!selected && (
        <span className="ml-auto text-[#52325d]">
          <CheckIcon />
        </span>
      )}
    </button>
  );
}

// ─── Shared layout wrapper ────────────────────────────────────────────────────

function StepLayout({children, wide = false}: {children: React.ReactNode; wide?: boolean}) {
  return (
    <div className="flex h-full w-full justify-center overflow-y-auto px-4 pb-6 md:px-6 md:pb-10">
      <div
        className={
          "w-full self-start py-4 md:self-center md:py-0 " +
          (wide ? "max-w-[1000px]" : "max-w-[860px]")
        }
      >
        {children}
      </div>
    </div>
  );
}

// ─── Step 1: Your Roots ───────────────────────────────────────────────────────

function StepYourRoots({onNext}: {onNext: () => void}) {
  const [month, setMonth] = React.useState("");
  const [day, setDay] = React.useState("");
  const [year, setYear] = React.useState("");
  const [birthplace, setBirthplace] = React.useState("");

  return (
    <StepLayout>
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        {/* Left: Info card */}
        <div className="md:w-[300px] md:shrink-0">
          <InfoCard
            category="YOUR ROOTS"
            description="The places we've lived become part of our story. They hold memories of who we were and how we've grown over time."
            icon="📍"
            iconBg="bg-[#f4f4f5]"
            title="Where You Call Home"
            whyMatters="This contextualizes your memories geographically and helps family members understand the settings that shaped your life."
          />
        </div>

        {/* Right: Form */}
        <div className="flex flex-1 flex-col gap-8 rounded-[20px] bg-gradient-to-b from-white/90 to-white/50 p-8 shadow-[0_8px_40px_rgba(82,50,93,0.12)] backdrop-blur-sm">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <span aria-label="Location pin" className="text-2xl" role="img">
              📍
            </span>
            <h1 className="text-[28px] leading-tight font-medium text-foreground">
              Where did your story begin, A?
            </h1>
            <p className="text-sm text-[#71717a]">
              Your birthday and birthplace help us personalize your journey.
            </p>
          </div>

          {/* Form fields */}
          <div className="flex flex-col gap-5">
            {/* Birthday */}
            <div className="flex flex-col gap-3">
              <Label className="text-xs font-semibold tracking-wider text-[#52525b] uppercase">
                Birthday
              </Label>
              <div className="flex gap-2">
                {/* Month select */}
                <div className="relative flex-1">
                  <select
                    aria-label="Month"
                    className="w-full appearance-none rounded-[12px] border-2 border-[#e4e4e7] bg-[#f4f4f5] px-3 py-2.5 text-sm shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] focus:border-[#52325d] focus:outline-none"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option value="">Month</option>
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Day */}
                <TextField className="w-[80px] gap-2" name="day">
                  <Input
                    aria-label="Day"
                    className="rounded-[12px] bg-[#f4f4f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                    placeholder="Day"
                    style={{borderColor: "#e4e4e7", borderWidth: "2px"}}
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  />
                </TextField>
                {/* Year */}
                <TextField className="w-[90px] gap-2" name="year">
                  <Input
                    aria-label="Year"
                    className="rounded-[12px] bg-[#f4f4f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                    placeholder="Year"
                    style={{borderColor: "#e4e4e7", borderWidth: "2px"}}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </TextField>
              </div>
            </div>

            {/* Birthplace */}
            <TextField className="gap-3" name="birthplace">
              <Label className="text-xs font-semibold tracking-wider text-[#52525b] uppercase">
                Birthplace
              </Label>
              <Input
                fullWidth
                className="rounded-[12px] bg-[#f4f4f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                placeholder="e.g. Brooklyn, NY"
                style={{borderColor: "#e4e4e7", borderWidth: "2px"}}
                value={birthplace}
                onChange={(e) => setBirthplace(e.target.value)}
              />
            </TextField>
          </div>

          {/* CTA */}
          <Button
            className="h-12 w-full rounded-[12px] text-base"
            type="button"
            variant="primary"
            onPress={onNext}
          >
            Next
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      {/* Skip */}
      <div className="mt-6 text-center">
        <button
          className="text-sm text-[#a1a1aa] transition-colors hover:text-foreground/60"
          type="button"
          onClick={onNext}
        >
          Skip setup
        </button>
      </div>
    </StepLayout>
  );
}

// ─── Step 2: Your Passions ────────────────────────────────────────────────────

const INTERESTS = [
  {emoji: "👨‍👩‍👦", label: "Family"},
  {emoji: "✈️", label: "Travel"},
  {emoji: "🎵", label: "Music"},
  {emoji: "🍳", label: "Cooking"},
  {emoji: "💪", label: "Fitness"},
  {emoji: "📚", label: "Reading"},
  {emoji: "🌿", label: "Nature"},
  {emoji: "🎨", label: "Art"},
  {emoji: "💻", label: "Technology"},
  {emoji: "🙏", label: "Spirituality"},
  {emoji: "📷", label: "Photography"},
  {emoji: "🌱", label: "Gardening"},
  {emoji: "⚽", label: "Sports"},
  {emoji: "🎬", label: "Movies & TV"},
  {emoji: "✍️", label: "Writing"},
  {emoji: "👗", label: "Fashion"},
  {emoji: "🔧", label: "DIY & Crafts"},
  {emoji: "🐾", label: "Animals & Pets"},
  {emoji: "🤝", label: "Volunteering"},
  {emoji: "📜", label: "History"},
  {emoji: "🔬", label: "Science"},
  {emoji: "🎮", label: "Gaming"},
  {emoji: "💃", label: "Dancing"},
  {emoji: "🍷", label: "Food & Wine"},
];

const TRAITS = [
  {emoji: "🏔️", label: "Adventurous"},
  {emoji: "✨", label: "Creative"},
  {emoji: "💛", label: "Empathetic"},
  {emoji: "☀️", label: "Optimistic"},
  {emoji: "🔍", label: "Curious"},
  {emoji: "🤝", label: "Loyal"},
  {emoji: "😄", label: "Humorous"},
  {emoji: "😌", label: "Calm"},
  {emoji: "🚀", label: "Driven"},
  {emoji: "🌸", label: "Nurturing"},
  {emoji: "💪", label: "Independent"},
  {emoji: "🔮", label: "Reflective"},
  {emoji: "📊", label: "Analytical"},
  {emoji: "⚡", label: "Spontaneous"},
  {emoji: "🌳", label: "Resilient"},
  {emoji: "⌛", label: "Patient"},
  {emoji: "🔥", label: "Ambitious"},
  {emoji: "💖", label: "Passionate"},
  {emoji: "🧩", label: "Pragmatic"},
  {emoji: "🌙", label: "Thoughtful"},
  {emoji: "🌟", label: "Extroverted"},
  {emoji: "📚", label: "Introverted"},
];

function StepPassions({onBack, onNext}: {onBack: () => void; onNext: () => void}) {
  const [selectedInterests, setSelectedInterests] = React.useState<Set<string>>(new Set());
  const [selectedTraits, setSelectedTraits] = React.useState<Set<string>>(new Set());
  const [customInterest, setCustomInterest] = React.useState("");
  const [customTrait, setCustomTrait] = React.useState("");

  function toggleInterest(label: string) {
    setSelectedInterests((prev) => {
      const next = new Set(prev);

      if (next.has(label)) next.delete(label);
      else next.add(label);

      return next;
    });
  }

  function toggleTrait(label: string) {
    setSelectedTraits((prev) => {
      const next = new Set(prev);

      if (next.has(label)) next.delete(label);
      else next.add(label);

      return next;
    });
  }

  return (
    <StepLayout wide>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
        {/* Left: Info card */}
        <div className="lg:w-[260px] lg:shrink-0">
          <InfoCard
            category="YOUR PASSIONS"
            description="The things that spark your curiosity reveal the truest parts of you. Your interests guide the memories you'll want to preserve and the stories worth telling."
            icon="💛"
            iconBg="bg-amber-100"
            title="What Captivates You"
            whyMatters="We use this to suggest relevant prompts, connect you with similar family members, and curate content that truly resonates with you."
          />
        </div>

        {/* Right: Two sections */}
        <div className="flex flex-1 flex-col gap-6">
          {/* Interests */}
          <div className="flex flex-col gap-4 rounded-[20px] bg-gradient-to-b from-white/90 to-white/50 p-6 shadow-[0_8px_40px_rgba(82,50,93,0.08)] backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#52325d]" />
              <p className="text-xs font-semibold tracking-wider text-foreground/60 uppercase">
                Your Interests
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map(({emoji, label}) => (
                <ToggleChip
                  key={label}
                  emoji={emoji}
                  label={label}
                  selected={selectedInterests.has(label)}
                  onToggle={() => toggleInterest(label)}
                />
              ))}
            </div>
            <div className="mt-1 flex items-center gap-2">
              <input
                className="flex-1 rounded-full border-2 border-dashed border-[#d4d4d8] bg-transparent px-3 py-1.5 text-sm text-foreground/50 placeholder:text-foreground/30 focus:border-[#52325d]/40 focus:outline-none"
                placeholder="Add your own..."
                value={customInterest}
                onChange={(e) => setCustomInterest(e.target.value)}
              />
              {!!customInterest && (
                <button
                  className="text-xs font-medium text-[#52325d] hover:underline"
                  type="button"
                  onClick={() => {
                    if (customInterest.trim()) {
                      toggleInterest(customInterest.trim());
                      setCustomInterest("");
                    }
                  }}
                >
                  + Add
                </button>
              )}
            </div>
          </div>

          {/* Personality Traits */}
          <div className="flex flex-col gap-4 rounded-[20px] bg-gradient-to-b from-white/90 to-white/50 p-6 shadow-[0_8px_40px_rgba(82,50,93,0.08)] backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#52325d]" />
              <p className="text-xs font-semibold tracking-wider text-foreground/60 uppercase">
                Who You Are
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {TRAITS.map(({emoji, label}) => (
                <ToggleChip
                  key={label}
                  emoji={emoji}
                  label={label}
                  selected={selectedTraits.has(label)}
                  onToggle={() => toggleTrait(label)}
                />
              ))}
            </div>
            <div className="mt-1 flex items-center gap-2">
              <input
                className="flex-1 rounded-full border-2 border-dashed border-[#d4d4d8] bg-transparent px-3 py-1.5 text-sm text-foreground/50 placeholder:text-foreground/30 focus:border-[#52325d]/40 focus:outline-none"
                placeholder="Describe yourself..."
                value={customTrait}
                onChange={(e) => setCustomTrait(e.target.value)}
              />
              {!!customTrait && (
                <button
                  className="text-xs font-medium text-[#52325d] hover:underline"
                  type="button"
                  onClick={() => {
                    if (customTrait.trim()) {
                      toggleTrait(customTrait.trim());
                      setCustomTrait("");
                    }
                  }}
                >
                  + Add
                </button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <Button
              className="h-10 rounded-[12px]"
              type="button"
              variant="outline"
              onPress={onBack}
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              className="h-10 flex-1 rounded-[12px] text-sm"
              type="button"
              variant="primary"
              onPress={onNext}
            >
              Continue
              <ArrowRightIcon />
            </Button>
          </div>
          <button
            className="text-center text-sm text-[#a1a1aa] transition-colors hover:text-foreground/60"
            type="button"
            onClick={onNext}
          >
            Skip for now
          </button>
        </div>
      </div>
    </StepLayout>
  );
}

// ─── Step 3: Your Beliefs ─────────────────────────────────────────────────────

const BELIEFS = [
  "Christianity",
  "Islam",
  "Judaism",
  "Hinduism",
  "Buddhism",
  "Sikhism",
  "Spiritual but not religious",
  "Agnostic",
  "Atheist",
  "Other",
  "Prefer not to say",
];

function StepBeliefs({onBack, onNext}: {onBack: () => void; onNext: () => void}) {
  const [selected, setSelected] = React.useState<Set<string>>(new Set());

  function toggle(belief: string) {
    setSelected((prev) => {
      const next = new Set(prev);

      if (next.has(belief)) next.delete(belief);
      else next.add(belief);

      return next;
    });
  }

  return (
    <StepLayout>
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        {/* Left: Info card */}
        <div className="md:w-[300px] md:shrink-0">
          <InfoCard
            category="FAITH & SPIRITUALITY"
            description="Spirituality often provides the framework for how we understand life's biggest questions. Your beliefs shape your perspective in profound ways."
            icon="🍃"
            iconBg="bg-emerald-100"
            title="Your Beliefs"
            whyMatters="This helps us respectfully personalize prompts around meaning, purpose, and the values you hold most dear."
          />
        </div>

        {/* Right: Form */}
        <div className="flex flex-1 flex-col gap-6 rounded-[20px] bg-gradient-to-b from-white/90 to-white/50 p-8 shadow-[0_8px_40px_rgba(82,50,93,0.12)] backdrop-blur-sm">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl font-medium text-foreground">Faith &amp; belief</h1>
            <p className="text-sm text-[#71717a]">
              This helps us personalize how we explore life's deeper moments with you. Select all
              that apply.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {BELIEFS.map((belief) => (
              <ToggleChip
                key={belief}
                label={belief}
                selected={selected.has(belief)}
                onToggle={() => toggle(belief)}
              />
            ))}
          </div>

          {/* Privacy notice */}
          <div className="flex items-center gap-2 rounded-[12px] bg-surface-secondary px-4 py-2.5 text-xs text-[#71717a]">
            <InfoIcon />
            <span>Your beliefs are private and never shared.</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <Button
              className="h-10 rounded-[12px]"
              type="button"
              variant="outline"
              onPress={onBack}
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              className="h-10 flex-1 rounded-[12px] text-sm"
              type="button"
              variant="primary"
              onPress={onNext}
            >
              Skip for now
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </StepLayout>
  );
}

// ─── Step 4: Your Journey ─────────────────────────────────────────────────────

const JOURNEY_OPTIONS = [
  {emoji: "🧠", label: "I want to reflect on my life experiences and personal growth"},
  {emoji: "💼", label: "I'm reflecting on my career and the lessons I've learned"},
  {emoji: "💙", label: "I want to preserve my parents' stories before they're lost"},
  {emoji: "🔄", label: "I'm at a transitional moment and processing big changes"},
  {emoji: "🌱", label: "I want to create something meaningful for my children"},
  {emoji: "📖", label: "I want to document my life story for future generations"},
];

function StepJourney({onBack, onNext}: {onBack: () => void; onNext: () => void}) {
  const [selected, setSelected] = React.useState<string | null>(null);
  const [ownWords, setOwnWords] = React.useState("");

  return (
    <StepLayout>
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        {/* Left: Info card */}
        <div className="md:w-[300px] md:shrink-0">
          <InfoCard
            category="WHAT BRINGS YOU HERE"
            description="Understanding why you're here helps us support your unique path. Whether you're preserving memories for family or reflecting on your own, your story deserves care."
            icon="📖"
            iconBg="bg-orange-100"
            title="Your Journey"
            whyMatters="This shapes the entire experience—we'll tailor prompts, suggestions, and features to match your specific goals."
          />
        </div>

        {/* Right: Form */}
        <div className="flex flex-1 flex-col gap-5 rounded-[20px] bg-gradient-to-b from-white/90 to-white/50 p-8 shadow-[0_8px_40px_rgba(82,50,93,0.12)] backdrop-blur-sm">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl font-medium text-foreground">What brings you here?</h1>
            <p className="text-sm text-[#71717a]">
              This shapes the first question we ask you — so be as honest as you like.
            </p>
          </div>

          {/* Radio-style cards */}
          <div className="flex flex-col gap-2">
            {JOURNEY_OPTIONS.map(({emoji, label}) => (
              <RadioCard
                key={label}
                emoji={emoji}
                label={label}
                selected={selected === label}
                onSelect={() => setSelected(selected === label ? null : label)}
              />
            ))}
          </div>

          {/* Or in own words */}
          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-[#a1a1aa]">or in your own words</span>
            <Separator className="flex-1" />
          </div>

          <TextArea
            fullWidth
            className="rounded-[12px] bg-[#f4f4f5] text-sm shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
            placeholder="Share what's on your heart..."
            rows={3}
            style={{borderColor: "#e4e4e7", borderWidth: "2px"}}
            value={ownWords}
            onChange={(e) => setOwnWords(e.target.value)}
          />

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <Button
              className="h-10 rounded-[12px]"
              type="button"
              variant="outline"
              onPress={onBack}
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              className="h-10 flex-1 rounded-[12px] text-sm"
              type="button"
              variant="primary"
              onPress={onNext}
            >
              Continue
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </StepLayout>
  );
}

// ─── Step 5: Let's Go Deeper ──────────────────────────────────────────────────

function StepGoDeeper({onNext}: {onNext: () => void}) {
  const [value, setValue] = React.useState("");

  return (
    <StepLayout>
      <div className="flex flex-col items-center">
        <div className="flex w-full max-w-[540px] flex-col gap-6 rounded-[20px] bg-gradient-to-b from-white/90 to-white/50 p-10 shadow-[0_8px_40px_rgba(82,50,93,0.12)] backdrop-blur-sm">
          {/* Icon */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-[#52325d] text-2xl">
              💚
            </div>
            <div className="flex flex-col gap-1.5">
              <h1 className="text-2xl font-medium text-foreground">Let's Go Deeper</h1>
              <p className="text-sm text-[#71717a]">
                Share what's on your mind — we'll capture the moments that matter
              </p>
            </div>
          </div>

          {/* Prompt card */}
          <div className="rounded-[14px] border-2 border-[#e4e4e7] bg-white px-4 py-3 text-sm leading-relaxed text-foreground/80">
            A, what's a moment in your life that really shaped who you are today?
          </div>

          {/* Input + actions */}
          <div className="flex flex-col gap-2">
            <div className="relative flex items-end gap-2">
              <TextArea
                fullWidth
                className="flex-1 rounded-[12px] bg-[#f4f4f5] text-sm shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                placeholder="Share your thoughts..."
                rows={3}
                style={{borderColor: "#e4e4e7", borderWidth: "2px"}}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            {/* Action row */}
            <div className="flex justify-end gap-2">
              <button
                aria-label="Listen"
                className="flex size-9 items-center justify-center rounded-[10px] border-2 border-[#e4e4e7] bg-[#f4f4f5] text-[#a1a1aa] transition-colors hover:border-[#52325d]/40"
                type="button"
              >
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              </button>
              <button
                aria-label="Dictate"
                className="flex size-9 items-center justify-center rounded-[10px] border-2 border-[#e4e4e7] bg-[#f4f4f5] text-[#a1a1aa] transition-colors hover:border-[#52325d]/40"
                type="button"
              >
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" x2="12" y1="19" y2="23" />
                  <line x1="8" x2="16" y1="23" y2="23" />
                </svg>
              </button>
              <button
                aria-label="Send"
                className="flex size-9 items-center justify-center rounded-[10px] bg-[#52325d] text-white transition-opacity hover:opacity-90"
                type="button"
                onClick={onNext}
              >
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <line x1="22" x2="11" y1="2" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>

          <button
            className="text-center text-sm text-[#a1a1aa] transition-colors hover:text-foreground/60"
            type="button"
            onClick={onNext}
          >
            Skip for now
          </button>
        </div>
      </div>
    </StepLayout>
  );
}

// ─── Step 6: You're All Set ───────────────────────────────────────────────────

function StepComplete({onComplete}: {onComplete?: () => void}) {
  return (
    <StepLayout>
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full max-w-[480px] flex-col items-center gap-8 rounded-[20px] bg-gradient-to-b from-white/90 to-white/50 p-12 text-center shadow-[0_8px_40px_rgba(82,50,93,0.12)] backdrop-blur-sm">
          {/* Success icon */}
          <div className="relative flex size-20 items-center justify-center rounded-full bg-[#52325d]/10">
            <div className="flex size-16 items-center justify-center rounded-full bg-[#52325d] text-white shadow-[0_4px_20px_rgba(82,50,93,0.35)]">
              <svg
                fill="none"
                height="28"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                width="28"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[32px] leading-tight font-medium text-foreground">
              You're all set, A!
            </h1>
            <p className="text-base leading-relaxed text-[#71717a]">
              Your story from Roma, Rome, Italy is just beginning. Let's make it unforgettable.
            </p>
          </div>

          {/* CTA */}
          <Button
            className="h-12 w-full rounded-full px-8 text-base"
            type="button"
            variant="primary"
            onPress={onComplete}
          >
            Enter YoursTruly
            <span aria-hidden className="ml-1">
              ✦
            </span>
          </Button>
        </div>
      </div>
    </StepLayout>
  );
}

// ─── Onboarding Screen (main) ─────────────────────────────────────────────────

export type OnboardingScreenProps = {
  /** Called when the user completes onboarding and enters the app. */
  onStart?: () => void;
};

export function OnboardingScreen({onStart}: OnboardingScreenProps) {
  const [step, setStep] = React.useState<Step>(1);

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS) as Step);
  const back = () => setStep((s) => Math.max(s - 1, 1) as Step);

  return (
    <div
      className="flex h-screen min-h-[600px] w-full flex-col overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(254,252,232,0.6) 23.558%, rgba(173,143,185,0.6) 100%), linear-gradient(90deg, rgb(254,252,232) 0%, rgb(254,252,232) 100%)",
      }}
    >
      {/* Step indicator — always visible at top */}
      <StepIndicator current={step} total={TOTAL_STEPS} />

      {/* Content area — fills remaining height */}
      <div className="flex flex-1 overflow-hidden">
        {step === 1 && <StepYourRoots onNext={next} />}
        {step === 2 && <StepPassions onBack={back} onNext={next} />}
        {step === 3 && <StepBeliefs onBack={back} onNext={next} />}
        {step === 4 && <StepJourney onBack={back} onNext={next} />}
        {step === 5 && <StepGoDeeper onNext={next} />}
        {step === 6 && <StepComplete onComplete={onStart} />}
      </div>
    </div>
  );
}
