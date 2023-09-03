import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Components/Cards";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "yash",
    age: 21
  }
  let newArray = [1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>

      <Cards username="Yash" btnText="Hi"/>
      <Cards username="Ayush" btnText="Hello"/>
    </>
  );
}

export default App;
