import { useState } from "react";
import "./App.css";

function App() {
  let cnt = "counter Application";
  let [count, setCount] = useState(0);

  let add = () => {
    count++;
    setCount(count);
  };

  //jsx
  return (
    <div>
      <h1>{cnt}</h1>
      <h1>{count}</h1>
      <input type="button" value="increment" onClick={add} />
    </div>
  );
}

export default App;
