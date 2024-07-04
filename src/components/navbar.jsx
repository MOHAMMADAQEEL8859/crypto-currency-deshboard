import React from "react";
import logo from "../logo/logo.png";

//This is Navbar with Almabetter logo
const Navbar = () => {
  return (
    <div className="h-[50px] bg-gray-300 border-black pl-5 py-3 border">
      <img className="h-5" src={logo} alt="almabetter logo" />
    </div>
  );
};

export default Navbar;
