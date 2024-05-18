import React from "react"; 
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = { 
    title: "UI/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    };

    export default meta;
    type Story = StoryObj<typeof Checkbox>;


    export const WithoutLabel: Story = {
        render: () => {

            return ( 
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
              )  
        },
    };

    export const Checked: Story = {
        render: () => {

            return ( 
                <div className="flex items-center space-x-2">
                  <Checkbox checked={true} id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
              )  
        },
    };

    export const Disabled: Story = {
        render: () => {

            return ( 
                <div className="flex items-center space-x-2">
                  <Checkbox disabled={true} id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
              )  
        },
    };

    
    