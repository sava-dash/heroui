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

/* Background vector logo (node 6447:207276) */
const imgBgVector = "http://localhost:3845/assets/f49d84903ba65f28294eb48c8311efaa31942c36.svg";

/* Social-proof avatar photo (node 2551:37356) */
const imgAvatarPhoto = "http://localhost:3845/assets/6f23eab72541f5d36f4a4c2e593cd57d43a38757.png";

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
    <div className="flex h-screen min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-[#ad8fb9] to-[#fefce8]">
      {/* ── Left: vector watermark + brand copy ────────────────────────── */}
      <div className="relative hidden flex-1 overflow-hidden md:block">
        {/* Figma vector logo watermark (node 6447:207276) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
          <img
            alt=""
            className="absolute block size-full max-w-none object-cover"
            src={imgBgVector}
          />
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

          {/* Social proof — AvatarGroup sm+primary (node 2551:37356) */}
          <div className="mt-3 flex items-center gap-3">
            <div className="flex pr-2">
              {/* 4 photo avatars with double ring: border-4 purple + border-2 white */}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative -mr-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#52325d]"
                >
                  <div className="absolute inset-0 rounded-full border-4 border-[#52325d]">
                    <div className="relative size-full overflow-hidden rounded-full border-2 border-white">
                      <img
                        alt=""
                        className="absolute inset-0 size-full max-w-none object-cover"
                        src={imgAvatarPhoto}
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* +4 counter */}
              <div className="relative -mr-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#52325d]">
                <div className="absolute inset-0 rounded-full border-4 border-[#52325d]">
                  <div className="relative flex size-full items-center justify-center rounded-full border-2 border-white bg-[#52325d]">
                    <span className="text-[12px] leading-none font-normal text-white">+4</span>
                  </div>
                </div>
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
          <div className="flex w-full flex-col gap-8 rounded-[20px] bg-gradient-to-b from-white/90 to-white/50 p-6 shadow-[0_8px_40px_rgba(82,50,93,0.12)] backdrop-blur-sm md:gap-10 md:p-10">
            {/* Logo */}
            <YoursTrulyLogo />

            {/* Main content — Figma node 6447:207287 */}
            <div className="flex flex-col gap-6">
              {/* Title + Subtitle — Figma node 6447:207288 */}
              <div className="flex flex-col gap-2">
                <h1 className="text-[28px] leading-[34px] font-medium text-foreground md:text-[36px] md:leading-[40px]">
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
                        style={{borderColor: "#e4e4e7", borderWidth: "2px"}}
                      />
                    </TextField>

                    {/* Email — Figma node 6447:207302 */}
                    <TextField className="gap-3" name="email" type="email">
                      <Label className="text-xs font-normal text-[#52525b]">Email</Label>
                      <Input
                        fullWidth
                        className="rounded-[12px] bg-[#f4f4f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                        style={{borderColor: "#e4e4e7", borderWidth: "2px"}}
                      />
                    </TextField>

                    {/* Password — Figma node 6447:207303, includes description */}
                    <TextField className="gap-3" name="password" type="password">
                      <Label className="text-xs font-normal text-[#52525b]">Password</Label>
                      <Input
                        fullWidth
                        className="rounded-[12px] bg-[#f4f4f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                        style={{borderColor: "#e4e4e7", borderWidth: "2px"}}
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
