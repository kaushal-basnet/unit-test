"use client";
import { useState } from "react";
import { UserProfile } from "./components/UserProfile";
import { UserList } from "./components/UserList";

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
          onClick={() => {
            setTimeout(() => {
              setShowText(!showText);
            }, 1100);
          }}
          className="border rounded-md border-black p-2 m-2 bg-slate-400 text-white"
        >
          show me the text
        </button>
        {showText && <span className="text-red-500">This is the text</span>}
      </div>
      <UserProfile
        displayName="kazikazikazikazikazikazikazi"
        userName="kaushal"
        email="kaushal@gmail.com"
        isEmailVerified={false}
      />
      <div>
        <UserList />
      </div>
    </>
  );
}
