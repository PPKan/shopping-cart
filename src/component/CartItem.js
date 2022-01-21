import React from 'react';
import deleteButton from '../images/deleteButton.png'

export default function CartItem(props) {
  
  const {
    name,
    price
  } = props
  
  
  return (
    <>
    <ul className='cart-item'>
      <li className='cart-item-name'>{name}</li>
      <li className='cart-item-price'>{price}$</li>
      <input type="image" src={deleteButton} />
    </ul>
    </>
  );
}
