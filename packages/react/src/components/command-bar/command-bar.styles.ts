import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const commandBarVariants = tv({
  defaultVariants: {
    isOpen: false,
  },
  slots: {
    card: [
      "relative w-full overflow-clip rounded-[20px]",
      "border border-[#52325d]",
      "backdrop-blur-[10px]",
      "shadow-[0px_20px_25px_0px_rgba(0,0,0,0.05)]",
    ],
    closeButton: [
      "absolute top-3 right-3 flex cursor-pointer items-center justify-center",
      "size-8 rounded-xl",
    ],
    hint: "w-full text-center text-xs text-[#52525b]",
    inputRow: [
      "flex w-full items-center gap-3",
      "rounded-[20px] border border-[rgba(17,17,17,0.15)]",
      "bg-[rgba(255,255,255,0.6)] px-[17px] py-[13px]",
    ],
    keyButton: [
      "relative flex shrink-0 cursor-pointer items-center justify-center",
      "size-8 rounded-xl",
    ],
    panel: [
      "flex min-h-[196px] w-full flex-col items-start gap-3 p-6",
      "bg-[radial-gradient(ellipse_at_50%_0%,_rgba(255,255,255,0.6)_0%,_rgba(212,212,216,0.4)_100%)]",
    ],
    panelChips: "flex w-full flex-wrap items-center justify-center gap-3",
    panelHeader: "flex w-full shrink-0 flex-col items-center gap-2",
    root: "flex w-full max-w-[776px] flex-col items-start gap-2",
    sendButton: [
      "flex shrink-0 cursor-pointer items-center justify-center",
      "size-8 rounded-xl opacity-50",
      "bg-gradient-to-r from-[#52325d] to-[#f9c97c]",
    ],
    voiceButton: [
      "flex h-8 shrink-0 items-center gap-2 rounded-xl px-3",
      "border-2 border-[#d4d4d8]",
      "text-xs font-medium text-[#0f0f14]",
    ],
  },
  variants: {
    isOpen: {
      false: {
        keyButton: "bg-[rgba(212,212,216,0.4)]",
      },
      true: {
        card: "shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.05)]",
        keyButton: "border-2 border-[#d4d4d8] bg-transparent",
      },
    },
  },
});

export type CommandBarVariantProps = VariantProps<typeof commandBarVariants>;
