import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800">
      <div className="container flex justify-between items-center px-4 py-5 h-14 text-white">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="logo font-bold text-2xl text-white flex items-center"
        >
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-700">Safe/&gt;</span>
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-700 my-5 mx-2 rounded-full flex justify-between items-center px-4 py-2"
        >
          <img
            className="invert w-10 p-1"
            src="/icons/github.svg"
            alt="github logo"
          />
          <span className="font-bold px-2">GitHub</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
