import React, { useState } from 'react';
import Menu from "./menuApi";
import MenuCart from "./MenuCart";
import Navbar from "./Navbar";

//new set is used for distinct values of category
//... is used to make array 
const uniqueList= [...new Set(Menu.map((curElem)=>{
  return curElem.category;
})),"All"];

const Display = () => {
  //it return an array of two elements
  //menuData is used to hold the data from the api
  const [menuData,setMenuData]= useState(Menu);
  const [menuList,setMenuList]= useState(uniqueList);

  const filterItem=(category)=>{
    if(category==="All"){
      setMenuData(Menu);
      return;
    }
    const updatedList= Menu.filter((curElem)=>{
      return curElem.category===category;
    })
    setMenuData(updatedList);
  }
  return (
    <div >
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCart menuData={menuData}/>
    </div>
  )
}

export default Display
