import React from "react";
import "./Innermenu.css";

const Innermenu = () => {
  return (
    <div>
      <div class="flex items-center  my-[90px] mx-[443px] ">
        <a
          href="#"
          class="text-black-300 hover:text-blue mr-10 font-bold text-blue-900 text underline"
        >
          Study
        </a>
        <a href="#" class="text-black-300 hover:text-blue mr-10">
          Quiz
        </a>
        <a href="#" class="text-black-300 hover:text-blue mr-10">
          Test
        </a>
        <a href="#" class="text-black-300 hover:text-blue mr-10">
          Game
        </a>

        <a href="#" class="text-black-300 hover:text-blue mr-10">
          Others
        </a>
      </div>
    </div>
  );
};

export default Innermenu;
