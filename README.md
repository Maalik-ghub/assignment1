# Assignment 1 – React Component Library

This project is a React component library featuring reusable UI components such as `Input` and `DataTable`, documented and tested with Storybook.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Component Documentation](#component-documentation)
  - [Input](#input)
  - [DataTable](#datatable)
- [Storybook](#storybook)
- [Project Structure](#project-structure)

---

## Features

- **Reusable React Components:** Includes `Input` and `DataTable` with customizable props.
- **Storybook Integration:** Visual documentation and playground for all components.
- **TypeScript Support:** Type-safe components and props.
- **Autodocs:** Automatic documentation generation for all components.
- **Ready for Deployment:** Build scripts for production-ready Storybook.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (v7 or higher recommended)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Maalik-ghub/assignment1.git
   cd assignment1
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

---

## Available Scripts

- **Start Storybook:**
  ```sh
  npm run storybook
  ```
  Runs Storybook in development mode at [http://localhost:6006](http://localhost:6006).

- **Build Storybook:**
  ```sh
  npm create storybook
  ```
  Builds the static Storybook site.

---

## Component Documentation

### Input

A customizable input component supporting variants, sizes, states, and more.

**Props:**
- `variant`: `'filled' | 'outlined' | 'ghost'`
- `size`: `'sm' | 'md' | 'lg'`
- `disabled`: `boolean`
- `invalid`: `boolean`
- `loading`: `boolean`
- `placeholder`: `string`
- `value`: `string`
- `onChange`: `(e: React.ChangeEvent<HTMLInputElement>) => void`

**Usage:**
```tsx
import { Input } from './src/stories/Input';

<Input
  variant="outlined"
  size="md"
  placeholder="Enter text"
  onChange={...}
/>
```

### DataTable

A flexible data table component for displaying tabular data.

**Props:**
- `columns`: `Array<{ key: string; label: string }>`
- `data`: `Array<Record<string, any>>`
- `onRowClick?`: `(row: any) => void`

**Usage:**
```tsx
import { DataTable } from './src/stories/DataTable';

<DataTable
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
  ]}
  data={[
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
  ]}
/>
```

---

## Storybook

Storybook is used for developing and documenting components.

- **Start Storybook:** `npm run storybook`
- **Build Storybook:** `npm create storybook`
- **Autodocs:** Docs are auto-generated from your stories files.

---

## Project Structure

```
assignment1/
├── src/
│   └── stories/
│       ├── Input.tsx
│       ├── Input.stories.ts
│       ├── DataTable.tsx
│       ├── DataTable.stories.ts
│       └── input.css
├── .gitignore
├── package.json
├── README.md
└── ...
```
