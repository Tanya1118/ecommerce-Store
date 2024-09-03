import React,{createContext,useState,useEffect} from 'react';


// create context
export const CartContext = createContext()

const CartProvider = ({children}) => {
  //cart state
  const[cart,setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  //item amount state
  const [itemAmount,setItemAmount] = useState(0);
  //total price state
  const [total, setTotal] = useState(0);
  

  //update total price
  useEffect(()=>{
      const total = cart.reduce((accumulator,currentItem)=>
      {
        return accumulator + currentItem.amount *currentItem.total;
      },0);
      setTotal(total);
    }
  ,[cart])
  
  //update item amount
  useEffect(()=>{
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem)=>
      {
        return accumulator + currentItem.amount;
      },0);
      setItemAmount(amount);
    }
  },[cart])
  //addToCart
  const addToCart = (product,id)=> {
    const newItem = {...product, id};
  //  console.log(id.category.image);
   //check if the item is already in the cart
   const cartItem = cart.find((item) => {
   return item.id === id;
  });

  
  
  if (cartItem) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }
      return item;
    });
    setCart(newCart);
  } else {
    setCart([...cart, { ...newItem, amount: 1 }]);
  }
  };
  //console.log(cart);

  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart);
  };

  //clearcart
  const clearCart = () => {
    setCart([]);
  };
  


  return <CartContext.Provider value={ {cart ,addToCart, removeFromCart,clearCart,itemAmount,total} }>
    {children}
  </CartContext.Provider>;
};

export default CartProvider;