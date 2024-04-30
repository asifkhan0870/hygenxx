import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./Input.css";
const Input = () => {
  return (
    <div>
      <div className="input ">
        <p>
          Can education flashcards be used for all age apps ?
          <MdKeyboardArrowDown size={35} className="arrow" />
        </p>
      </div>

      <div className="input ">
        <p>
          How do education flashcards work ?
          <MdKeyboardArrowDown size={35} className="arrow" />
        </p>
      </div>

      <div className="input ">
        <p>
          Can education flashcards be used for test prepration ?
          <MdKeyboardArrowDown size={35} className="arrow" />
        </p>
      </div>
    </div>
  );
};

export default Input;
