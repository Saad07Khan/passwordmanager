import React, { useEffect } from "react";
import { useRef } from 'react';
import { useState } from "react";
const Manager = () => {
  const ref = useRef()
  const [form, setform] = useState({site: "",username: "", password: ""})
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(()=>{
    let passwords = localStorage.getItem("passwords");
       if(passwords){
      setpasswordArray= JSON.parse(passwords)
    }

  },[])



  const showPassword=()=>{
    alert("show the password");
    if(ref.current.src.includes("icons/eyecross.png")){
      ref.current.src="icons/eye.png"
    }
    else{
      ref.current.src="icons/eyecross.png"
    }
  }

  const savePassword = ()=>{
   setpasswordArray([...passwordArray,form])
   localStorage.setItem("password",JSON.stringify([...passwordArray,form]))
  }

  const handleChange = (e) =>{
    setform({...form, [e.target.name]: e.target.value})
  }
    
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className="mycontainer">
        <h1 className="text-4x1 text font-bold text-center py-4">
          <span className="text-green-700 text-xl">&lt;</span>
          <span className="text-xl">Pass</span>
          <span className="text-green-700 text-xl">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own secure Password Manager
        </p>
        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input value={form.site} onChange = {handleChange} placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full p-4 py-1 "
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full justify-between gap-3">
            <input value={form.username} onChange = {handleChange}placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
            />

            <div className="relative">
            <input value={form.password} onChange = {handleChange}placeholder="Enter Password"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name="password"
              id=""
            />
            <span className='absolute right-[4px] top-[4px] cursor-pointer' onClick={showPassword}><img ref ={ref}className='p-1'width={23}src="icons/eye.png"/></span>
            </div>
            
          </div>
          <button onClick = {savePassword}className="flex justify-center items-center bg-slate-500 rounded-full px-2 py-2 w-fit hover:bg-green-300">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
