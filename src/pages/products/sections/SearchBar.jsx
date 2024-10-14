import React, { useState } from "react";
import Button from "../../../components/Button";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setSearchTerm }) => {
  const handleClick = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex min-w-64 rounded-full border py-1 pl-4 sm:w-72 md:w-80 lg:w-96">
      <input
        type="text"
        placeholder="Search in All Products"
        className="text-slate-gray outline-none dark:bg-gray-900"
        onInput={handleClick}
      />
    </div>
  );
};

export default SearchBar;
