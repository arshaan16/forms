import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
  },
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Age",
    selector: (row) => row.age,
  },
  {
    name: "Hobbies",
    selector: (row) => row.hobbies,
  },
  {
    name: "Fruits",
    selector: (row) => row.fruits,
  },
  {
    name: "isCool",
    selector: (row) => row.isCool,
  },
];

export function MyComponent({ list }) {
  return <DataTable columns={columns} data={list} />;
}
