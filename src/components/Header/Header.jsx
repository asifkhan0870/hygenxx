import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav class=" p-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img src="logo.png" alt="Logo" class="h-8 mr-2" />
        </div>

        <div class="flex items-center justify-end ">
          <a href="#" class="text-black-300 hover:text-blue mr-10">
            Home
          </a>
          <a href="#" class="text-black-300 hover:text-blue mr-10">
            Flashcard
          </a>
          <a href="#" class="text-black-300 hover:text-blue mr-10">
            Contact
          </a>
          <a href="#" class="text-black-300 hover:text-blue mr-10">
            FAQ
          </a>
          <button className="btn text-white">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
