import type { Meta, StoryObj } from "@storybook/react-vite";

import { Line } from "./line";

const meta = {
  title: "Components/Line",
  component: Line,
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Line>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllLine: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "24px",
        flexDirection: "column",
        alignItems: "center",
        width: "250px",
      }}
    >
      <Line variant="vertical">vertical</Line>
      <Line variant="horizontal">horizontal</Line>
    </div>
  ),
};
