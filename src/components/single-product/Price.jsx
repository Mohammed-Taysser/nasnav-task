import React from 'react';

function Price(props) {
  return (
    <div className='price'>
      <div className='current'>
        {props.price.toLocaleString()}
        <small className='ml-1 text-sm'>{props.currency}</small>
      </div>
      <div className='old'>
        {props.oldPrice.toLocaleString()} {props.currency}
      </div>
      <div className='discount'>{props.discount}</div>
    </div>
  );
}

export default Price;
