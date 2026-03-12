"use client";

import type {MemoryCardVariantProps} from "./memory-card.styles";
import type {ComponentPropsWithRef} from "react";

import React, {createContext, useContext} from "react";

import {memoryCardVariants} from "./memory-card.styles";

/* Figma MCP assets */
const imgSparkle = "http://localhost:3845/assets/6b86fc14d82734e84edb2204e8ae8ee3cf1df703.svg";
const imgChevronRight = "http://localhost:3845/assets/c5df0a0f50e7d50daf141f5518e6e279884153c8.svg";

/* -------------------------------------------------------------------------------------------------
 * MemoryCard Context
 * -----------------------------------------------------------------------------------------------*/
type MemoryCardContext = {
  slots?: ReturnType<typeof memoryCardVariants>;
  type?: "memory" | "photo-story";
};

const MemoryCardContext = createContext<MemoryCardContext>({});

/* -------------------------------------------------------------------------------------------------
 * MemoryCard Root
 * -----------------------------------------------------------------------------------------------*/
export interface MemoryCardRootProps
  extends Omit<ComponentPropsWithRef<"div">, keyof MemoryCardVariantProps>, MemoryCardVariantProps {
  children?: React.ReactNode;
}

const MemoryCardRoot = React.forwardRef<HTMLDivElement, MemoryCardRootProps>(
  ({children, className, hovered, type, ...props}, ref) => {
    const slots = React.useMemo(() => memoryCardVariants({hovered, type}), [type, hovered]);

    return (
      <MemoryCardContext value={{slots, type}}>
        <div ref={ref} className={slots.base({className})} {...props}>
          <div className={slots.inner()}>{children}</div>
          {!!hovered && (
            <div className={slots.action()}>
              <img alt="" className="absolute block size-full max-w-none" src={imgChevronRight} />
            </div>
          )}
        </div>
      </MemoryCardContext>
    );
  },
);

MemoryCardRoot.displayName = "HeroUI.MemoryCard";

/* -------------------------------------------------------------------------------------------------
 * MemoryCard Header
 * -----------------------------------------------------------------------------------------------*/
const MemoryCardHeader = ({children, className, ...props}: ComponentPropsWithRef<"div">) => {
  const {slots} = useContext(MemoryCardContext);

  return (
    <div className={slots?.header({className})} {...props}>
      {children}
    </div>
  );
};

MemoryCardHeader.displayName = "HeroUI.MemoryCard.Header";

/* -------------------------------------------------------------------------------------------------
 * MemoryCard Badge
 * -----------------------------------------------------------------------------------------------*/
const MemoryCardBadge = ({children, className, ...props}: ComponentPropsWithRef<"div">) => {
  const {slots} = useContext(MemoryCardContext);

  return (
    <div className={slots?.badge({className})} {...props}>
      <span className={slots?.badgeLabel()}>{children}</span>
    </div>
  );
};

MemoryCardBadge.displayName = "HeroUI.MemoryCard.Badge";

/* -------------------------------------------------------------------------------------------------
 * MemoryCard XP
 * -----------------------------------------------------------------------------------------------*/
interface MemoryCardXPProps extends ComponentPropsWithRef<"div"> {
  value?: number;
}

const MemoryCardXP = ({className, value = 100, ...props}: MemoryCardXPProps) => {
  const {slots} = useContext(MemoryCardContext);

  return (
    <div className={slots?.xp({className})} {...props}>
      <img alt="" className="size-5 shrink-0" src={imgSparkle} />
      <span className={slots?.xpLabel()}>{value} XP</span>
    </div>
  );
};

MemoryCardXP.displayName = "HeroUI.MemoryCard.XP";

/* -------------------------------------------------------------------------------------------------
 * MemoryCard Image
 * -----------------------------------------------------------------------------------------------*/
interface MemoryCardImageProps extends ComponentPropsWithRef<"div"> {
  src: string;
  alt?: string;
}

const MemoryCardImage = ({alt = "", className, src, ...props}: MemoryCardImageProps) => {
  const {slots} = useContext(MemoryCardContext);

  return (
    <div className={slots?.imageWrapper({className})} style={{aspectRatio: "295/165"}} {...props}>
      <img
        alt={alt}
        className="absolute inset-0 size-full max-w-none rounded-lg object-cover"
        src={src}
      />
    </div>
  );
};

MemoryCardImage.displayName = "HeroUI.MemoryCard.Image";

/* -------------------------------------------------------------------------------------------------
 * MemoryCard Body
 * -----------------------------------------------------------------------------------------------*/
const MemoryCardBody = ({children, className, ...props}: ComponentPropsWithRef<"p">) => {
  const {slots} = useContext(MemoryCardContext);

  return (
    <p className={slots?.body({className})} {...props}>
      {children}
    </p>
  );
};

MemoryCardBody.displayName = "HeroUI.MemoryCard.Body";

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  MemoryCardRoot,
  MemoryCardHeader,
  MemoryCardBadge,
  MemoryCardXP,
  MemoryCardImage,
  MemoryCardBody,
};
export type {MemoryCardRootProps as MemoryCardProps};
