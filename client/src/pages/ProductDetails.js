import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find(item => item.id === parseInt(id));

  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className='bg-gray-200 pt-32 pb-12 lg:py-32 h-screen'>
      <div className=' container mx-auto flex flex-col lg:flex-row items-center'>
        <div className='max-w-[200px] lg:max-w-sm'>
          <img className='max-w-[200px] lg:max-w-sm ml-[20px]' src={image} alt='' />
        </div>
        <div className='flex-1 text-center lg:text-left ml-0 lg:ml-12 mt-4 lg:mt-0'>
          <div className='text-right lg:text-left'> {/* Aligning content to the right for large screens */}
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-115 lg:max-0'>
              {title}
            </h1>
            <div className='text-xl text-red-500 font-medium mb-2'>$ {price}</div>
            <p className='mb-4'>
              {description}
            </p>
          </div>
          <div className='flex justify-center lg:justify-start'> {/* Centering the button for small screens */}
            <button onClick={() => addToCart(id, product)} className='bg-black py-4 px-8 text-white'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
