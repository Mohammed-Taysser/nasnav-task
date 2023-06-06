import React from 'react';
import Rating from '../components/Rating';
import rotate360 from '../images/icons/360.png';

function ProductsList(props) {
  return (
    <div className='similar-products my-14'>
      <div className='container'>
        <h5 className='title'>{props.title}</h5>
        <p className='m-0 subtitle'>{props.subtitle}</p>
        <div className='row mt-3'>
          {props.products.map((product) => (
            <div className='col-lg-3 col-md-6 my-3' key={product.id}>
              <div className='single-product'>
                <div className='image'>
                  <div className='icon-360'>
                    <img src={rotate360} alt='360-icon' />
                  </div>
                  <img
                    src={product.image}
                    className='product-image'
                    alt={product.title}
                  />
                </div>
                <div className='product-info'>
                  <h6 className='product-title'>{product.title}</h6>
                  <div className='flex items-center justify-between'>
                    <div className='min-h-[62px]'>
                      <h6 className='price current'>
                        {product.price}{' '}
                        <small className='text-sm'>{product.currency}</small>
                      </h6>
                      {product.discount && (
                        <div className='flex items-center gap-3 mb-3'>
                          <div className='price old'>{product.oldPrice}</div>
                          <div className='discount'>{product.discount}</div>
                        </div>
                      )}
                    </div>
                    <div className=''>
                      <img
                        src={product.brand}
                        alt='brand'
                        width={56}
                        height={37}
                      />
                    </div>
                  </div>
                  <div className='flex justify-center mb-3'>
                    <Rating rating={product.rating} sm />
                  </div>
                  {typeof product.location === 'string' ? (
                    <div className='text-xs text-center'>
                      <span className='font-normal'>Pickup From:</span>{' '}
                      <strong>{product.location}</strong>
                    </div>
                  ) : (
                    <div className='flex justify-between items-center text-xs'>
                      <span>
                        <span className='font-normal'>From:</span>{' '}
                        <strong>{product.location.from}</strong>
                      </span>
                      <span>
                        <span className='font-normal'>To:</span>{' '}
                        <strong>{product.location.to}</strong>
                      </span>
                      <span>
                        <span className='font-normal'>in:</span>{' '}
                        <strong>{product.location.duration}</strong>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='special-hr'>
          <div className='br'></div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
