import React from 'react';
import starOutline from '../images/icons/star-outline.svg';
import star from '../images/icons/star.svg';

function Rating(props) {
  const { rating } = props;
  const stars = Math.floor(rating);

  return (
    <div className='flex items-center gap-3'>
      <div className='flex items-center gap-1'>
        {Array(stars)
          .fill(0)
          .map((_item, index) => (
            <img
              src={star}
              key={index}
              width={props.sm ? 16 : 20}
              height={props.sm ? 16 : 20}
              alt='star'
            />
          ))}
        {Array(5 - stars)
          .fill(0)
          .map((_item, index) => (
            <img
              src={starOutline}
              key={index}
              width={props.sm ? 16 : 20}
              height={props.sm ? 16 : 20}
              alt='star-outline'
            />
          ))}
      </div>
      <div className='font-bold text-[0.9rem]'>{rating} of 5</div>
      {props.rates && (
        <div className='font-[500] text-[#575756]'>{props.rates} Rates</div>
      )}
    </div>
  );
}

export default Rating;
