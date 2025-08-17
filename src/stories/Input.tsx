import React from "react";
import './input.css';

export interface InputFieldProps {  
value?: string;  
onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;  
label?: string;  
placeholder?: string;  
helperText?: string;  
errorMessage?: string;  
disabled?: boolean;  
invalid?: boolean;  
loading?: boolean;  
variant?: 'filled' | 'outlined' | 'ghost';  
size?: 'sm' | 'md' | 'lg';
}

export const Input = ({
    value = "",
    label = "User Input",
    placeholder = "Enter your username",
    helperText = "The name shouldn't exceed 16 characters",
    errorMessage = "",
    disabled = false,
    invalid = false,
    loading = false,
    variant = "outlined",
    size = "md",
    ...props
}: InputFieldProps) => {
let inputStyle: React.CSSProperties = {};
let inputSize: React.CSSProperties = {};
let inputState: React.CSSProperties = {};
let classNameForErrorCheck: string = "input";
if(invalid) {
    classNameForErrorCheck = "input error";
    helperText = "Enter a valid username";
} else if(disabled){
    classNameForErrorCheck = "input";
    helperText = "Can't type right now";
} else if(loading){ 
    classNameForErrorCheck = "input-loading";
    placeholder = "Loading...";
    helperText = "...";
}
if (variant === "filled" && !disabled && !invalid) {
    inputStyle = {
        border: "1px solid #ccc",
        backgroundColor: "#f5f5f5",
    };
} else if (variant === "outlined" && !disabled && !invalid) {
    inputStyle = {
        border: "2px solid #1976d2",
        backgroundColor: "white",
    };
} else if (variant === "ghost" && !disabled && !invalid) {
    inputStyle = {
        border: "none",
        backgroundColor: "transparent",
    };
}
if (disabled) {
    placeholder = "disabled";
    inputState = {
        backgroundColor: "gray",
    };
} else if (invalid) {
    placeholder = errorMessage;
    inputState = {
        border: "2px solid red",
        backgroundColor: "white",
    };
} else {
    inputState = {
        border: "1px solid #ccc",
        backgroundColor: "white",
    };
}
if (size === "sm") {
    inputSize = {
        width: "150px",
        height: "30px",
    };
} else if (size === "md") {
    inputSize = {
        width: "200px",
        height: "40px",
    };
} else if (size === "lg") {
    inputSize = {
        width: "300px",
        height: "50px",
    };
}
return (
    <>
    <p className="input-label">{label}</p>
    <input placeholder={placeholder}
           className={classNameForErrorCheck}
           value={value}
           disabled={disabled}
           style={{...inputState, ...inputStyle, ...inputSize}}
           onChange={props.onChange}>
    </input>
    <p className="helper-text" style={{ color: invalid ? '#e53935' : '#757575' }}>{helperText}</p>
    </>
)
}

// For Storybook Docs compatibility
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const InputAny = Input as any;