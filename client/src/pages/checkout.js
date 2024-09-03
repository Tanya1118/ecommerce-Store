import React,{useContext,useState, useRef} from 'react';
import { CartContext } from '../contexts/CartContext';


const Checkout = () => {
    const { itemAmount } = useContext(CartContext);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const zipRef = useRef();
    const cardRef = useRef();
    const expiryRef = useRef();
    const cvvRef = useRef();


    const handlePlaceOrder = async () => {
      const name = nameRef.current.value;
      const address = addressRef.current.value;
      const city = cityRef.current.value;
      const zip = zipRef.current.value;
      const card = cardRef.current.value;
      const expiry = expiryRef.current.value;
      const cvv = cvvRef.current.value;
      
      try {
        const response = await fetch('http://localhost:8000/api/awt/Order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            address,
            city,
            zip,
            card,
            expiry,
            cvv
          })
        });
        if (response.ok) {
          setIsOrderPlaced(true);
          setTimeout(() => {
            setIsOrderPlaced(false);
          }, 2000); // Hide message after 2 seconds
        } else {
          // Handle error
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };
    
  return (
    <div className="container mx-auto py-8 bg-gray-200">
      <h1 className="text-2xl font-bold mb-8 mt-14 ml-12">CHECKOUT ({itemAmount} items)</h1>

      <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-lg font-bold mb-4">Shipping Information</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" ref={nameRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
            <input type="text" id="address" name="address" ref={addressRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City</label>
            <input type="text" id="city" name="city" ref={cityRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="zip" className="block text-gray-700 font-bold mb-2">ZIP Code</label>
            <input type="text" id="zip" name="zip" ref={zipRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <h2 className="text-lg font-bold mb-4">Payment Information</h2>
          <div className="mb-4">
            <label htmlFor="card" className="block text-gray-700 font-bold mb-2">Credit Card Number</label>
            <input type="text" id="card" name="card" ref={cardRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="expiry" className="block text-gray-700 font-bold mb-2">Expiration Date</label>
            <input type="text" id="expiry" name="expiry" ref={expiryRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-gray-700 font-bold mb-2">CVV</label>
            <input type="text" id="cvv" name="cvv" ref={cvvRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </form>
        {itemAmount > 0 ? (
          <>
            <button onClick={handlePlaceOrder} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Place Order</button>
            {isOrderPlaced && (
              <div className="mt-4 bg-green-500 atext-white font-bold py-2 px-4 rounded animate__animated animate__fadeIn">
                Order Placed
              </div>
            )}
          </>
        ) : (
          <div className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded">No Product selected</div>
        )}
    </div>
    </div>
  );
};


export default Checkout;
