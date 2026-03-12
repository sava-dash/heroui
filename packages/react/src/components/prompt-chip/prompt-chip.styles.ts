import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const promptChipVariants = tv({
  base: [
    "inline-flex cursor-pointer items-center justify-center",
    "rounded-lg px-2 py-1",
    "text-sm whitespace-nowrap text-[#52525b]",
    "bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px]",
    "shadow-[0px_20px_25px_0px_rgba(0,0,0,0.05)]",
    "transition-colors",
    "hover:bg-white hover:text-[#52325d]",
    "focus-visible:ring-2 focus-visible:ring-[#52325d]/50 focus-visible:outline-none",
  ],
});

export type PromptChipVariantProps = VariantProps<typeof promptChipVariants>;
