import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import type { Area } from "react-easy-crop";

import { Card } from "../card";
import { Typography } from "../typography";
import { FileUploader } from "./fileUploader";

const meta = {
  title: "Components/fileUploader",
  component: FileUploader,
  parameters: {
    layout: "centered",
  },
  args: {
    onFileSelect: () => {},
  },
} satisfies Meta<typeof FileUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Upload Cover Image",
  },
  render: (args) => (
    <div style={{ width: "300px" }}>
      <FileUploader {...args} />
    </div>
  ),
};
