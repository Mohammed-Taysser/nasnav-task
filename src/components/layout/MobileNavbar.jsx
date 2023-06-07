import React from 'react';
import { UseCartContext } from '../../context/cart';

import brands from '../../images/icons/brands.svg';
import cartIcon from '../../images/icons/cart.svg';
import category from '../../images/icons/category.svg';
import hamburger from '../../images/icons/hamburger.png';
import heart from '../../images/icons/heart.svg';
import home from '../../images/icons/home.svg';
import login from '../../images/icons/login.svg';
import search from '../../images/icons/search.svg';
import favicon from '../../images/icons/yeshtery-dark.png';

function TopNavbar() {
  const [cart] = UseCartContext();

  return (
    <div className='mobile-top-navbar h-100'>
      <div className='container h-100'>
        <div className='row justify-between items-center h-100'>
          <div className='col-6'>
            <div className='flex items-center gap-7'>
              <img src={hamburger} alt='hamburger' width={24} height={18} />
              <img src={favicon} alt='favicon' width={117} height={30} />
            </div>
          </div>

          <div className='col-6'>
            <div className='flex items-center gap-4 justify-end'>
              <img src={search} alt='search' width={24} height={24} />

              <div className='cart-container'>
                <span className='cart-counter'>{cart.length}</span>
                <img src={cartIcon} alt='cart' width={24} height={24} />
              </div>
              <img src={heart} alt='heart' width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomNavbar() {
  return (
    <div className='mobile-bottom-navbar'>
      <div className='text-center'>
        <img
          src={home}
          className='inline-block'
          alt='home'
          width={18}
          height={18}
        />
        <div>Home</div>
      </div>
      <div className='text-center'>
        <img
          src={category}
          className='inline-block'
          alt='category'
          width={18}
          height={18}
        />
        <div>Category</div>
      </div>
      <div className='text-center'>
        <img
          src={brands}
          className='inline-block'
          alt='brands'
          width={18}
          height={18}
        />
        <div>Brands</div>
      </div>
      <div className='text-center'>
        <img
          src={login}
          className='inline-block'
          alt='login'
          width={18}
          height={18}
        />
        <div>Login</div>
      </div>
    </div>
  );
}

function MobileNavbar() {
  return (
    <div className='mobile-navbar'>
      <TopNavbar />
      <BottomNavbar />
    </div>
  );
}

export default MobileNavbar;
