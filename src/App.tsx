import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(2);

  return (
    <>
      <h1>Tim's Portfolio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          I love you {count} times more
        </button>
      </div>
    </>
  );
}

export default App;
