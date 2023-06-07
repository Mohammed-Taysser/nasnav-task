import React from 'react';
import { CartProvider } from './context/cart';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <CartProvider>
      <SingleProduct />
    </CartProvider>
  );
}

export default App;
