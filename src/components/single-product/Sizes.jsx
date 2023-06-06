import React from 'react';

function Sizes(props) {
  return (
    <div className='flex items-center gap-3 '>
      {props.sizes.map((size, index) => (
        <div
          key={index}
          className={`text-[9px] flex items-center justify-center border border-[#D9D9D9] w-16 h-16 rounded-full cursor-pointer ${
            props.activeSize === index ? 'bg-[#ECECEC]' : ''
          }`}
          onClick={() => props.setSize(index)}
        >
          {size}
        </div>
      ))}
    </div>
  );
}

Sizes.defaultProps = {
  sizes: [],
};

export default Sizes;
