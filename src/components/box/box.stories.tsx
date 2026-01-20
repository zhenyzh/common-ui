import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box} from "./box";

const meta = {
    title: "Components/Box",
    component: Box,
    parameters: {
        layout: "centered",
    },
    args: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllButtons: Story = {
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
            <Box>div</Box>
            <Box as={'button'}>button</Box>
            <Box as={'span'}>span</Box>
            <Box as='label'>label</Box>
            <Box as='section'>section</Box>
        </div>
    ),
};
