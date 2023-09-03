import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15); //setCounter is reference variable we can name it according to our choice
  // let counter = 5;
  const addValue = () => {
    // setCounter(counter+1); //it will increase the value by 1
    //the lower function will increase the value by 4 at a time.
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    
  };

  const removeValue = () => {
    setCounter(counter-1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br /><br />
      <button onClick={removeValue}>Decrease value {counter}</button>
      
    </>
  );
}

export default App;
