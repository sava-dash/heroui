export {CommandBarRoot, CommandBarInput, CommandBarPanel, CommandBarHint} from "./command-bar";
export type {
  CommandBarProps,
  CommandBarRootProps,
  CommandBarInputProps,
  CommandBarPanelProps,
} from "./command-bar";
export {commandBarVariants, type CommandBarVariantProps} from "./command-bar.styles";

import {CommandBarHint, CommandBarInput, CommandBarPanel, CommandBarRoot} from "./command-bar";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const CommandBar = Object.assign(CommandBarRoot, {
  Hint: CommandBarHint,
  Input: CommandBarInput,
  Panel: CommandBarPanel,
});
