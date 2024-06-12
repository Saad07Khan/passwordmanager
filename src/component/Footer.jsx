import React from "react";

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center'>
      <div className="logo font-bold text-2x1 text-white">
        <span className="text-green-700">&lt;</span>
        <span></span>Pass<span className="text-green-700">Safe/&gt;</span>
      </div>
      <div className='flex justify-center items-center'>
        Created with <img className='w-7 m-2' src="icons/heart.png" alt="heart" /> by Saad07Khan
      </div>
    </div>
  );
};

export default Footer;
