"use client";

import {Button, Checkbox, Description, Input, Label, Separator, TextField} from "@heroui/react";
import React from "react";

// ─── Figma MCP assets ────────────────────────────────────────────────────────

/* YoursTruly logo layers (node 6410:197243) */
const imgGroup = "http://localhost:3845/assets/ef73cd9e3e3cafdf77a83ef2a6eb4f58fd3bc7b4.svg";
const imgGroup1 = "http://localhost:3845/assets/41e820d59e312313e0141fc6621a9d1de74346c2.svg";
const imgGroup2 = "http://localhost:3845/assets/6e0b0a4348cc63aaac45c735a3fdc0943cccd88d.svg";

/* OAuth provider icons */
const imgGoogle = "http://localhost:3845/assets/c02760ad33978ce5bed2da9bf9d73acad802182a.png";
const imgFacebook = "http://localhost:3845/assets/47a40744916bfdd8b1f5ffa3a71c03ad90bee25c.png";

/* Social-proof avatar SVGs */
const imgAvatar = "http://localhost:3845/assets/095bc2e03ae9d702f43979f556ba177f06f36acc.svg";
const imgAvatar1 = "http://localhost:3845/assets/047a2cc5c6c0ff74ebedb51a91f426c7a2211fa7.svg";
const imgAvatar2 = "http://localhost:3845/assets/4a46fc2bbdad419120ea80a8569097deda9779f2.svg";
const imgAvatar3 = "http://localhost:3845/assets/f895ec61f5c181536afa36d60e9db1f745dc8a10.svg";

const socialAvatars = [imgAvatar, imgAvatar1, imgAvatar2, imgAvatar3];

// ─── YoursTruly logo (uses Figma SVG layers) ─────────────────────────────────

function YoursTrulyLogo() {
  return (
    <div className="relative h-[40px] w-[72px]">
      <div className="absolute inset-[0_12.08%_69.03%_10.89%]">
        <img alt="" className="absolute block size-full max-w-none" src={imgGroup} />
      </div>
      <div className="absolute inset-[22.55%_-0.21%_15.48%_-1.39%]">
        <img alt="" className="absolute block size-full max-w-none" src={imgGroup1} />
      </div>
      <div className="absolute inset-[32.04%_5.79%_0_4.58%]">
        <img alt="" className="absolute block size-full max-w-none" src={imgGroup2} />
      </div>
    </div>
  );
}

// ─── Create Account Screen ────────────────────────────────────────────────────

export type CreateAccountScreenProps = {
  /** Called when the user successfully submits the sign-up form. */
  onSuccess?: () => void;
};

