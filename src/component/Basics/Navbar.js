import React from 'react'

const Navbar = ({filterItem,menuList}) => {
  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
      {
        menuList.map((curElem)=>
        {
        return (
        <button className='btn-group--item' onClick={()=>filterItem(curElem)}>{curElem}</button>
         );
        })}
        {/* <button className='btn-group--item'  onClick={()=>setMenuData(menuAPI)}>All</button> */}
      </div>
    </nav>
    </>
  );
};

export default Navbar
