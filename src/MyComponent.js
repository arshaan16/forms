import DataTable from "react-data-table-component";
import "./App.css";
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
    name: "Insta handle",
    selector: (row) => {
      return (
        <a href={`https://www.instagram.com/${row.insta}`} target="_blank">
          {row.insta}
        </a>
      );
    },
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
    selector: (row) => row.isCool.toString(),
  },
  { name: "Followers", selector: (row) => row.instaFollower },
];
export function MyComponent({ list, setList, loading }) {
  if (loading) {
    return <h1>LOADING...</h1>;
  } else {
    return (
      <>
        <DataTable
          className="table"
          columns={columns}
          onRowClicked={(row) => {
            let isDel = window.confirm("Are you sure you want to delete!!");
            if (isDel) {
              let arr = list.filter((item) => item.id !== row.id);
              setList(arr);

              localStorage.setItem("list", JSON.stringify(arr));
            }
          }}
          data={list}
        />
      </>
    );
  }
}
