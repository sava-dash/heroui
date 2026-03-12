import type {Meta, StoryObj} from "@storybook/react";

import React from "react";

import {PromptChip} from "./index";

const meta: Meta<typeof PromptChip> = {
  component: PromptChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/AI/PromptChip",
};

export default meta;

type Story = StoryObj<typeof PromptChip>;

export const Default: Story = {
  args: {
    children: "What's my life story so far?",
  },
};

export const AllChips: Story = {
  render: () => (
    <div className="flex max-w-md flex-wrap gap-3">
      <PromptChip>What's my life story so far?</PromptChip>
      <PromptChip>Tell me about my family</PromptChip>
      <PromptChip>My happiest memories</PromptChip>
      <PromptChip>Who are my closest friends?</PromptChip>
    </div>
  ),
};
