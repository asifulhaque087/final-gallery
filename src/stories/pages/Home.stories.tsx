import { Home } from '@src/components/pages';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pages/Home',
  component: Home,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper = () => {
  return <Home />;
};

export const Primary: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {},
  render: () => <Wrapper />,
};
