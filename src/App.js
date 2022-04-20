import { data, MyComponent } from "./MyComponent";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState(data);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  function submitHandler(e) {
    e.preventDefault();
    setList([...list, { id: Date.now() + Math.random(), title: name }]);
  }
  console.log(list);
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
