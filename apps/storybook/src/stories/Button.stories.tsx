import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    intent: { control: 'select', options: ['primary', 'secondary'], description: 'The color based look of the button' },
    size: { control: 'select', options: ['small', 'medium'], description: 'Dimensions of the button' },
    asChild: {
      control: 'boolean',
      description: 'Render the button as the element that is passed as a child, f.e a href tag'
    },
    children: { control: 'text', description: 'Can be text, or a component', defaultValue: "I'm a button" }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    // primary: true,
    label: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Button'
  }
};

export const Large: Story = {
  args: {
    size: 'medium',
    label: 'Button'
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button'
  }
};

export const HrefAsChild: Story = {
  args: {
    children: <a href="https://www.google.com">This is a tag</a>
  }
};
