import { useState } from "react";
import "./TodoSearch.css";
import { CgSearch } from "react-icons/cg";

function TodoSearch({ value, setValue }) {
  return (
    <div className="container">
      <div className="containerInput">
        <input
          className="input"
          type="text"
          value={value}
          onChange={setValue}
          placeholder={"Search..."}
        />
        <CgSearch className="icon" />
      </div>
    </div>
  );
}

export { TodoSearch };