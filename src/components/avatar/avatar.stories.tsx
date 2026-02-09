import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "./avatar";
import defaultAvatar from "../../icons/default-avatar.png";

const meta: Meta<typeof Avatar> = {
  title: "entities/Avatar",
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    image: defaultAvatar,
  },
};
