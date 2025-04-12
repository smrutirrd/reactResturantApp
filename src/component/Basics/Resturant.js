import React,{ useState } from 'react'
import "./style.css";
import menuAPI from "./menuAPI.js";
import MenuCard from "./MenuCard";
import Navbar from './Navbar.js';


const uniqueList=[...new Set(menuAPI.map((curElem)=>{
  return curElem.category;

})),"All",];
const Resturant = () => {
  const [menuData,setMenuData]=useState(menuAPI);
  const [menuList,setMenuList]=useState(uniqueList);

  const filterItem=(category)=>{
    if (category==="All"){
      setMenuData(menuAPI);
      return;
    }
    const updatedList=menuAPI.filter((curElem)=>{
      return curElem.category===category
    });
    setMenuData(updatedList)
  }
  return (
    
    <>
     <Navbar filterItem={filterItem} menuList={menuList}/>
     <MenuCard menuData={menuData}/>
     
    </>
  )
}

export default Resturant
