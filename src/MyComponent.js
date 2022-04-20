import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Age",
    selector: (row) => row.age,
  },
];

export const data = [];

export function MyComponent({ list }) {
  return <DataTable columns={columns} data={list} />;
}
