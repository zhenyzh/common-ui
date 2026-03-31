import type { Meta, StoryObj } from "@storybook/react-vite";

import { ImageCropper } from "./imageCropper";

const meta = {
  title: "Components/imageCropper",
  component: ImageCropper,
  parameters: {
    layout: "centered",
  },
  args: {
    isOpen: false,
    onClose: () => {},
    onCropComplete: () => {},
    imageSrc: "",
  },
} satisfies Meta<typeof ImageCropper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample image for demonstration
const sampleImageSrc = "https://com";

export const SquareCrop: Story = {
  args: {
    isOpen: true,
    imageSrc: sampleImageSrc,
    cropShape: "rect",
  },
};

export const RoundCrop: Story = {
  args: {
    isOpen: true,
    imageSrc: sampleImageSrc,
    cropShape: "round",
  },
};
