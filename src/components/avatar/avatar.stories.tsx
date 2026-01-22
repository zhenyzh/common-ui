import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "entities/Avatar",
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    image: "https://unsplash.it/182/182",
  },
};
