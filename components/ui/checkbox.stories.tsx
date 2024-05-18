import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "./checkbox"

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const WithText: Story = {
  render: (args) => {
    return (
      <div className="items-top flex space-x-2">
        <Checkbox {...args} id="terms1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    )
  },
}

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (args) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },

  render: (args) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Disabled
        </label>
      </div>
    )
  },
}
