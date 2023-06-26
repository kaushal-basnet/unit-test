"use client";
import { useState } from "react";

export default function Home() {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <h1>Jest</h1>;<button>click me</button>
      <div>
        <label htmlFor="randomText">Please enter random text:</label>
        <input id="randomText" />
      </div>
      <div>
        <label htmlFor="specificText">Please enter specific text:</label>
        <input id="specificText" />
      </div>
      <div>
        <input placeholder="search..." />
      </div>
      <div>
        <input value="kaushal" />
      </div>
      <div>
        <button
          onClick={() => setShowText(!showText)}
          className="border rounded-md border-black p-2 m-2 bg-slate-400 text-white"
        >
          show me the text
        </button>
        {showText && <span className="text-red-500">This is the text</span>}
      </div>
    </>
  );
}
