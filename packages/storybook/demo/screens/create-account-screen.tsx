"use client";

import {Button, Checkbox, Description, Input, Label, TextField} from "@heroui/react";
import React from "react";

// ─── Figma MCP assets (node 6447:206724) ─────────────────────────────────────

/* YoursTruly logo layers — 2 layers (node 6410:197243) */
const imgLogoVector = "http://localhost:3845/assets/a49ad1a50211fc1256726d1bd0229f22b21f7e90.svg";
const imgLogoVector1 = "http://localhost:3845/assets/4b937c769d974367a52057062f3e08118e98d2f1.svg";

/* OAuth provider icons */
const imgGoogle = "http://localhost:3845/assets/c02760ad33978ce5bed2da9bf9d73acad802182a.png";
const imgFacebook = "http://localhost:3845/assets/47a40744916bfdd8b1f5ffa3a71c03ad90bee25c.png";

/* Background watermark vector (YOURS Truly) */
const imgBgVector = "http://localhost:3845/assets/b54989e0f4e3e69b6236d253f1ee3d188dc671b2.svg";

/* Or-divider SVG line */
const imgDividerLine = "http://localhost:3845/assets/7ea4c00a9b8f73be76aafcc7c963d32e08a5121b.svg";

/* Social-proof avatar photo */
const imgAvatarPhoto = "http://localhost:3845/assets/6f23eab72541f5d36f4a4c2e593cd57d43a38757.png";

// ─── YoursTruly logo (2-layer Figma composition) ─────────────────────────────

function YoursTrulyLogo() {
  return (
    <div className="relative h-[40px] w-[72px]">
      {/* "YOURS" part */}
      <div className="absolute inset-[0_12.08%_69.03%_10.89%]">
        <img alt="" className="absolute block size-full max-w-none" src={imgLogoVector} />
      </div>
      {/* "Truly" script part */}
      <div className="absolute inset-[32.04%_5.79%_0_4.58%]">
        <img alt="" className="absolute block size-full max-w-none" src={imgLogoVector1} />
      </div>
    </div>
  );
}

// ─── Or-divider (uses Figma SVG line asset) ───────────────────────────────────

function OrDivider() {
  return (
    <div className="flex items-center gap-5">
      <div className="relative h-0 min-h-px flex-1">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block size-full max-w-none" src={imgDividerLine} />
        </div>
      </div>
      <span className="text-xs text-[#52525b]">Or</span>
      <div className="relative h-0 min-h-px flex-1">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block size-full max-w-none" src={imgDividerLine} />
        </div>
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
        {/* YOURS/Truly watermark vector (node 6447:207276) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
          <img
            alt=""
            className="absolute block size-full max-w-none object-cover"
            src={imgBgVector}
          />
        </div>

        {/* Bottom brand copy + social proof */}
        <div className="absolute bottom-10 left-10 flex flex-col gap-5">
          {/* Tagline block */}
          <div className="flex flex-col gap-5">
            <p className="text-[36px] leading-[40px] font-normal text-[#27272a]">Life Is Short</p>
            <p
              className="text-[80px] leading-[56px] text-[#52325d]"
              style={{fontFamily: "var(--font-script)"}}
            >
              Make It Sweet
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-xl font-normal text-[#52525b]">
            Join YoursTruly, where your story lives on
          </p>

          {/* Social proof — AvatarGroup sm+primary (node 2551:37356) */}
          <div className="flex items-center gap-4">
            {/* 5 photo avatars with double ring: border-4 primary + border-2 white */}
            <div className="flex pr-2">
              {[0, 1, 2, 3, 4].map((i) => (
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
            <span className="text-base font-medium text-[#52525b]">Join 70,000+ users</span>
          </div>
        </div>
      </div>

      {/* ── Right: floating form card ───────────────────────────────────── */}
      <div className="flex w-full items-center justify-center px-6 py-8 md:w-[520px] md:shrink-0 md:px-10">
        <div className="w-full max-w-[400px]">
          {/* Card — node 6447:207285 */}
          <div
            className="flex w-full flex-col gap-8 rounded-[20px] bg-gradient-to-b from-white/40 to-[rgba(255,255,255,0.24)] p-6 backdrop-blur-[10px] md:gap-10 md:p-10"
            style={{boxShadow: "0px 20px 25px 0px rgba(0,0,0,0.05)"}}
          >
            {/* Logo */}
            <YoursTrulyLogo />

            {/* Main content — node 6447:207287, gap-24px */}
            <div className="flex flex-col gap-6">
              {/* Title + Subtitle — node 6447:207288, gap-8px */}
              <div className="flex flex-col gap-2">
                <h1 className="text-[28px] leading-[34px] font-medium text-[#11181c] md:text-[36px] md:leading-[40px]">
                  Create Account
                </h1>
                <p className="text-base font-normal text-[#3f3f46]">Your eternity planning.</p>
              </div>

              {/* Form section — node 6447:207291, gap-20px */}
              <div className="flex flex-col gap-5">
                {/* OAuth buttons — node 6447:207292, gap-16px */}
                <div className="flex gap-4">
                  <Button
                    className="h-10 flex-1 rounded-[12px] border-2 border-[#d4d4d8] bg-[#f4f4f5] text-sm font-medium text-[#000000]"
                    type="button"
                  >
                    <img aria-hidden alt="" className="size-5 shrink-0" src={imgGoogle} />
                    Google
                  </Button>
                  <Button
                    className="h-10 flex-1 rounded-[12px] border-2 border-[#d4d4d8] bg-[#f4f4f5] text-sm font-medium text-[#000000]"
                    type="button"
                  >
                    <img aria-hidden alt="" className="size-5 shrink-0" src={imgFacebook} />
                    Facebook
                  </Button>
                </div>

                {/* Or divider — node 6447:207295 */}
                <OrDivider />

                {/* Form fields + actions — node 6447:207299, gap-32px */}
                <form
                  className="flex flex-col gap-8"
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSuccess?.();
                  }}
                >
                  {/* Input fields — node 6447:207300, gap-16px */}
                  <div className="flex flex-col gap-4">
                    {/* Full Name — node 6447:207301 */}
                    <TextField className="gap-3" name="fullname" type="text">
                      <Label className="text-xs font-normal text-[#52525b]">Full Name</Label>
                      <Input
                        fullWidth
                        className="rounded-[12px] bg-[#f4f4f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                        style={{borderColor: "#e4e4e7", borderWidth: "2px"}}
                      />
                    </TextField>

                    {/* Email — node 6447:207302 */}
                    <TextField className="gap-3" name="email" type="email">
                      <Label className="text-xs font-normal text-[#52525b]">Email</Label>
                      <Input
                        fullWidth
                        className="rounded-[12px] bg-[#f4f4f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                        style={{borderColor: "#e4e4e7", borderWidth: "2px"}}
                      />
                    </TextField>

                    {/* Password — node 6447:207303 */}
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

                  {/* Privacy policy checkbox — node 6447:207304 */}
                  <Checkbox id="privacy" isSelected={accepted} onChange={setAccepted}>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                      <Label className="text-base text-[#11181c]" htmlFor="privacy">
                        I accept the{" "}
                        <span className="text-sm font-medium text-[#52325d]">Privacy Policy</span>
                      </Label>
                    </Checkbox.Content>
                  </Checkbox>

                  {/* Sign Up button — node 6447:207305, h-48px */}
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

              {/* Have an account? — node 6447:207306 */}
              <div className="flex items-center justify-end gap-1 text-base font-medium">
                <span className="text-[#52525b]">Have an account?</span>
                <button className="text-[#11181c] hover:underline" type="button">
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
