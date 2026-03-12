import type {Meta, StoryObj} from "@storybook/react";

import React from "react";

import {QuickAction} from "./index";

/* Figma MCP assets */
const imgIconShuffle = "http://localhost:3845/assets/c8fcc03a18fa40d4d49de0f8964b644fcdaa7436.svg";
const imgIconShuffleActive =
  "http://localhost:3845/assets/2bb6808ab11dbe5bc06522b4c977be5d00a28c56.svg";

const meta: Meta<typeof QuickAction> = {
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "active"],
    },
  },
  component: QuickAction,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/AI/QuickAction",
};

export default meta;

type Story = StoryObj<typeof QuickAction>;

export const Default: Story = {
  render: () => (
    <QuickAction>
      <QuickAction.Icon>
        <img alt="" className="size-full" src={imgIconShuffle} />
      </QuickAction.Icon>
      <QuickAction.Label>Shuffle</QuickAction.Label>
    </QuickAction>
  ),
};

export const Active: Story = {
  render: () => (
    <QuickAction variant="active">
      <QuickAction.Icon>
        <img alt="" className="size-full" src={imgIconShuffleActive} />
      </QuickAction.Icon>
      <QuickAction.Label>Shuffle</QuickAction.Label>
    </QuickAction>
  ),
};

export const BothVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <QuickAction>
        <QuickAction.Icon>
          <img alt="" className="size-full" src={imgIconShuffle} />
        </QuickAction.Icon>
        <QuickAction.Label>Shuffle</QuickAction.Label>
      </QuickAction>
      <QuickAction variant="active">
        <QuickAction.Icon>
          <img alt="" className="size-full" src={imgIconShuffleActive} />
        </QuickAction.Icon>
        <QuickAction.Label>Shuffle</QuickAction.Label>
      </QuickAction>
    </div>
  ),
};
