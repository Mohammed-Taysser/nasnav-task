import React from 'react';
import { SITEMAP, SOCIAL_MEDIA } from '../../services/footer';

import colorfulFavicon from '../../images/icons/favicon-colorful.svg';
import nasnavFavicon from '../../images/icons/nasnav-favicon.png';
import sendIcon from '../../images/icons/send.png';
import cashOnDelivery from '../../images/icons/pay-methods/cash-on-delivery.png';
import mastercard from '../../images/icons/pay-methods/mastercard.png';
import visa from '../../images/icons/pay-methods/visa.png';

import '../../assets/sass/components/footer.scss';

function Footer() {
  const Sitemap = () => {
    return (
      <ul className='m-0 p-0'>
        {SITEMAP.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    );
  };

  const SocialMedia = () => {
    return (
      <ul className='m-0 p-0'>
        {SOCIAL_MEDIA.map((link, index) => (
          <li key={index}>
            <a href={link.url} className='flex items-center gap-2'>
              <img
                src={link.img}
                alt={`${link.label}-icon`}
                width={32}
                height={32}
              />
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 my-3'>
            <img
              src={colorfulFavicon}
              alt='favicon-colorful'
              className='max-w-full'
              width={220}
              height={57}
            />
            <div className='footer-info mt-4'>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed dia
              </p>
              <p className='mb-0'>
                m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis
              </p>
            </div>
          </div>

          <div className='col-lg-6 my-3'>
            <h5>Subscribe to our newsletter</h5>
            <form className='footer-form'>
              <input type='text' placeholder='Enter Your Mail' />
              <button className='yt-btn sm' type='submit'>
                Subscript
                <span>
                  <img src={sendIcon} alt='send' width={20} height={20} />
                </span>
              </button>
            </form>

            <div className='row'>
              <div className='col-md-7 my-3'>
                <Sitemap />
              </div>
              <div className='col-md-5 my-3'>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className='row items-center justify-between copy-right'>
          <div className='col-lg-4 my-3'>
            <p className='mb-0'>© 2021 yeshtery, all rights reserved.</p>
          </div>
          <div className='col-lg-5 my-3'>
            <div className='flex items-center gap-2 justify-end'>
              <img
                src={cashOnDelivery}
                alt='cash-on-delivery'
                width={102}
                height={40}
              />
              <img
                src={mastercard}
                alt='mastercard-favicon'
                width={65}
                height={40}
              />
              <img src={visa} alt='visa-favicon' width={65} height={40} />
            </div>
          </div>
          <div className='col-lg-3 my-3'>
            <div className='flex items-center justify-end gap-2'>
              <span className='font-bold'>Powered By</span>
              <img
                src={nasnavFavicon}
                alt='nasnav-favicon'
                width={100}
                height={19}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
