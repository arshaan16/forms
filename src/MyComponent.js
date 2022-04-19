import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

export const data = [
    {
        id: 1,
        title: 'Beetlejuice',   
    },
    {
        id: 2,
        title: 'Ghostbusters',
    },
]

export function MyComponent({list}) {
    return (
        <DataTable
            columns={columns}
            data={list}
        />
    );
};
