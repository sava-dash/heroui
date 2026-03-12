export {
  MemoryCardRoot,
  MemoryCardHeader,
  MemoryCardBadge,
  MemoryCardXP,
  MemoryCardImage,
  MemoryCardBody,
} from "./memory-card";
export type {MemoryCardProps, MemoryCardRootProps} from "./memory-card";
export {memoryCardVariants, type MemoryCardVariantProps} from "./memory-card.styles";

import {
  MemoryCardBadge,
  MemoryCardBody,
  MemoryCardHeader,
  MemoryCardImage,
  MemoryCardRoot,
  MemoryCardXP,
} from "./memory-card";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const MemoryCard = Object.assign(MemoryCardRoot, {
  Badge: MemoryCardBadge,
  Body: MemoryCardBody,
  Header: MemoryCardHeader,
  Image: MemoryCardImage,
  XP: MemoryCardXP,
});
