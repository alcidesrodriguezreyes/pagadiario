import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Bold, Italic, Underline } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from './toggle-group';

const meta: Meta<typeof ToggleGroup> = {
  title: 'UI/ToggleGroup',
  tags: ['autodocs'],
  component: ToggleGroup,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['single', 'multiple'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'outline'],
      },
    },
  }
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => {

    return (
      <ToggleGroup {...args}>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    )
  }
};


export const Single: Story = {
  args: {
    type: 'single',
  },
  render: (args) => {

    return (
      <ToggleGroup {...args}>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    )
  }
};
