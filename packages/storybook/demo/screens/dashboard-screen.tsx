"use client";

import React from "react";

// ─── Figma MCP Assets (node 6464:237138) ─────────────────────────────────────

// Logo — 2-layer composition (Figma nodes I6464:237140)
const imgLogoTop = "http://localhost:3845/assets/259fd0b6436c1804a56e848bd02a52a481c93df9.svg";
const imgLogoScript = "http://localhost:3845/assets/c958b989dfaf7dd1419877fc9546c3197e00ac69.svg";

// Top nav icons (16×16)
const imgNavHome = "http://localhost:3845/assets/d4ce978fd5ccd34f161c3ae4f5e4d8b545b6ae8a.svg";
const imgNavMyself = "http://localhost:3845/assets/7e3a5b4532d982eb64c5499b44d948c97fe6b887.svg";
const imgNavLifetime = "http://localhost:3845/assets/e9e961f36e0c8eee736d93c48c178d2e5d758e62.svg";
const imgNavBucketList =
  "http://localhost:3845/assets/abcdee3d6ddf0ac7801afa4de54a6ebc8586c043.svg";
const imgNavUpgradeArrow =
  "http://localhost:3845/assets/b6b619254f531ffcb9938105b04debc8d7d08956.svg";

// Content
const imgPortrait = "http://localhost:3845/assets/c10a50e47f38075dfbf4a32e609a270b7bea016c.png";
const imgJuniorGarcia = "http://localhost:3845/assets/6f23eab72541f5d36f4a4c2e593cd57d43a38757.png";
const imgSparkle = "http://localhost:3845/assets/6b86fc14d82734e84edb2204e8ae8ee3cf1df703.svg";

// Quick action icons (from Figma quick-action-btn nodes 6464:237226–237230)
const imgIconShuffle = "http://localhost:3845/assets/c8fcc03a18fa40d4d49de0f8964b644fcdaa7436.svg";
const imgIconAddPhotos =
  "http://localhost:3845/assets/0399914035e0b16ad2c42d9bd14013937d4ffb64.svg";
const imgIconPostScript =
  "http://localhost:3845/assets/4fd090e974543efa51bf454dd70a9c2a83db8381.svg";
const imgIconAddContact =
  "http://localhost:3845/assets/802e56c6ca815a629071b478febed44f8af7c1d4.svg";
const imgIconQuickMemory =
  "http://localhost:3845/assets/e058b1d1eb770134226e31b14880dbf21fd73b5b.svg";

// AI bar
const imgSendBtn = "http://localhost:3845/assets/73b13c86027b65b71966c966bb1690c84c94fb2a.svg";

// ─── Logo component ───────────────────────────────────────────────────────────

function YoursTrulyLogo() {
  return (
    <div aria-label="YoursTruly" className="relative h-8 w-[58px] shrink-0 select-none">
      {/* YOURS part */}
      <div className="absolute" style={{inset: "0 12.08% 69.03% 10.89%"}}>
        <img alt="" className="absolute block size-full max-w-none" src={imgLogoTop} />
      </div>
      {/* Truly script */}
      <div className="absolute" style={{inset: "32.04% 5.79% 0 4.58%"}}>
        <img alt="" className="absolute block size-full max-w-none" src={imgLogoScript} />
      </div>
    </div>
  );
}

// ─── Memory prompt card ───────────────────────────────────────────────────────

type MemoryCardProps = {
  text: string;
  showArrow?: boolean;
  isPhotoStory?: boolean;
};

