import type { Meta, StoryObj } from "@storybook/react-vite";

import { CheckBox } from "./checkbox";
import { Container } from "../container";

const meta = {
  title: "Components/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Container>
      <CheckBox label={"check"} checked />
      <CheckBox label={"not check"} />
    </Container>
  ),
};
