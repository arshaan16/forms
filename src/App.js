import { MyComponent } from "./MyComponent";
import { useState } from "react";

let myId = localStorage.getItem("id")
  ? JSON.parse(localStorage.getItem("id"))
  : 0;
//let myId = 0;
function getList() {
  if (localStorage.getItem("list")) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
}

export default function App() {
  const [list, setList] = useState(getList());
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    list.push({
      id: myId++,
      title: name,
      age: age,
    });
    let arr = [...list];
    setList(arr);
    localStorage.setItem("id", myId);
    localStorage.setItem("list", JSON.stringify(arr));
  }
  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="name">Name </label>
        <input
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label htmlFor="age">Age </label>
        <input
          value={age}
          id="age"
          type="number"
          onChange={(e) => setAge(e.target.value)}
        ></input>

        <button>Submit</button>
      </form>
      <MyComponent list={list} />
    </>
  );
}
