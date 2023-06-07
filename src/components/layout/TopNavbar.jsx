import React from 'react';
import rightArrow from '../../images/icons/arrow-right.png';
import leftArrow from '../../images/icons/arrow-left.png';
import phone from '../../images/icons/phone.png';
import location from '../../images/icons/location.png';
import cart from '../../images/icons/cart.png';
import hamburger from '../../images/icons/hamburger.png';
import favicon from '../../images/icons/yeshtery-dark.png';

function TopNavbar() {
  return (
    <div className='top-navbar'>
      <div className='container h-100'>
        <div className='row justify-between items-center h-100'>
          <div className='col-3'>
            <div className='flex items-center gap-7'>
              <img src={hamburger} alt='hamburger' width={24} height={18} />
              <img src={favicon} alt='favicon' width={117} height={30} />
            </div>
          </div>
          <div className='col-5'>
            <div className='flex items-center gap-3'>
              <img src={leftArrow} alt='leftArrow' width={7} height={12} />
              <div className=''>
                Valentine's Day Offers! Buy Two Get One Free{' '}
                <strong className='underline'>Shop Now</strong>
              </div>
              <img src={rightArrow} alt='leftArrow' width={7} height={12} />
            </div>
          </div>
          <div className='col-lg-4 col-md-2'>
            <div className='flex items-center gap-3 justify-end'>
              <div className='flex items-center gap-3'>
                <img src={phone} alt='phone' width={20} height={20} />
                <strong className='d-none d-lg-inline-block'>Contact Us</strong>
              </div>
              <div className='flex items-center gap-3'>
                <img src={cart} alt='cart' width={20} height={20} />
                <strong className='d-none d-lg-inline-block'>
                  Track Order
                </strong>
              </div>
              <div className='flex items-center gap-3'>
                <img src={location} alt='location' width={20} height={20} />
                <strong className='d-none d-lg-inline-block'>
                  Find A Store
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
