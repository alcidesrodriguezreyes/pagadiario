import React from "react";
import { StoryObj } from "@storybook/react";
import { Table } from "./table";

const meta = {
    title: "UI/Table",
    component: Table,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
    render: () => {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Jane</td>
                        <td>Doe</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>James</td>
                        <td>Smith</td>
                        <td>32</td>
                    </tr>
                </tbody>
            </Table>
        );
    },
};