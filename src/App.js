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
  const [hobbies, setHobbies] = useState("");
  const [fruit, setFruit] = useState("Mango");
  const [isCool, setCool] = useState(false);
  function submitHandler(e) {
    e.preventDefault();
    list.push({
      id: myId++,
      title: name,
      age: age,
      hobbies: hobbies,
      fruits: fruit,
      isCool: isCool,
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

        <label htmlFor="hobbies">Hobbies </label>
        <input
          value={hobbies}
          id="hobbies"
          type="text"
          onChange={(e) => setHobbies(e.target.value)}
        ></input>

        <label htmlFor="fruits">Choose a fruits:</label>
        <select
          name="fruits"
          id="fruits"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        >
          <option value="Mango">Mango</option>
          <option value="Apple">Apple</option>
          <option value="Orange">Orange</option>
          <option value="Banana">Banana</option>
        </select>

        <input
          type="checkbox"
          id="Cooler"
          name="Cooler"
          value={isCool}
          onClick={() => {
            setCool(!isCool);
          }}
        />
        <label htmlFor="Cooler"> I am Cool</label>
        <button>Submit</button>
      </form>
      <MyComponent list={list} />
    </>
  );
}
