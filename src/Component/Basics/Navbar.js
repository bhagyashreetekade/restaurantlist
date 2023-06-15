import React, { useState } from 'react'


const Navbar = ({filterItem,menuList}) => {

  let [open,setOpen]=useState(false);

  return (
    <>
      <div className='navbar md:flex md:justify-center '>
        <nav className='w-full md:w-[75%] px-3 md:px-0 md:h-auto fixed backdrop-blur-3xl md:rounded-full xl:w-[50%] '>
          <div className='flex flex-row justify-between items-center md:hidden'>
            <div className='font-serif font-bold text-3xl py-5 '>Foodie</div>
            <span className='hamburger text-3xl cursor-pointer ' onClick={()=>setOpen(!open)}><ion-icon name={open ? 'close-outline':'menu-outline'}></ion-icon></span>
          </div>

            <ul className={`pb-10 md:space-x-4 md:flex md:flex-row md:p-5 md:justify-between md:items-center font-serif font-semibold md:m-2 text-white ${open ? 'block':'hidden'}`}>
              {
                menuList.map((curElem)=>{
                  return(
                    <li onClick={()=> filterItem(curElem)} className='cursor-pointer hover:text-stone-800 px-4 py-2 md:hover:border-b-4 md:hover:border-black'>{curElem}</li>
                  );
                })
              }
            </ul>
            
        </nav>
      </div>
    </>
  )
}

export default Navbar
