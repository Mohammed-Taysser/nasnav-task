import React, { Suspense } from 'react';
import { CartProvider } from './context/cart';
const SingleProduct = React.lazy(() => import('./pages/SingleProduct'));

function App() {
  return (
    <CartProvider>
      <Suspense
        fallback={
          <div className='h-56 flex justify-center items-center'>
            <div className='spinner-border text-dark' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        }
      >
        <SingleProduct />
      </Suspense>
    </CartProvider>
  );
}

export default App;
