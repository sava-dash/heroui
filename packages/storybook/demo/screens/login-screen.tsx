"use client";

import {Button, Checkbox, Input, Label, TextField} from "@heroui/react";
import React from "react";

// ─── Figma MCP assets (shared with create-account-screen) ────────────────────

/* YoursTruly logo layers — 2 layers (node 6410:197243) */
const imgLogoVector = "http://localhost:3845/assets/a49ad1a50211fc1256726d1bd0229f22b21f7e90.svg";
const imgLogoVector1 = "http://localhost:3845/assets/4b937c769d974367a52057062f3e08118e98d2f1.svg";

/* OAuth provider icons */
const imgGoogle = "http://localhost:3845/assets/c02760ad33978ce5bed2da9bf9d73acad802182a.png";

/* Background watermark vector (YOURS Truly) */
const imgBgVector = "http://localhost:3845/assets/b54989e0f4e3e69b6236d253f1ee3d188dc671b2.svg";

/* Or-divider SVG line */
const imgDividerLine = "http://localhost:3845/assets/7ea4c00a9b8f73be76aafcc7c963d32e08a5121b.svg";

/* Social-proof avatars — 1 photo + 4 SVG silhouettes (Figma AvatarGroup) */
const imgAvatarPhoto = "http://localhost:3845/assets/6f23eab72541f5d36f4a4c2e593cd57d43a38757.png";
const imgAvatar0 = "http://localhost:3845/assets/095bc2e03ae9d702f43979f556ba177f06f36acc.svg";
const imgAvatar1 = "http://localhost:3845/assets/047a2cc5c6c0ff74ebedb51a91f426c7a2211fa7.svg";
const imgAvatar2 = "http://localhost:3845/assets/4a46fc2bbdad419120ea80a8569097deda9779f2.svg";
const imgAvatar3 = "http://localhost:3845/assets/f895ec61f5c181536afa36d60e9db1f745dc8a10.svg";

const avatarSrcs = [imgAvatarPhoto, imgAvatar0, imgAvatar1, imgAvatar2, imgAvatar3];

// ─── YoursTruly logo (2-layer Figma composition) ─────────────────────────────

function YoursTrulyLogo() {
  return (
    <div className="relative h-[40px] w-[72px]">
      {/* "YOURS" part */}
      <div className="absolute inset-[0_12.08%_69.03%_10.89%]">
        <img
          alt=""
          className="absolute block size-full max-w-none object-contain object-left-top"
          src={imgLogoVector}
        />
      </div>
      {/* "Truly" script part */}
      <div className="absolute inset-[32.04%_5.79%_0_4.58%]">
        <img
          alt=""
          className="absolute block size-full max-w-none object-contain object-left-bottom"
          src={imgLogoVector1}
        />
      </div>
    </div>
  );
}

// ─── Or-divider (uses Figma SVG line asset) ───────────────────────────────────

function OrDivider() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-0 min-h-px flex-1">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block size-full max-w-none" src={imgDividerLine} />
        </div>
      </div>
      <span className="shrink-0 text-xs text-[#71717a]">Or continue with email</span>
      <div className="relative h-0 min-h-px flex-1">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block size-full max-w-none" src={imgDividerLine} />
        </div>
      </div>
    </div>
  );
}

// ─── Login Screen ─────────────────────────────────────────────────────────────

export type LoginScreenProps = {
  /** Called when the user successfully logs in. */
  onSuccess?: () => void;
  /** Called when the user clicks "Sign Up". */
  onSignUp?: () => void;
};

