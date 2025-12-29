import type { Meta, StoryObj } from "@storybook/react-vite";

import { Typography } from "../typography";
import { Container } from "./container";

const meta = {
  title: "Components/Container",
  component: Container,
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Container>
      <Typography variant="h2">basic</Typography>
    </Container>
  ),
};

export const AsSection: Story = {
  render: () => (
    <Container as="section">
      <Typography variant="h3">Card as section</Typography>
    </Container>
  ),
};
