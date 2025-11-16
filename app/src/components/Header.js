'use client';
import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    console.log("toggle menu");
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg p-5 m-2">
      <div className="flex">
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="hamburgerImage"
          className="h-8 cursor-pointer"
          onClick={toggleMenuHandler}
        ></img>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvsQV0s-WIt9u_eoV-zLkOmLs_p1RO980CFuwxq7vGYOVtbP6X-rZWWjuBwxfWjTJBRo&usqp=CAU"
          alt="youtubeLogo"
          className="h-18"
          
        ></img>
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="">
        <img
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          width={25}
        ></img>
      </div>
    </div>
  );
};

export default Header;
