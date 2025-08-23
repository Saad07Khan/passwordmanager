import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 relative">
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
      </div>

      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 right-4 text-white bg-gray-700 rounded-full flex justify-between items-center px-4 py-2 hover:bg-gray-600 transition-colors duration-200"
      >
        <img
          className="invert w-8 p-1"
          src="/icons/github.svg"
          alt="github logo"
        />
        <span className="font-bold px-2">GitHub</span>
      </a>
    </nav>
  );
};

export default Navbar;
