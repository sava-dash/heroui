export {QuickActionRoot, QuickActionIcon, QuickActionLabel} from "./quick-action";
export type {QuickActionProps, QuickActionRootProps} from "./quick-action";
export {quickActionVariants, type QuickActionVariantProps} from "./quick-action.styles";

import {QuickActionIcon, QuickActionLabel, QuickActionRoot} from "./quick-action";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const QuickAction = Object.assign(QuickActionRoot, {
  Icon: QuickActionIcon,
  Label: QuickActionLabel,
});