function MemoryCard({isPhotoStory = false, showArrow = false, text}: MemoryCardProps) {
  return (
    <div
      className="relative flex h-full flex-col overflow-hidden rounded-2xl p-1"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.24) 100%)",
      }}
    >
      <div className="flex flex-1 flex-col gap-4 p-3">
        {/* Header: chip + XP */}
        <div className="flex items-center justify-between">
          <span
            className="flex h-7 items-center rounded-full px-2 text-sm"
            style={
              isPhotoStory
                ? {background: "rgba(0,111,238,0.2)", color: "#006fee"}
                : {background: "rgba(82,50,93,0.2)", color: "#52325d"}
            }
          >
            {isPhotoStory ? "Photo Story" : "Memory"}
          </span>
          <div className="flex items-center gap-0.5 text-sm font-medium text-[#27272a]">
            <img alt="" className="size-5" src={imgSparkle} />
            <span>{isPhotoStory ? "100 XP" : "+20"}</span>
          </div>
        </div>

        {/* Portrait image (Photo Story only) */}
        {!!isPhotoStory && (
          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{aspectRatio: "295/165"}}
          >
            <img
              alt="Story cover"
              className="absolute inset-0 size-full max-w-none object-cover"
              src={imgPortrait}
            />
          </div>
        )}

        {/* Text */}
        <div className="text-sm font-medium text-[#27272a]">{text}</div>
      </div>

      {/* Arrow button (card 3 hover state) */}
      {!!showArrow && (
        <div className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-[#52325d] shadow-lg">
          <svg
            className="size-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      )}
    </div>
  );
}

// ─── Quick action button ──────────────────────────────────────────────────────

type QuickActionProps = {
  label: string;
  iconSrc: string;
};

function QuickAction({iconSrc, label}: QuickActionProps) {
  return (
    <button className="flex flex-1 flex-col items-center justify-center gap-1 rounded-lg border border-[rgba(74,53,82,0.2)] bg-transparent px-[5px] py-[9px] transition-all hover:bg-white/60">
      <div className="flex size-5 items-center justify-center">
        <img alt={label} className="size-full" src={iconSrc} />
      </div>
      <span className="text-center text-sm text-[#27272a]">{label}</span>
    </button>
  );
}

// ─── Main dashboard screen ────────────────────────────────────────────────────

export function DashboardScreen() {
  return (
    /* Outer container: neutral light gray per Figma default-100 */
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#f4f4f5]">
      {/* ══ TOP NAVIGATION ══════════════════════════════════════════════════ */}
      <nav className="flex shrink-0 items-center gap-5 px-6 py-4">
        <YoursTrulyLogo />

        {/* Nav tabs */}
        <div className="hidden flex-1 items-center gap-1 overflow-x-auto md:flex">
          {/* Home (inactive) */}
          <div className="flex cursor-pointer items-center gap-2 rounded-[14px] px-3 py-1 transition-colors hover:bg-white/50">
            <img alt="" className="size-4 shrink-0 opacity-60" src={imgNavHome} />
            <span className="text-base whitespace-nowrap text-[#71717a]">Home</span>
          </div>
          {/* Myself (active) */}
          <div className="flex cursor-pointer items-center gap-2 rounded-[12px] bg-white px-3 py-1 shadow-sm">
            <img alt="" className="size-4 shrink-0" src={imgNavMyself} />
            <span className="text-base whitespace-nowrap text-[#0f0f14]">Myself</span>
          </div>
          {/* Lifetime */}
          <div className="flex cursor-pointer items-center gap-2 rounded-[14px] px-3 py-1 transition-colors hover:bg-white/50">
            <img alt="" className="size-4 shrink-0 opacity-60" src={imgNavLifetime} />
            <span className="text-base whitespace-nowrap text-[#71717a]">Lifetime</span>
          </div>
          {/* Bucket List */}
          <div className="flex cursor-pointer items-center gap-2 rounded-[14px] px-3 py-1 transition-colors hover:bg-white/50">
            <img alt="" className="size-4 shrink-0 opacity-60" src={imgNavBucketList} />
            <span className="text-base whitespace-nowrap text-[#71717a]">Bucket List</span>
          </div>
        </div>

        {/* Spacer on mobile */}
        <div className="flex-1 md:hidden" />

        {/* Upgrade button — outlined per Figma border-2 border-[#52325d] */}
        <button className="flex h-8 cursor-pointer items-center gap-2 rounded-[12px] border-2 border-[#52325d] px-3 transition-all hover:bg-[rgba(82,50,93,0.06)]">
          <span className="hidden text-xs font-medium text-[#52325d] sm:inline">Upgrade</span>
          <img alt="Upgrade" className="size-5 shrink-0" src={imgNavUpgradeArrow} />
        </button>

        {/* User info */}
        <div className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-[rgba(17,17,17,0.15)] pr-2 transition-all hover:bg-white/50 md:pr-3">
          <div className="size-8 shrink-0 overflow-hidden rounded-lg bg-[#d4d4d8]">
            <img alt="Junior Garcia" className="size-full object-cover" src={imgJuniorGarcia} />
          </div>
          <span className="hidden text-sm text-[#11181c] sm:inline">Junior Garcia</span>
          {/* Up/down caret */}
          <svg
            className="size-3 shrink-0 text-[#71717a]"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 3 18 9" />
            <polyline points="6 15 12 21 18 15" />
          </svg>
        </div>
      </nav>

      {/* ══ MAIN CONTENT (gradient background) ══════════════════════════════ */}
      <div
        className="flex min-h-0 flex-1 flex-col gap-6 overflow-auto rounded-3xl p-4 md:flex-row md:overflow-hidden md:p-6"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(254,252,232,0.6) 23.558%, rgba(173,143,185,0.6) 100%), linear-gradient(90deg, rgb(254,252,232) 0%, rgb(254,252,232) 100%)",
        }}
      >
        {/* ── Left sidebar ────────────────────────────────────────────────── */}
        <aside className="hidden h-full w-[320px] shrink-0 flex-col gap-4 md:flex">
          {/* Greeting card */}
          <div
            className="flex shrink-0 flex-col gap-5 rounded-2xl p-6"
            style={{backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.6)"}}
          >
            {/* "Hey Junior Garcia!" */}
            <h2 className="text-xl leading-7">
              <span className="font-normal text-[#0f0f14]">Hey </span>
              <span className="font-semibold text-[#52325d]">Junior Garcia!</span>
            </h2>

            {/* Stats grid (4 cells with 1px gap) */}
            <div className="flex items-stretch gap-px">
              {[
                {label: "Memories", value: "1"},
                {label: "People", value: "0"},
                {label: "Messages", value: "0"},
              ].map(({label, value}) => (
                <div
                  key={label}
                  className="flex flex-1 flex-col items-center rounded-lg bg-white p-2"
                >
                  <span className="text-xl leading-7 font-medium text-[#27272a]">{value}</span>
                  <span className="text-center text-xs leading-4 text-[#52525b]">{label}</span>
                </div>
              ))}
              {/* XP cell with sparkle icon */}
              <div className="flex flex-1 flex-col items-center rounded-lg bg-white p-2">
                <span className="text-xl leading-7 font-medium text-[#27272a]">0</span>
                <div className="flex items-center gap-0.5">
                  <img alt="" className="size-3" src={imgSparkle} />
                  <span className="text-xs leading-4 text-[#52525b]">XP</span>
                </div>
              </div>
            </div>

            {/* Storage bar — gradient fill per Figma from-[#f5a524] to-[#52325d] */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#71717a]">Storage</span>
                <span className="text-xs text-[#52525b]">
                  <span className="font-semibold text-[#11181c]">0 / 10</span>
                  {" GB"}
                </span>
              </div>
              {/* Track */}
              <div className="h-2 overflow-hidden rounded-full bg-[rgba(255,255,255,0.6)]">
                {/* Fill — orange → purple gradient */}
                <div className="h-full w-[28%] rounded-full bg-gradient-to-r from-[#f5a524] to-[#52325d]" />
              </div>
            </div>
          </div>

          {/* Recent Activity card */}
          <div
            className="flex flex-1 flex-col gap-5 rounded-2xl p-6"
            style={{backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.6)"}}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-[#0f0f14]">Recent Activity</h3>
              <div className="flex items-center gap-2">
                {/* Gallery icon */}
                <button className="flex size-7 items-center justify-center rounded-lg text-[#71717a] transition-colors hover:bg-black/5 hover:text-[#0f0f14]">
                  <svg
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <rect height="18" rx="2" width="18" x="3" y="3" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </button>
                {/* Refresh icon */}
                <button className="flex size-7 items-center justify-center rounded-lg text-[#71717a] transition-colors hover:bg-black/5 hover:text-[#0f0f14]">
                  <svg
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Activity items */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 rounded-xl bg-[rgba(82,50,93,0.06)] p-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#71717a]">
                  <svg
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[#27272a]">You uploaded a photo</p>
                  <p className="text-xs text-[#71717a]">Less than a minute ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-[rgba(82,50,93,0.06)] p-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#71717a]">
                  <svg
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[#27272a]">You created a new memory</p>
                  <p className="text-xs text-[#71717a]">Less than a minute ago</p>
                </div>
              </div>
            </div>

            {/* See all */}
            <button className="flex items-center gap-2 self-start text-sm text-[#52525b] transition-colors hover:text-[#52325d]">
              <span>See all</span>
              <div className="flex size-5 items-center justify-center rounded-full border border-[rgba(0,0,0,0.15)]">
                <svg
                  className="size-3"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </button>
          </div>
        </aside>

        {/* ── Right content area ───────────────────────────────────────────── */}
        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-visible md:overflow-hidden">
          {/* Memory prompts + Photo Story grid — fills available height */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:min-h-0 lg:flex-1 lg:grid-cols-3 lg:[grid-template-rows:1fr_1fr]">
            {/* Memory 1 */}
            <div className="min-h-[160px] lg:min-h-0">
              <MemoryCard text="Describe the first home you remember living in" />
            </div>
            {/* Memory 2 */}
            <div className="min-h-[160px] lg:min-h-0">
              <MemoryCard text="How did you meet your partner/spouse?" />
            </div>
            {/* Photo Story – spans 2 rows on lg */}
            <div className="min-h-[240px] lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:min-h-0">
              <MemoryCard isPhotoStory text="Describe the first home you remember living in" />
            </div>
            {/* Memory 3 (with arrow) */}
            <div className="min-h-[160px] lg:min-h-0">
              <MemoryCard showArrow text="Which home holds the most memories for you?" />
            </div>
            {/* Memory 4 */}
            <div className="min-h-[160px] lg:min-h-0">
              <MemoryCard text="How did your passion for Reading begin?" />
            </div>
          </div>

          {/* Quick actions row — Figma: max-w-[700px] centered, flex gap-4 */}
          <div className="mx-auto flex w-full max-w-[700px] shrink-0 items-stretch gap-3 py-1">
            <QuickAction iconSrc={imgIconShuffle} label="Shuffle" />
            <QuickAction iconSrc={imgIconAddPhotos} label="Add Photos" />
            <QuickAction iconSrc={imgIconPostScript} label="PostScript" />
            <QuickAction iconSrc={imgIconAddContact} label="Add Contact" />
            <QuickAction iconSrc={imgIconQuickMemory} label="Quick Memory" />
          </div>
        </div>
      </div>

      {/* ══ BOTTOM AI BAR ════════════════════════════════════════════════════ */}
      <div className="flex shrink-0 flex-col items-center gap-2 px-6 py-4">
        <div
          className="flex w-full max-w-[776px] items-center gap-3 rounded-[20px] border-2 border-[#4a3552] bg-gradient-to-b from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.48)] px-[17px] py-[13px]"
          style={{boxShadow: "0px 4px 6px 0px rgba(0,0,0,0.10), 0px 2px 4px 0px rgba(0,0,0,0.10)"}}
        >
          {/* ⌘ button */}
          <button className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[rgba(212,212,216,0.4)] text-[#52525b] transition-all hover:bg-[rgba(212,212,216,0.6)]">
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
            </svg>
          </button>

          {/* Search input area */}
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <svg
              className="size-5 shrink-0 text-[#52525b]/50"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" x2="16.65" y1="21" y2="16.65" />
            </svg>
            <span className="text-sm text-[#52525b]/50">Ask me anything... (⌘K)</span>
          </div>

          {/* Voice button */}
          <button className="flex h-8 shrink-0 items-center gap-2 rounded-[12px] bg-[rgba(212,212,216,0.4)] px-3 text-xs font-medium text-[#0f0f14] transition-all hover:bg-[rgba(212,212,216,0.6)]">
            <svg
              className="size-5 text-[#52525b]"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="23" />
              <line x1="8" x2="16" y1="23" y2="23" />
            </svg>
            <span className="hidden sm:inline">Voice</span>
          </button>

          {/* Send button — purple→yellow gradient, semi-transparent = inactive */}
          <button
            className="flex size-8 shrink-0 items-center justify-center rounded-[12px] opacity-50 transition-opacity hover:opacity-70"
            style={{background: "linear-gradient(to right, #52325d, #f9c97c)"}}
          >
            <img alt="Send" className="size-5" src={imgSendBtn} />
          </button>
        </div>

        <p className="hidden text-center text-xs text-[#52525b] sm:block">
          Press ⌘K to open · Ask questions, navigate, or create content
        </p>
      </div>
    </div>
  );
}
