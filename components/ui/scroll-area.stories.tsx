import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./scroll-area";


const meta: Meta<typeof ScrollArea> = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
    render: () => {
        return (
            <ScrollArea />
        );
    },
    };

export const WithChildren: Story = {        

    render: () => {
        return (
            <ScrollArea>
                <div className="h-[200px] w-[200px] bg-gray-200"></div>
            </ScrollArea>
        );
    },
    };

export const WithHorizontalScrollbar: Story = {
    render: () => {
        return (
            <ScrollArea>
                <div className="h-[200px] w-[200px] bg-gray-200"></div>
            </ScrollArea>
        );
    },
    };

export const WithVerticalScrollbar: Story = {
    render: () => {
        return (
            <ScrollArea>
                <div className="h-[200px] w-[200px] bg-gray-200"></div>
            </ScrollArea>
        );
    },
    };

export const WithBothScrollbars: Story = {
    render: () => {
        return (
            <ScrollArea>
                <div className="h-[200px] w-[200px] bg-gray-200"></div>
            </ScrollArea>
        );
    },
    };

export const WithCustomScrollbar: Story = {
    render: () => {
        return (
            <ScrollArea>
                <div className="h-[200px] w-[200px] bg-gray-200"></div>
            </ScrollArea>
        );
    },
    };

export const WithCustomScrollbarThumb: Story = {
    render: () => {
        return (
            <ScrollArea>
                <div className="h-[200px] w-[200px] bg-gray-200"></div>
            </ScrollArea>
        );
    },
    };

export const WithCustomScrollbarTrack: Story = {
    render: () => {
        return (
            <ScrollArea>
                <div className="h-[200px] w-[200px] bg-gray-200"></div>
            </ScrollArea>
        );
    },
    };

export const WithCustomScrollbarCorner: Story = {
    render: () => {
        return (
            <ScrollArea>
                <div className="h-[200px] w-[200px] bg-gray-200"></div>
            </ScrollArea>
        );
    },
    };

export const WithCustomScrollbarOrientation: Story = {
    render: () => {
        return (
            <ScrollArea>
                <div className="h-[200px] w-[200px] bg-gray-200"></div>
            </ScrollArea>
        );
    },
    };

    
