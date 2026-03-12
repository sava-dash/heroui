import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const quickActionVariants = tv({
  defaultVariants: {
    variant: "default",
  },
  slots: {
    base: [
      "flex cursor-pointer flex-col items-center justify-center gap-1",
      "w-[120px] rounded-lg px-1.5 py-2.5",
      "border border-[rgba(74,53,82,0.2)]",
      "transition-colors",
    ],
    icon: "relative flex size-5 shrink-0 items-center justify-center",
    label: "text-center text-sm whitespace-nowrap",
  },
  variants: {
    variant: {
      active: {
        base: "bg-[rgba(255,255,255,0.6)]",
        icon: "text-[#52325d]",
        label: "text-[#52325d]",
      },
      default: {
        base: "bg-transparent",
        icon: "text-[#27272a]",
        label: "text-[#27272a]",
      },
    },
  },
});

export type QuickActionVariantProps = VariantProps<typeof quickActionVariants>;
