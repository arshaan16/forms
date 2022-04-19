import {data,MyComponent} from "./MyComponent";
import { useState } from "react";


export default function App(){
  
  const [list,setList]=useState(data);
  const [name,setName]=useState('');
  function submitHandler(e){
    e.preventDefault();
    setList([...list,
      {id:Date.now() + Math.random(),title:name}])
  }
  console.log(list);
  return (
    <>
    <form onSubmit={(e)=>submitHandler(e)}>
    <input value={name}  id="name" onChange={(e)=>setName(e.target.value)}></input>
      <label htmlFor="name" ></label>
   <button>Submit</button>
    </form>
    <MyComponent list={list}/>
    </>
  )
}