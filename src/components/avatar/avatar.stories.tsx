import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "./avatar";
import DefaultAvatarIcon from "../../icons/img/default-avatar.jpg";

const meta: Meta<typeof Avatar> = {
  title: "entities/Avatar",
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    image: DefaultAvatarIcon,
  },
};
