import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
  } from "@/components/ui/sheet"

type Story = StoryObj<typeof Sheet>;

const meta: Meta<typeof Sheet> = {
  title: "UI/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

export const Default: Story = {
    render: () => {
        return (
            <Sheet>
            <SheetTrigger>Trigger</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Title</SheetTitle>
                <SheetDescription>Description</SheetDescription>
              </SheetHeader>
              <SheetFooter>Footer</SheetFooter>
            </SheetContent>
          </Sheet>
        );
    },
    };


