import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p className="text-gray-500 bg-red-600 text-5xl font-bold">New world</p>
        <div className="mt-5"></div>
        <button className="btn btn-dash">Default</button>
        <button className="btn btn-dash btn-primary">Primary</button>
        <button className="btn btn-dash btn-secondary">Secondary</button>
        <button className="btn btn-dash btn-accent">Accent</button>
        <button className="btn btn-dash btn-info">Info</button>
        <button className="btn btn-dash btn-success">Success</button>
        <button className="btn btn-dash btn-warning">Warning</button>
        <button className="btn btn-dash btn-error">Error</button>
      </div>
    </>
  );
}

export default App;
