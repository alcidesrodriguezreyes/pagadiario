import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './input';

const meta: Meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Input',
  },
};

export const File: Story = {
  args: {
    type: 'file',
  },
};
