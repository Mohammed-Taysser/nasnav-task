import React from 'react';

function Colors(props) {
  return (
    <div className='flex items-center gap-3 colors'>
      {props.colors.map((color, index) => (
        <img
          key={index}
          src={color}
          className={`text-[9px] flex items-center justify-center  w-20 h-20 rounded-full cursor-pointer ${
            props.activeColor === index ? 'active' : ''
          }`}
          onClick={() => props.setColor(index)}
          alt='size'
        />
      ))}
    </div>
  );
}

Colors.defaultProps = {
  colors: [],
};

export default Colors;
