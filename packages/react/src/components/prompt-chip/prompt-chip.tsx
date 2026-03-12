"use client";

import type {PromptChipVariantProps} from "./prompt-chip.styles";
import type {ComponentPropsWithRef} from "react";

import React from "react";

import {promptChipVariants} from "./prompt-chip.styles";

/* -------------------------------------------------------------------------------------------------
 * PromptChip
 * -----------------------------------------------------------------------------------------------*/
export interface PromptChipProps
  extends
    Omit<ComponentPropsWithRef<"button">, keyof PromptChipVariantProps>,
    PromptChipVariantProps {
  children: React.ReactNode;
}

export const PromptChip = React.forwardRef<HTMLButtonElement, PromptChipProps>(
  ({children, className, ...props}, ref) => {
    return (
      <button ref={ref} className={promptChipVariants({className})} type="button" {...props}>
        {children}
      </button>
    );
  },
);

PromptChip.displayName = "HeroUI.PromptChip";
