import type {Meta, StoryObj} from "@storybook/react";

import React from "react";

import {MemoryCard} from "./index";

/* Figma MCP asset — portrait photo */
const imgPortrait = "http://localhost:3845/assets/c10a50e47f38075dfbf4a32e609a270b7bea016c.png";

const meta: Meta<typeof MemoryCard> = {
  argTypes: {
    hovered: {
      control: "boolean",
    },
    type: {
      control: "select",
      options: ["memory", "photo-story"],
    },
  },
  component: MemoryCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Data Display/MemoryCard",
};

export default meta;

type Story = StoryObj<typeof MemoryCard>;

export const Default: Story = {
  render: () => (
    <div style={{width: 327}}>
      <MemoryCard>
        <MemoryCard.Header>
          <MemoryCard.Badge>Memory</MemoryCard.Badge>
          <MemoryCard.XP />
        </MemoryCard.Header>
        <MemoryCard.Body>Describe the first home you remember living in</MemoryCard.Body>
      </MemoryCard>
    </div>
  ),
};

export const Hovered: Story = {
  render: () => (
    <div style={{width: 327}}>
      <MemoryCard hovered>
        <MemoryCard.Header>
          <MemoryCard.Badge>Memory</MemoryCard.Badge>
          <MemoryCard.XP />
        </MemoryCard.Header>
        <MemoryCard.Body>Describe the first home you remember living in</MemoryCard.Body>
      </MemoryCard>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div style={{width: 327}}>
      <MemoryCard type="photo-story">
        <MemoryCard.Header>
          <MemoryCard.Badge>Photo Story</MemoryCard.Badge>
          <MemoryCard.XP value={100} />
        </MemoryCard.Header>
        <MemoryCard.Image alt="Story cover photo" src={imgPortrait} />
        <MemoryCard.Body>Describe the first home you remember living in</MemoryCard.Body>
      </MemoryCard>
    </div>
  ),
};

export const WithImageHovered: Story = {
  render: () => (
    <div style={{width: 327}}>
      <MemoryCard hovered type="photo-story">
        <MemoryCard.Header>
          <MemoryCard.Badge>Photo Story</MemoryCard.Badge>
          <MemoryCard.XP value={100} />
        </MemoryCard.Header>
        <MemoryCard.Image alt="Story cover photo" src={imgPortrait} />
        <MemoryCard.Body>Describe the first home you remember living in</MemoryCard.Body>
      </MemoryCard>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4" style={{width: 700}}>
      {/* Memory — default */}
      <MemoryCard>
        <MemoryCard.Header>
          <MemoryCard.Badge>Memory</MemoryCard.Badge>
          <MemoryCard.XP />
        </MemoryCard.Header>
        <MemoryCard.Body>Describe the first home you remember living in</MemoryCard.Body>
      </MemoryCard>

      {/* Memory — hovered */}
      <MemoryCard hovered>
        <MemoryCard.Header>
          <MemoryCard.Badge>Memory</MemoryCard.Badge>
          <MemoryCard.XP />
        </MemoryCard.Header>
        <MemoryCard.Body>Describe the first home you remember living in</MemoryCard.Body>
      </MemoryCard>

      {/* Photo Story — default */}
      <MemoryCard type="photo-story">
        <MemoryCard.Header>
          <MemoryCard.Badge>Photo Story</MemoryCard.Badge>
          <MemoryCard.XP value={100} />
        </MemoryCard.Header>
        <MemoryCard.Image alt="Story cover" src={imgPortrait} />
        <MemoryCard.Body>Describe the first home you remember living in</MemoryCard.Body>
      </MemoryCard>

      {/* Photo Story — hovered */}
      <MemoryCard hovered type="photo-story">
        <MemoryCard.Header>
          <MemoryCard.Badge>Photo Story</MemoryCard.Badge>
          <MemoryCard.XP value={100} />
        </MemoryCard.Header>
        <MemoryCard.Image alt="Story cover" src={imgPortrait} />
        <MemoryCard.Body>Describe the first home you remember living in</MemoryCard.Body>
      </MemoryCard>
    </div>
  ),
};
