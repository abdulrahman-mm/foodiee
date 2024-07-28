import React from "react";
import foodie_logo from "../assets/logo.png";

function Header() {
  return (
    <nav className="flex justify-between px-4 py-3 items-center relative">
      <div>
        <img className="h-8 w-20" src={foodie_logo}></img>
      </div>

        <button className=" bg-orange-500 text-white px-5 py-2 rounded-3xl font-bold">
          Join the Waitlist
        </button>

      <span
        className="h-8 absolute bottom-0 right-0 top-10 blur-xl "
        style={{ background: "rgb(255, 0, 80)",width:"410px",}}
      ></span>

      
    </nav>
  );
}

export default Header;
