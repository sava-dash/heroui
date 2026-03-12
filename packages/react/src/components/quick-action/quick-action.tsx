"use client";

import type {QuickActionVariantProps} from "./quick-action.styles";
import type {ComponentPropsWithRef} from "react";

import React, {createContext, useContext} from "react";

import {quickActionVariants} from "./quick-action.styles";

/* -------------------------------------------------------------------------------------------------
 * QuickAction Context
 * -----------------------------------------------------------------------------------------------*/
type QuickActionContext = {
  slots?: ReturnType<typeof quickActionVariants>;
};

const QuickActionContext = createContext<QuickActionContext>({});

/* -------------------------------------------------------------------------------------------------
 * QuickAction Root
 * -----------------------------------------------------------------------------------------------*/
export interface QuickActionRootProps
  extends
    Omit<ComponentPropsWithRef<"button">, keyof QuickActionVariantProps>,
    QuickActionVariantProps {
  children?: React.ReactNode;
}

const QuickActionRoot = React.forwardRef<HTMLButtonElement, QuickActionRootProps>(
  ({children, className, variant, ...props}, ref) => {
    const slots = React.useMemo(() => quickActionVariants({variant}), [variant]);

    return (
      <QuickActionContext value={{slots}}>
        <button ref={ref} className={slots.base({className})} type="button" {...props}>
          {children}
        </button>
      </QuickActionContext>
    );
  },
);

QuickActionRoot.displayName = "HeroUI.QuickAction";

/* -------------------------------------------------------------------------------------------------
 * QuickAction Icon
 * -----------------------------------------------------------------------------------------------*/
const QuickActionIcon = ({children, className, ...props}: ComponentPropsWithRef<"span">) => {
  const {slots} = useContext(QuickActionContext);

  return (
    <span className={slots?.icon({className})} {...props}>
      {children}
    </span>
  );
};

QuickActionIcon.displayName = "HeroUI.QuickAction.Icon";

/* -------------------------------------------------------------------------------------------------
 * QuickAction Label
 * -----------------------------------------------------------------------------------------------*/
const QuickActionLabel = ({children, className, ...props}: ComponentPropsWithRef<"span">) => {
  const {slots} = useContext(QuickActionContext);

  return (
    <span className={slots?.label({className})} {...props}>
      {children}
    </span>
  );
};

QuickActionLabel.displayName = "HeroUI.QuickAction.Label";

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {QuickActionRoot, QuickActionIcon, QuickActionLabel};
export type {QuickActionRootProps as QuickActionProps};
