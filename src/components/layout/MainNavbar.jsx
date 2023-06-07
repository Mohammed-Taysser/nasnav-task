import React from 'react';
import { UseCartContext } from '../../context/cart';

import favicon from '../../images/icons/addidas-favicon.svg';
import cartIcon from '../../images/icons/cart.svg';
import heart from '../../images/icons/heart.svg';
import search from '../../images/icons/search.svg';
import user from '../../images/icons/user.svg';

function MainNavbar() {
  const [cart] = UseCartContext();

  return (
    <div className='main-navbar'>
      <div className='container h-100'>
        <div className='row items-center h-100'>
          <div className='col-md-4'>
            <form className='search-form'>
              <img
                src={search}
                alt='search'
                className='search-icon'
                width={24}
                height={24}
              />
              <input type='text' placeholder='Search' />
            </form>
          </div>
          <div className='col-md-4 text-center'>
            <img
              src={favicon}
              alt='favicon'
              className='inline-block'
              width={85}
              height={56}
            />
          </div>
          <div className='col-md-4'>
            <div className='flex items-center gap-4 justify-end'>
              <div className='flex items-center gap-2'>
                <div
                  className='cart-container cursor-pointer'
                  data-bs-toggle='offcanvas'
                  data-bs-target='#offcanvas-cart'
                  aria-controls='offcanvas-cart'
                >
                  <span className='cart-counter'>{cart.length}</span>
                  <img src={cartIcon} alt='cart' width={24} height={24} />
                </div>
                <strong className='d-none d-lg-inline-block'>Cart</strong>
              </div>
              <div className='flex items-center gap-2'>
                <img src={heart} alt='heart' width={24} height={24} />
                <strong className='d-none d-lg-inline-block'>Wishlist</strong>
              </div>
              <div className='flex items-center gap-2'>
                <img src={user} alt='user' width={24} height={24} />
                <strong className='d-none d-lg-inline-block'>Login</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
