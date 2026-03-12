import type {Meta, StoryObj} from "@storybook/react";

import React, {useState} from "react";

import {PromptChip} from "../prompt-chip";

import {CommandBar} from "./index";

const SAMPLE_PROMPTS = [
  "What's my life story so far?",
  "Tell me about my family",
  "My happiest memories",
  "Who are my closest friends?",
];

const meta: Meta<typeof CommandBar> = {
  component: CommandBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/AI/CommandBar",
};

export default meta;

type Story = StoryObj<typeof CommandBar>;

export const Collapsed: Story = {
  render: () => (
    <div style={{width: 776}}>
      <CommandBar>
        <CommandBar.Input />
      </CommandBar>
    </div>
  ),
};

export const Expanded: Story = {
  render: () => (
    <div style={{width: 776}}>
      <CommandBar isOpen>
        <CommandBar.Panel>
          {SAMPLE_PROMPTS.map((prompt) => (
            <PromptChip key={prompt}>{prompt}</PromptChip>
          ))}
        </CommandBar.Panel>
        <CommandBar.Input />
      </CommandBar>
    </div>
  ),
};

const ToggleStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{width: 776}}>
      <CommandBar isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandBar.Panel>
          {SAMPLE_PROMPTS.map((prompt) => (
            <PromptChip key={prompt} onClick={() => setIsOpen(false)}>
              {prompt}
            </PromptChip>
          ))}
        </CommandBar.Panel>
        <CommandBar.Input />
      </CommandBar>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <ToggleStory />,
};
