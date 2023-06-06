import React from 'react';
import { CATEGORY } from '../../services/navbar';

function CategoryNavbar() {
  return (
    <div className='category-navbar'>
      <div className='container'>
        <ul>
          {CATEGORY.map((link, index) => (
            <li key={index}>
              <a href={link.url} className={`${link.isOffer ? 'offer' : ''}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryNavbar;