export function CreateAccountScreen({onSuccess}: CreateAccountScreenProps) {
  const [accepted, setAccepted] = React.useState(false);

  return (
    <div className="flex h-screen min-h-[600px] w-full overflow-hidden">
      {/* ── Left: watermark + brand copy ───────────────────────────────── */}
      <div className="relative hidden flex-1 overflow-hidden md:block">
        {/* Giant YOURS / Truly watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex flex-col items-start justify-start overflow-hidden pt-10 pl-10 select-none"
        >
          <span
            className="leading-none font-black text-[#52325d]/[0.18]"
            style={{fontSize: "clamp(100px, 16vw, 220px)"}}
          >
            YOURS
          </span>
          <span
            className="leading-none text-[#52325d]/[0.18]"
            style={{
              fontSize: "clamp(80px, 13vw, 180px)",
              fontFamily: "var(--font-script)",
            }}
          >
            Truly
          </span>
        </div>

        {/* Bottom brand copy + social proof */}
        <div className="absolute bottom-10 left-10 flex flex-col gap-2">
          <p className="text-3xl font-bold text-foreground/80">Life Is Short</p>
          <p className="text-3xl text-[#52325d]/80" style={{fontFamily: "var(--font-script)"}}>
            Make It Sweet
          </p>
          <p className="mt-1 text-sm text-foreground/50">
            Join YoursTruly, where your story lives on
          </p>

          {/* Social proof */}
          <div className="mt-3 flex items-center gap-3">
            <div className="flex -space-x-2">
              {socialAvatars.map((src, i) => (
                <div key={i} className="size-8 overflow-hidden rounded-full ring-2 ring-white/70">
                  <img
                    alt={`Community member ${i + 1}`}
                    className="h-full w-full object-cover"
                    src={src}
                  />
                </div>
              ))}
              <div className="flex size-8 items-center justify-center rounded-full bg-[#52325d] text-[10px] font-bold text-white ring-2 ring-white/70">
                +4
              </div>
            </div>
            <span className="text-sm text-foreground/60">Join 70,000+ users</span>
          </div>
        </div>
      </div>

      {/* ── Right: floating form card ───────────────────────────────────── */}
      <div className="flex w-full items-center justify-center px-6 py-8 md:w-[520px] md:shrink-0 md:px-10">
        <div className="w-full max-w-[400px]">
          {/* Card — matches Figma node 6447:207285 */}
          <div className="flex w-full flex-col gap-10 rounded-[20px] bg-gradient-to-b from-white/90 to-white/50 p-10 shadow-[0_8px_40px_rgba(82,50,93,0.12)] backdrop-blur-sm">
            {/* Logo */}
            <YoursTrulyLogo />

            {/* Main content — Figma node 6447:207287 */}
            <div className="flex flex-col gap-6">
              {/* Title + Subtitle — Figma node 6447:207288 */}
              <div className="flex flex-col gap-2">
                <h1 className="text-[36px] leading-[40px] font-medium text-foreground">
                  Create Account
                </h1>
                <p className="text-base text-muted">Your eternity planning.</p>
              </div>

              {/* Form section — Figma node 6447:207291 */}
              <div className="flex flex-col gap-5">
                {/* OAuth buttons — Figma node 6447:207292 */}
                <div className="flex gap-4">
                  <Button
                    className="h-10 flex-1 rounded-[12px] border-2 border-default bg-surface-secondary text-sm font-medium text-foreground"
                    type="button"
                  >
                    <img aria-hidden alt="" className="size-5 shrink-0" src={imgGoogle} />
                    Google
                  </Button>
                  <Button
                    className="h-10 flex-1 rounded-[12px] border-2 border-default bg-surface-secondary text-sm font-medium text-foreground"
                    type="button"
                  >
                    <img aria-hidden alt="" className="size-5 shrink-0" src={imgFacebook} />
                    Facebook
                  </Button>
                </div>

                {/* Divider "Or" — Figma node 6447:207295 */}
                <div className="flex items-center gap-5">
                  <Separator className="flex-1" />
                  <span className="text-xs text-muted">Or</span>
                  <Separator className="flex-1" />
                </div>

                {/* Form fields + actions — Figma node 6447:207299, gap-32px */}
                <form
                  className="flex flex-col gap-8"
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSuccess?.();
                  }}
                >
                  {/* Input fields — Figma node 6447:207300, gap-16px */}
                  <div className="flex flex-col gap-4">
                    {/* Full Name — Figma node 6447:207301, label 12px #52525b, input bg #f4f4f5 border-2 #e4e4e7 r-12 shadow-sm */}
                    <TextField className="gap-3" name="fullname" type="text">
                      <Label className="text-xs font-normal text-[#52525b]">Full Name</Label>
                      <Input
                        fullWidth
                        className="rounded-[12px] bg-[#f4f4f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                        style={{borderWidth: "2px", borderColor: "#e4e4e7"}}
                      />
                    </TextField>

                    {/* Email — Figma node 6447:207302 */}
                    <TextField className="gap-3" name="email" type="email">
                      <Label className="text-xs font-normal text-[#52525b]">Email</Label>
                      <Input
                        fullWidth
                        className="rounded-[12px] bg-[#f4f4f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                        style={{borderWidth: "2px", borderColor: "#e4e4e7"}}
                      />
                    </TextField>

                    {/* Password — Figma node 6447:207303, includes description */}
                    <TextField className="gap-3" name="password" type="password">
                      <Label className="text-xs font-normal text-[#52525b]">Password</Label>
                      <Input
                        fullWidth
                        className="rounded-[12px] bg-[#f4f4f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                        style={{borderWidth: "2px", borderColor: "#e4e4e7"}}
                      />
                      <Description className="text-[#a1a1aa]">8 charachters minimum</Description>
                    </TextField>
                  </div>

                  {/* Privacy policy checkbox — Figma node 6447:207304 */}
                  <Checkbox id="privacy" isSelected={accepted} onChange={setAccepted}>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                      <Label className="text-sm text-foreground" htmlFor="privacy">
                        I accept the <span className="font-medium text-accent">Privacy Policy</span>
                      </Label>
                    </Checkbox.Content>
                  </Checkbox>

                  {/* Sign Up button — Figma node 6447:207305, h-48px */}
                  <Button
                    className="h-12 w-full rounded-[12px] text-base"
                    isDisabled={!accepted}
                    type="submit"
                    variant="primary"
                  >
                    Sign Up
                  </Button>
                </form>
              </div>

              {/* Have an account? — Figma node 6447:207306 (inside card) */}
              <div className="flex items-center justify-end gap-1 text-base font-medium">
                <span className="text-muted">Have an account?</span>
                <button className="text-foreground hover:underline" type="button">
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
