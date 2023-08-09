import { useState } from "react";
import { logoImages } from "./services/sources/images.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const upCount = () => setCount((count) => count + 1);

  return (
    <>
      <div>
        <a href={logoImages.buzzer} target="_blank" rel="noreferrer">
          <img src={logoImages.buzzer} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={logoImages.buzzer}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Inquizition</h1>
      <div className="card">
        <button onClick={upCount}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
