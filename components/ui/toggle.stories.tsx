import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Toggle,
} from "@/components/ui/toggle"
import { Italic } from "lucide-react";

type Story = StoryObj<typeof Toggle>;

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

export const Default: Story = {
  render: (args) => {
    return (
      <Toggle {...args}>
        <Italic className="h-4 w-4" />
      </Toggle>
    );
  },
};