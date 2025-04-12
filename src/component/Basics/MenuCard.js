import React from 'react';
import "./style.css";

const MenuCard = ({ menuData }) => {
  const myStyle = { color: "red" };
 
  return (
    <>
      <section className='main-card--container'>
        {menuData.map((curElem) => {
            const {id,name,category,description,price,image}=curElem;
          return (
            <div className='card-container' key={id}>
              <div className='card'>
                <div className='card-body'>
                 <div class="card-content">
                  <span className='card-number card-circle subtle'>{id}</span>
                  <span className='card-auther subtle' style={myStyle}>{category}</span>
                  <h2 className='card-title'>{name}</h2>
                  <span className='card-description subtle'>{description}</span>
                  <div className='card-read'>Read</div>
                  <div>Price:{price}</div>
                </div>
                <img src={image} alt={name} className='card-media' />
                <span className='card-tag subtle'>Order Now</span>
              </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
