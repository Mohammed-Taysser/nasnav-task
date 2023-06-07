import React from 'react';
import { UseCartContext } from '../context/cart';

function CartOffcanvas() {
  const [cart] = UseCartContext();

  const total = cart.reduce((prev, current) => {
    return prev + current.quantity * current.price;
  }, 0);

  return (
    <div
      className='offcanvas offcanvas-end cart-offcanvas'
      tabIndex={-1}
      id='offcanvas-cart'
      aria-labelledby='offcanvas-cart-label'
    >
      <div className='offcanvas-header justify-content-end'>
        <button
          type='button'
          className='btn-close text-reset'
          data-bs-dismiss='offcanvas'
          aria-label='Close'
        ></button>
      </div>
      <div className='offcanvas-body'>
        <h3 className='title'>My Cart</h3>
        <h5 className='font-bold mt-5'>Cart Summary </h5>
        <div className='cart-wrapper my-4'>
          {cart.map((item) => (
            <div key={item.id} className='single-cart'>
              <div className='row'>
                <div className='col-4'>
                  <div className='image'>
                    <img
                      src={item.image}
                      alt={item.title}
                      width={104}
                      height={104}
                    />
                  </div>
                </div>
                <div className='col-8'>
                  <div className='info'>
                    <h6 className='font-bold text-sm mb-2 product-title'>
                      {item.title}
                    </h6>
                    <div className='font-bold text-xs mb-2'>
                      Quantity: {item.quantity}
                    </div>
                    <div className='flex justify-between items-center'>
                      <div className='price'>
                        {item.price.toLocaleString()}{' '}
                        <small className='text-xs'>{item.currency}</small>{' '}
                      </div>
                      <button className='yt-btn sm'>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h5 className='title text-dark mt-4'>
          Total: {total.toLocaleString()} LE
        </h5>
        <div className='flex gap-3 items-center w-100 mt-8'>
          <button className='w-50 yt-btn secondary'>Review Cart</button>
          <button className='w-50 yt-btn'>Complete Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartOffcanvas;
