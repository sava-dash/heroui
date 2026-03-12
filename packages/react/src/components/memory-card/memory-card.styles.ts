import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const memoryCardVariants = tv({
  defaultVariants: {
    hovered: false,
    type: "memory",
  },
  slots: {
    action: [
      "absolute right-4 bottom-4",
      "flex size-8 items-center justify-center",
      "overflow-hidden rounded-full bg-[#52325d]",
      "shadow-[0px_10px_15px_0px_rgba(74,53,82,0.4),0px_4px_6px_0px_rgba(0,0,0,0.05)]",
    ],
    badge: "inline-flex h-7 items-center rounded-full px-2",
    badgeLabel: "text-sm font-normal whitespace-nowrap",
    base: [
      "relative w-full overflow-hidden rounded-2xl p-1",
      "backdrop-blur-[10px]",
      "shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.05)]",
    ],
    body: "w-full text-sm font-medium text-[#27272a]",
    header: "flex shrink-0 items-start justify-between",
    imageWrapper: "relative w-full overflow-hidden rounded-lg",
    inner: "flex flex-col gap-4 p-3",
    xp: "flex h-7 items-center gap-0.5",
    xpLabel: "text-sm font-medium whitespace-nowrap text-[#27272a]",
  },
  variants: {
    hovered: {
      false: {},
      true: {
        base: "bg-white",
      },
    },
    type: {
      memory: {
        badge: "bg-[rgba(82,50,93,0.2)]",
        badgeLabel: "text-[#52325d]",
        base: "bg-gradient-to-b from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.24)]",
      },
      "photo-story": {
        badge: "bg-[rgba(0,111,238,0.2)]",
        badgeLabel: "text-[#006fee]",
        base: "bg-gradient-to-b from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.24)]",
      },
    },
  },
});

export type MemoryCardVariantProps = VariantProps<typeof memoryCardVariants>;
