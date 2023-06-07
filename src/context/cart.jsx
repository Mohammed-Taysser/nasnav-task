import React, { useState, useMemo, useContext } from 'react';

const CartContext = React.createContext([[], (_data) => {}]);

function CartProvider(props) {
  const [cart, setCart] = useState([]);

  const addToCart = (cartItem) => {
    const isExist = cart.findIndex((item) => item.id === cartItem.id);
    if (isExist === -1) {
      setCart((prevItems) => [...prevItems, cartItem]);
    } else {
      const items = cart.map((item) => {
        if (item.id === cartItem.id) {
          return {
            ...item,
            quantity: item.quantity + cartItem.quantity,
          };
        }
        return item;
      });

      setCart(items);
    }
  };

  const value = useMemo(() => [cart, addToCart], [cart]);

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

const UseCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, UseCartContext };
