import React from "react";
import { StoryObj } from "@storybook/react";
import { Select } from "./select";

const meta = {
    title: "UI/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: () => {
        return (
            <Select defaultValue="comfortable">
                <option value="default">Default</option>
                <option value="comfortable">Comfortable</option>
                <option value="compact">Compact</option>
                <option value="compact">Compact</option>
                <option value="compact">Compact</option>
            </Select>
        );
    },
};