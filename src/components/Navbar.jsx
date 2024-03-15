import { useState } from "react";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  return (
    <div className="flex justify-between items-center py-5">
      <img src={assets.logo} alt="logo" className="w-40 cursor-pointer" />
      <ul className="flex gap-5 text-lg text-slate-500 ">
        <li
          onClick={() => setMenu("home")}
          className={`cursor-pointer hover:border-b-[3px] ${
            menu === "home" ? "pb-[3px] border-b-[3px]" : ""
          }`}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`cursor-pointer hover:border-b-[3px] ${
            menu === "menu" ? "pb-[3px] border-b-[3px]" : ""
          }`}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("about")}
          className={`cursor-pointer hover:border-b-[3px] ${
            menu === "about" ? "pb-[3px] border-b-[3px]" : ""
          }`}
        >
          About
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={`cursor-pointer hover:border-b-[3px] ${
            menu === "contact" ? "pb-[3px] border-b-[3px]" : ""
          }`}
        >
          Contact
        </li>
      </ul>
      <div className="flex items-center gap-10">
        <div className="flex px-4 py-1 rounded-full w-40 items-center border">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow w-14 hover:w-full outline-none"
          />
          <img
            src={assets.search_icon}
            alt="Search icon"
            className="cursor-pointer ml-2"
          />
        </div>

        <div className="relative ">
          <img
            src={assets.basket_icon}
            alt="shopping basket"
            className="cursor-pointer"
          />
          <div className="absolute -top-1 -right-2 bg-primary rounded-full p-[6px]"></div>
        </div>
        <button className="border border-primary rounded-full text-md text-slate-500 py-3 px-8 items-center text-center hover:bg-primary/30">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