export function LoginScreen({onSignUp, onSuccess}: LoginScreenProps) {
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <div className="flex h-screen min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-[#ad8fb9] to-[#fefce8]">
      {/* ── Left: vector watermark + brand copy ────────────────────────── */}
      <div className="relative hidden flex-1 overflow-hidden md:block">
        {/* YOURS/Truly watermark vector */}
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
              style={{fontFamily: "'Dream Fever - Demo', serif"}}
            >
              Make It Sweet
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-xl font-normal text-[#52525b]">
            Join YoursTruly, where your story lives on
          </p>

          {/* Social proof — AvatarGroup sm+primary */}
          <div className="flex items-center gap-4">
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
                        src={avatarSrcs[i]}
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
      <div className="flex w-full items-center justify-center px-4 py-8 md:w-[620px] md:shrink-0 md:px-10">
        <div className="w-full max-w-[540px]">
          {/* Card */}
          <div
            className="flex w-full flex-col gap-8 rounded-[20px] bg-gradient-to-b from-white/40 to-[rgba(255,255,255,0.24)] p-6 backdrop-blur-[20px] md:gap-10 md:p-16"
            style={{
              boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.05)",
            }}
          >
            {/* Logo */}
            <YoursTrulyLogo />

            {/* Main content */}
            <div className="flex flex-col gap-6">
              {/* Title + Subtitle */}
              <div className="flex flex-col gap-2">
                <h1 className="text-[28px] leading-[34px] font-medium text-[#11181c] md:text-[36px] md:leading-[40px]">
                  Welcome back
                </h1>
                <p className="text-base font-normal text-[#3f3f46]">Your memories are waiting.</p>
              </div>

              {/* Form section */}
              <div className="flex flex-col gap-5">
                {/* OAuth buttons */}
                <Button
                  className="h-10 w-full rounded-[12px] border-2 border-[#d4d4d8] bg-[#f4f4f5] text-sm font-medium text-[#000000]"
                  type="button"
                >
                  <img aria-hidden alt="" className="size-5 shrink-0" src={imgGoogle} />
                  Continue with Google
                </Button>

                {/* Or divider */}
                <OrDivider />

                {/* Form fields + actions */}
                <form
                  className="flex flex-col gap-8"
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSuccess?.();
                  }}
                >
                  {/* Input fields */}
                  <div className="flex flex-col gap-4">
                    {/* Email */}
                    <TextField className="gap-[12px]" name="email" type="email">
                      <Label className="text-[12px] leading-[16px] font-normal text-[#52525b]">
                        Email
                      </Label>
                      <Input
                        fullWidth
                        className="rounded-[12px] border-2 border-[#e4e4e7] bg-[#f4f4f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                      />
                    </TextField>

                    {/* Password */}
                    <TextField className="gap-[12px]" name="password" type="password">
                      <div className="flex items-center justify-between">
                        <Label className="text-[12px] leading-[16px] font-normal text-[#52525b]">
                          Password
                        </Label>
                        <button
                          className="text-[12px] font-medium text-[#52325d] hover:underline"
                          type="button"
                        >
                          Forgot password?
                        </button>
                      </div>
                      <Input
                        fullWidth
                        className="rounded-[12px] border-2 border-[#e4e4e7] bg-[#f4f4f5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                      />
                    </TextField>
                  </div>

                  {/* Remember me */}
                  <Checkbox
                    className="gap-2"
                    id="remember"
                    isSelected={rememberMe}
                    onChange={setRememberMe}
                  >
                    <Checkbox.Control className="size-4 rounded-[4px] border-2 border-[#d4d4d8] shadow-none">
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                      <Label className="text-sm font-normal text-[#52525b]" htmlFor="remember">
                        Remember me
                      </Label>
                    </Checkbox.Content>
                  </Checkbox>

                  {/* Sign In button */}
                  <Button
                    className="h-12 w-full rounded-[12px] text-base"
                    type="submit"
                    variant="primary"
                  >
                    Sign In
                  </Button>
                </form>
              </div>

              {/* Don't have an account? */}
              <div className="flex flex-col items-center gap-2 text-sm">
                <div className="flex items-center gap-1 font-medium">
                  <span className="text-[#52525b]">Don&apos;t have an account?</span>
                  <button
                    className="text-[#11181c] hover:underline"
                    type="button"
                    onClick={onSignUp}
                  >
                    Get started free
                  </button>
                </div>
                <p className="text-center text-xs text-[#a1a1aa]">
                  Your memories are encrypted and stored securely
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
