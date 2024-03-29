import React from 'react';

function Banner(props) {
  return (
    <div className='banner'>
      <div className='container'>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            {props.urls.map((link, index) => (
              <li key={index} className='breadcrumb-item'>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
            <li className='breadcrumb-item active' aria-current='page'>
              {props.title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

Banner.defaultProps = {
  urls: [],
  title: 'Title',
};

export default Banner;
