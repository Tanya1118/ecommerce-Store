import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  const { id, title, price } = item;

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/products/${id}`}>
          <img className='max-w-[80px]' src={item.image} alt={title} />
        </Link>
        <div className='flex flex-col justify-between w-full'>
          <div className='flex justify-between'>
            <Link
              to={`/products/${id}`}
              className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
              {title}
            </Link>
            
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            <div className='flex-1 flex items-center justify-start text-black font-semibold'>$ {price}</div>
            <div className='flex-1 flex justify-end items-center text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' onClick={() => removeFromCart(item)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
