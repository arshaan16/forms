import { data, MyComponent } from "./MyComponent";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState(data);
  const [myAge, setAge] = useState(0);
  const [name, setName] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    setList([
      ...list,
      { id: Date.now() + Math.random(), title: name, age: myAge },
    ]);
  }
  console.log(list);
  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          value={name}
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="name"></label>
        <button>Submit</button>
      </form>
      <MyComponent list={list} />
    </>
  );
}
