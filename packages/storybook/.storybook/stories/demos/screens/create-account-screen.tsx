"use client";

import React from "react";

import {Avatar, Button, Checkbox, Input, Label, Separator, TextField} from "@heroui/react";

import {GoogleIcon} from "../components/icons";

// Facebook icon inline
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const socialProofAvatars = [
  "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg",
  "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
  "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
  "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
];

export type CreateAccountScreenProps = {
  /** Called when the user successfully submits the sign-up form. */
  onSuccess?: () => void;
};

export function CreateAccountScreen({onSuccess}: CreateAccountScreenProps) {
  const [accepted, setAccepted] = React.useState(false);

  return (
    <div className="flex h-screen min-h-[600px] w-full overflow-hidden rounded-2xl">
      {/* Left: Brand panel */}
      <div className="relative hidden w-[420px] shrink-0 flex-col justify-between overflow-hidden bg-amber-400 p-10 md:flex">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold tracking-tight text-white/90">YOURS</span>
          <span className="text-sm italic text-white">Truly</span>
        </div>

        {/* Tagline */}
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold text-white">Life Is Short</p>
          <p className="text-3xl italic text-white/90">Make It Sweet</p>
          <p className="mt-2 text-sm text-white/70">
            Join YoursTruly, where your story lives on
          </p>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {socialProofAvatars.map((src, i) => (
              <Avatar key={i} className="size-7 ring-2 ring-amber-400">
                <Avatar.Image alt={`User ${i + 1}`} src={src} />
                <Avatar.Fallback className="text-xs">U</Avatar.Fallback>
              </Avatar>
            ))}
            <div className="flex size-7 items-center justify-center rounded-full bg-amber-600 ring-2 ring-amber-400">
              <span className="text-[10px] font-bold text-white">+4</span>
            </div>
          </div>
          <span className="text-sm text-white/80">Join 70,000+ users</span>
        </div>
      </div>

      {/* Right: Form panel */}
      <div className="relative flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-amber-50 px-8 py-12">
        {/* Top-right login link */}
        <div className="absolute top-4 right-6 text-sm text-muted">
          Have an account?{" "}
          <button className="font-semibold text-foreground hover:underline">Log In</button>
        </div>

        <div className="w-full max-w-sm">
          <h1 className="mb-1 text-2xl font-bold text-foreground">Create Account</h1>
          <p className="mb-6 text-sm text-muted">Your eternity planning.</p>

          {/* OAuth buttons */}
          <div className="flex gap-3">
            <Button className="flex-1 gap-2" variant="tertiary">
              <GoogleIcon className="size-4" />
              Google
            </Button>
            <Button className="flex-1 gap-2 text-[#1877F2]" variant="tertiary">
              <FacebookIcon className="size-4 text-[#1877F2]" />
              Facebook
            </Button>
          </div>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs font-medium text-muted uppercase">Or</span>
            <Separator className="flex-1" />
          </div>

          {/* Form fields */}
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              onSuccess?.();
            }}
          >
            <TextField name="fullname" type="text">
              <Label>Full Name</Label>
              <Input fullWidth placeholder="Jane Doe" variant="secondary" />
            </TextField>

            <TextField name="email" type="email">
              <Label>Email</Label>
              <Input fullWidth placeholder="jane@example.com" variant="secondary" />
            </TextField>

            <TextField name="password" type="password">
              <Label>Password</Label>
              <Input fullWidth placeholder="••••••••" variant="secondary" />
              <p className="text-xs text-muted">8 characters minimum</p>
            </TextField>

            {/* Privacy policy checkbox */}
            <Checkbox id="privacy" isSelected={accepted} onChange={setAccepted}>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Content>
                <Label htmlFor="privacy" className="text-sm leading-snug text-muted">
                  I accept the{" "}
                  <button
                    className="font-medium text-accent underline underline-offset-2"
                    type="button"
                  >
                    Privacy Policy
                  </button>
                </Label>
              </Checkbox.Content>
            </Checkbox>

            <Button
              className="mt-2 w-full"
              isDisabled={!accepted}
              type="submit"
              variant="primary"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
