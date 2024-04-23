"use client";

import { useState } from "react";
import Login from "./login";
import SignUp from "./signup";

const Authentication = () => {
  const [view, setView] = useState("login");

  return (
    <div className="w-full mb-6">
      <nav style={{
        position:"fixed",
        top:"1%",
        right:"1%",
      }}>
        <button
          onClick={() => setView("login")}
          className={`${
            view === "login" ? "border-2 border-white" : ""
          } hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-2xl me-4`}
        >
          Login
        </button>
        <button
          onClick={() => setView("signup")}
          className={`${
            view === "signup" ? "border-2 border-white" : ""
          } hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-2xl`}
        >
          Register
        </button>
      </nav>
      <div className="mt-12 w-full flex justify-center overflow-visible">
        {view === "signup" ? <SignUp setView={setView}/> : null}
        {view === "login" ? <Login  setView={setView}/> : null}
      </div>
    </div>
  );
};

export default Authentication;
