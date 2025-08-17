import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';

import {Input} from "./Input.tsx";

const meta: Meta<typeof Input> = {
    title: 'Example/Input',
    component: Input,
};
 
export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
        helperText: "The name shouldn't exceed 16 characters",
        invalid: false,
        disabled: false
    },
};

export const Disabled: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
        helperText: "The name shouldn't exceed 16 characters",
        disabled: true,
        value: "",
        invalid: false
    },
};

export const Invalid: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
        helperText: "The name shouldn't exceed 16 characters",
        invalid: true,
        errorMessage: "Invalid username",
    },
};

export const Filled: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
        helperText: "The name shouldn't exceed 16 characters",
        invalid: false,
        disabled: false,
        variant: 'filled',
    },
};

export const Outlined: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
        helperText: "The name shouldn't exceed 16 characters",
        invalid: false,
        disabled: false,
        variant: 'outlined',
    },
};

export const Ghost: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
        helperText: "The name shouldn't exceed 16 characters",
        invalid: false,
        disabled: false,
        variant: 'ghost',
    },
};
