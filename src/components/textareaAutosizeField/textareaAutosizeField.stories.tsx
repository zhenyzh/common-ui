import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextareaAutosizeField } from "./textareaAutosizeField";

import { SearchIcon } from "../../icons";

const meta = {
  title: "Components/TextareaAutosizeField",
  component: TextareaAutosizeField,
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof TextareaAutosizeField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Some label",
    placeholder: "Some placeholder",
  },
};

export const Disabled: Story = {
  args: {
    label: "Some label",
    placeholder: "Some placeholder",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: "Some label",
    placeholder: "Some placeholder",
    errorMessage: "Some error message",
  },
};

export const lengthValue: Story = {
  args: {
    label: "Some label",
    placeholder: "Some placeholder",
    value:
      "Самый длинный текст Самый длинный текст Самый длинный текстСамый длинный текстСамый длинный текстСамый длинный текстСамый длинный текстСамый длинный текстСамый длинный текстСамый длинный текстСамый длинный текст",
  },
};
