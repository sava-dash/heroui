"use client";

import type {CommandBarVariantProps} from "./command-bar.styles";
import type {ComponentPropsWithRef} from "react";

import React, {createContext, useContext} from "react";

import {commandBarVariants} from "./command-bar.styles";

/* Figma MCP assets — fixed icons */
const imgCmdPiece1 = "http://localhost:3845/assets/697428f1e1a79bfccc7dee5057a3d6760800a55b.svg";
const imgCmdPiece2 = "http://localhost:3845/assets/5d1faf44113b26bb2de489a71b31988257bf40b1.svg";
const imgCmdPiece3 = "http://localhost:3845/assets/dde38aae9235bcbcb64da9331a67fba363ca462a.svg";
const imgCmdPiece4 = "http://localhost:3845/assets/e86ffd9cb66d846209c91f1d1cdb0ebfddf60aba.svg";
const imgCmdPiece5 = "http://localhost:3845/assets/d60561b50fcaf357e1dc4eee3ced1c7b9cac7f8a.svg";
const imgSearch = "http://localhost:3845/assets/c87fc5a17450d2e515ea28e2209c99161bfaa25c.svg";
const imgMic = "http://localhost:3845/assets/af1ed1fc3ca5cb0d635684420a9b31d063fe8f34.svg";
const imgSend = "http://localhost:3845/assets/73b13c86027b65b71966c966bb1690c84c94fb2a.svg";
const imgClose = "http://localhost:3845/assets/466d8251ad5b1221994e1c965772330da992064e.svg";
const imgSparkle = "http://localhost:3845/assets/7b7187cd56ff96b6b8ac007ed0b2c185e256530b.svg";

/* -------------------------------------------------------------------------------------------------
 * CommandBar Context
 * -----------------------------------------------------------------------------------------------*/
type CommandBarContextType = {
  slots?: ReturnType<typeof commandBarVariants>;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const CommandBarContext = createContext<CommandBarContextType>({});

/* -------------------------------------------------------------------------------------------------
 * CommandBar Root
 * -----------------------------------------------------------------------------------------------*/
export interface CommandBarRootProps
  extends Omit<ComponentPropsWithRef<"div">, keyof CommandBarVariantProps>, CommandBarVariantProps {
  children?: React.ReactNode;
  /** Whether the prompts panel is open */
  isOpen?: boolean;
  /** Callback fired when the open state changes */
  onOpenChange?: (open: boolean) => void;
}

const CommandBarRoot = React.forwardRef<HTMLDivElement, CommandBarRootProps>(
  ({children, className, isOpen = false, onOpenChange, ...props}, ref) => {
    const slots = React.useMemo(() => commandBarVariants({isOpen}), [isOpen]);

    return (
      <CommandBarContext value={{isOpen, onOpenChange, slots}}>
        <div ref={ref} className={slots.root({className})} {...props}>
          <div className={slots.card()}>
            {children}
            {!!isOpen && (
              <button
                aria-label="Close command bar"
                className={slots.closeButton()}
                type="button"
                onClick={() => onOpenChange?.(false)}
              >
                <img alt="" className="size-5" src={imgClose} />
              </button>
            )}
          </div>
          <CommandBarHint />
        </div>
      </CommandBarContext>
    );
  },
);

CommandBarRoot.displayName = "HeroUI.CommandBar";

/* -------------------------------------------------------------------------------------------------
 * CommandBar Input Row
 * -----------------------------------------------------------------------------------------------*/
export interface CommandBarInputProps extends ComponentPropsWithRef<"div"> {
  placeholder?: string;
  onSendClick?: () => void;
}

const CommandBarInput = ({
  className,
  onSendClick,
  placeholder = "Ask me anything... (⌘K)",
  ...props
}: CommandBarInputProps) => {
  const {isOpen, onOpenChange, slots} = useContext(CommandBarContext);

  return (
    <div className={slots?.inputRow({className})} {...props}>
      {/* ⌘ key button */}
      <button
        aria-label="Open command menu"
        className={slots?.keyButton()}
        type="button"
        onClick={() => onOpenChange?.(!isOpen)}
      >
        <span className="relative size-5 overflow-clip rounded-[5px]">
          <img
            alt=""
            className="absolute block max-w-none"
            src={imgCmdPiece1}
            style={{inset: "33.33%"}}
          />
          <img
            alt=""
            className="absolute block max-w-none"
            src={imgCmdPiece2}
            style={{inset: "66.67% 8.33% 8.33% 66.67%"}}
          />
          <img
            alt=""
            className="absolute block max-w-none"
            src={imgCmdPiece3}
            style={{inset: "66.67% 66.66% 8.33% 8.34%"}}
          />
          <img
            alt=""
            className="absolute block max-w-none"
            src={imgCmdPiece4}
            style={{inset: "8.34% 8.33% 66.66% 66.67%"}}
          />
          <img
            alt=""
            className="absolute block max-w-none"
            src={imgCmdPiece5}
            style={{inset: "8.34% 66.66% 66.66% 8.34%"}}
          />
        </span>
      </button>

      {/* Search icon + placeholder */}
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <img alt="" className="size-5 shrink-0 opacity-50" src={imgSearch} />
        <span className="truncate text-sm text-[#52525b] opacity-50">{placeholder}</span>
      </div>

      {/* Voice button */}
      <button className={slots?.voiceButton()} type="button">
        <img alt="" className="size-5" src={imgMic} />
        <span>Voice</span>
      </button>

      {/* Send button */}
      <button
        aria-label="Send"
        className={slots?.sendButton()}
        type="button"
        onClick={onSendClick ?? (() => onOpenChange?.(!isOpen))}
      >
        <img alt="" className="relative size-5" src={imgSend} />
      </button>
    </div>
  );
};

CommandBarInput.displayName = "HeroUI.CommandBar.Input";

/* -------------------------------------------------------------------------------------------------
 * CommandBar Panel (prompts)
 * -----------------------------------------------------------------------------------------------*/
export interface CommandBarPanelProps extends ComponentPropsWithRef<"div"> {
  title?: string;
}

const CommandBarPanel = ({
  children,
  className,
  title = "What's on your mind?",
  ...props
}: CommandBarPanelProps) => {
  const {isOpen, slots} = useContext(CommandBarContext);

  if (!isOpen) return null;

  return (
    <div className={slots?.panel({className})} {...props}>
      {/* Panel header: sparkle + title */}
      <div className={slots?.panelHeader()}>
        <img alt="" className="size-8" src={imgSparkle} />
        <span className="text-center text-base text-[#11181c]">{title}</span>
      </div>

      {/* Chips */}
      <div className={slots?.panelChips()}>{children}</div>
    </div>
  );
};

CommandBarPanel.displayName = "HeroUI.CommandBar.Panel";

/* -------------------------------------------------------------------------------------------------
 * CommandBar Hint
 * -----------------------------------------------------------------------------------------------*/
const CommandBarHint = ({children, className, ...props}: ComponentPropsWithRef<"p">) => {
  const {slots} = useContext(CommandBarContext);

  return (
    <p className={slots?.hint({className})} {...props}>
      {children ?? "Press ⌘K to open · Ask questions, navigate, or create content"}
    </p>
  );
};

CommandBarHint.displayName = "HeroUI.CommandBar.Hint";

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {CommandBarRoot, CommandBarInput, CommandBarPanel, CommandBarHint};
export type {CommandBarRootProps as CommandBarProps};
