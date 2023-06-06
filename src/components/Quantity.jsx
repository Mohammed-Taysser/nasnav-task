import React from 'react';
import minus from '../images/icons/minus.svg';
import plus from '../images/icons/plus.svg';

function Quantity(props) {
  const onMinusClick = () => {
    if (props.quantity > 1) {
      props.setQuantity(props.quantity - 1);
    }
  };

  return (
    <div className='quantity-control'>
      <div className='img' onClick={onMinusClick}>
        <img src={minus} alt='minus icon' className='minus' />
      </div>
      <span className='quantity'>{props.quantity}</span>
      <div
        className='img'
        onClick={() => props.setQuantity(props.quantity + 1)}
      >
        <img src={plus} alt='plus icon' className='plus' />
      </div>
    </div>
  );
}

Quantity.defaultProps = {
  quantity: 1,
  setQuantity: () => {},
};

export default Quantity;
