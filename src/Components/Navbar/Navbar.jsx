import React from "react";
import dollerImage from "../../assets/dollar 1.png"

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="flex justify-between items-center gap-2 cursor-pointer font-bold">
            0 Coins
            <img src={dollerImage} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
