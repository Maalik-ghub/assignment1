import React, { useState } from "react";
import './datatable.css';

export interface Column<T> {
    key: keyof T;
    label: string;
    sortable?: boolean;
    render?: (row: T) => React.ReactNode;
}

export interface DataTableProps<T extends { id: string | number }> {
    data: T[];
    columns: Column<T>[];
    loading?: boolean;
    selectable?: boolean;
    onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
    data,
    columns,
    loading = false,
    selectable = false,
    onRowSelect,
}: DataTableProps<T>) {
    const [sortKey, setSortKey] = useState<keyof T | null>(null);
    const [sortAsc, setSortAsc] = useState(true);
    const [selected, setSelected] = useState<Set<string | number>>(new Set());

    // Sorting logic
    const sortedData = React.useMemo(() => {
        if (!sortKey) return data;
        const sorted = [...data].sort((a, b) => {
            if (a[sortKey] < b[sortKey]) return sortAsc ? -1 : 1;
            if (a[sortKey] > b[sortKey]) return sortAsc ? 1 : -1;
            return 0;
        });
        return sorted;
    }, [data, sortKey, sortAsc]);

    // Selection logic
    const handleSelect = (row: T) => {
        const newSelected = new Set(selected);
        if (newSelected.has(row.id)) {
            newSelected.delete(row.id);
        } else {
            newSelected.add(row.id);
        }
        setSelected(newSelected);
        if (onRowSelect) {
            onRowSelect(data.filter(d => newSelected.has(d.id)));
        }
    };

    const handleSelectAll = () => {
        let newSelected: Set<string | number>;
        if (selected.size === data.length) {
            newSelected = new Set();
        } else {
            newSelected = new Set(data.map(row => row.id));
        }
        setSelected(newSelected);
        if (onRowSelect) {
            onRowSelect(data.filter(d => newSelected.has(d.id)));
        }
    };

    if (loading) {
        return <div className="datatable-loading">Loading...</div>;
    }

    if (!data.length) {
        return <div className="datatable-empty">No data available.</div>;
    }

    return (
        <table className="datatable-table">
            <thead className="datatable-thead">
                <tr className="datatable-header-row">
                    {selectable && (
                        <th className="datatable-th datatable-th-select">
                            <input
                                type="checkbox"
                                checked={selected.size === data.length && data.length > 0}
                                onChange={handleSelectAll}
                                aria-label="Select all rows"
                            />
                        </th>
                    )}
                    {columns.map(col => (
                        <th
                            key={String(col.key)}
                            className={
                                "datatable-th" +
                                (col.sortable ? " datatable-th-sortable" : "") +
                                (sortKey === col.key ? " datatable-th-active" : "")
                            }
                            onClick={() => {
                                if (col.sortable) {
                                    if (sortKey === col.key) {
                                        setSortAsc(!sortAsc);
                                    } else {
                                        setSortKey(col.key);
                                        setSortAsc(true);
                                    }
                                }
                            }}
                        >
                            {col.label}
                            {col.sortable && sortKey === col.key && (sortAsc ? " ▲" : " ▼")}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="datatable-tbody">
                {sortedData.map(row => (
                    <tr key={String(row.id)} className={
                        "datatable-row" +
                        (selected.has(row.id) ? " datatable-row-selected" : "")
                    }>
                        {selectable && (
                            <td className="datatable-td datatable-td-select">
                                <input
                                    type="checkbox"
                                    checked={selected.has(row.id)}
                                    onChange={() => handleSelect(row)}
                                    aria-label="Select row"
                                />
                            </td>
                        )}
                        {columns.map(col => (
                            <td key={String(col.key)} className="datatable-td">
                                {col.render ? col.render(row) : String(row[col.key])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

// For Storybook Docs compatibility
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DataTableAny = DataTable as any;