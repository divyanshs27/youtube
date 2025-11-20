"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GOOGLE_SEARCH_API } from "../utils/constants";
import { addToSearchCache } from "../utils/searchSlice";
const Header = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => getSearchResults(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);
  const getSearchResults = async () => {
    console.log("Search Query:", searchQuery);
    if (searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery]);
      console.log("Using cached data");
      return;
    }
    const data = await fetch(GOOGLE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      addToSearchCache({
        [searchQuery]: json[1],
      })
    );
    console.log("google search results", json);
  };
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
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 px-5 rounded-r-full">
            🔍
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 w-148 shadow-lg rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 shadow-sm hover:bg-gray-100" onClick={()=>{setSearchQuery(s)}}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
