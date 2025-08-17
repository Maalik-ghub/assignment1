import React from "react";
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { DataTableAny, Column } from "./DataTable.tsx";

interface User {
    id: number;
    name: string;
    age: number;
    email: string;
}

const columns: Column<User>[] = [
    { key: "name", label: "Name", sortable: true },
    { key: "age", label: "Age", sortable: true },
    { key: "email", label: "Email" }
];

const data: User[] = [
    { id: 1, name: "Alice", age: 30, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 25, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" }
];

const meta: Meta<typeof DataTableAny> = {
    title: 'Example/DataTable',
    component: DataTableAny,
};

export default meta;
type Story = StoryObj<typeof DataTableAny>;

export const Default: Story = {
    args: {
        data,
        columns,
    },
};

export const Loading: Story = {
    args: {
        data: [],
        columns,
        loading: true,
    },
};

export const Empty: Story = {
    args: {
        data: [],
        columns,
    },
};

export const Selectable: Story = {
    args: {
        data,
        columns,
        selectable: true,
        onRowSelect: (rows: User[]) => alert(`Selected: ${rows.map(r => r.name).join(", ")}`),
    },
};