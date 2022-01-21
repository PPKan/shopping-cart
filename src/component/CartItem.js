import React from 'react';
import deleteButton from '../images/deleteButton.png'
import plusButton from '../images/plusButton.png'
import minusButton from '../images/minusButton.png'

export default function CartItem(props) {
  
  const {
    name,
    price,
    amount
  } = props
  
  
  return (
    <>
    <ul className='cart-item'>
      <li className='cart-item-name'>{name}</li>
      <li className='cart-item-price'>{price}$</li>
      <input type="image" className='btn--minus' src={minusButton} />
      <li className='cart-item-amount'>{amount}</li>
      <input type="image" className='btn--plus' src={plusButton} />
      <input type="image" className='btn--delete' src={deleteButton} />
    </ul>
    </>
  );
}
