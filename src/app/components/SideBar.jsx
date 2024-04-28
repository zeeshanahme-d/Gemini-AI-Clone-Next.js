"use client"
import React, { useState, useContext } from 'react';
import { Menu, Plus, Sun, Moon } from 'lucide-react';
import { Context } from '../context/ContextProvider';


const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { theme, toggle } = useContext(Context);

  return (
    <div className={` min-h-[100dvh] inline-flex flex-col items-center bg-bgSecondaryColor py-4 px-4`}>
      <div className='h-full relative flex flex-col'>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex justify-center items-center w-fit p-[8px] rounded-[24px] hover:bg-bgHover'>
          <Menu size={25} className='text-softTextColor' />
        </div>
        <div className={`${isOpen && "width ml-0"} ml-1 mt-10 gap-x-2.5 text-md text-textPrimary cursor-pointer flex items-center w-fit p-[8px] rounded-[24px] bg-bgPrimaryColor`}>
          <Plus size={20} className='text-softTextColor' />
          {isOpen ? <p className='text-[14px] '>New Chat</p> : null}
        </div>
        <div onClick={toggle} className={`${isOpen && "width"} mt-10 gap-x-2.5 text-md text-textPrimary  absolute bottom-0 left-0 cursor-pointer flex items-center w-fit p-[8px] rounded-[24px] hover:bg-bgHover`}>
          {theme === "dark" ? <Sun size={25} /> : <Moon size={25} />}
          {isOpen ? <p className='text-[14px] '>{theme === "dark" ? "Light Theme" : "Dark Theme"}</p> : null}
        </div>
      </div>
    </div>
  )
}

export default SideBar;