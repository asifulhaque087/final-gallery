import { Button } from '@src/components/roots';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Roos/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

const Wrapper = () => {
  return (
    <div className="p-[100px] border border-red-500">
      <Button />
    </div>
  );
};

export const Secondary: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {},
  render: () => <Wrapper />,
};
