import React, { Suspense, useState } from 'react';
import Banner from '../components/Banner';
import Quantity from '../components/Quantity';
import Rating from '../components/Rating';
import Layout from '../components/layout';
import Colors from '../components/single-product/Colors';
import Price from '../components/single-product/Price';
import Sizes from '../components/single-product/Sizes';
import { UseCartContext } from '../context/cart';
import {
  BANNER_URLS,
  SIMILAR_PRODUCTS,
  SINGLE_PRODUCT,
} from '../services/products';
const ProductsList = React.lazy(() => import('../components/ProductsList'));

import rotate360 from '../images/icons/360.png';
import arrowLeft from '../images/icons/arrow-left.png';
import arrowRight from '../images/icons/arrow-right.png';

function SingleProduct() {
  const [cart, addToCart] = UseCartContext();
  const [size, setSize] = useState(2);
  const [color, setColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const onAddToCartClick = () => {
    addToCart({ ...SINGLE_PRODUCT, quantity });
    setQuantity(1);
  };

  return (
    <Layout>
      <Banner title='Adidas Black T-Shirt' urls={BANNER_URLS} />
      <div className='container single-product-page my-4'>
        <div className='lg:flex'>
          <div className='my-3'>
            <div className='img-wrapper relative'>
              <div className='absolute bg-white top-4 left-4 rounded p-1'>
                <img src={rotate360} alt='rotate-360' width={44} height={48} />
              </div>
              <img
                src={SINGLE_PRODUCT.image}
                alt={SINGLE_PRODUCT.title}
                className='max-w-full'
                width={570}
                height={570}
              />
            </div>
            <div className='carousel-wrapper'>
              <div className='arrow'>
                <img src={arrowLeft} alt='arrow-left' width={16} height={24} />
              </div>

              {SINGLE_PRODUCT.slides.map((slide, index) => (
                <img src={slide} alt='slide' key={index} />
              ))}

              <div className='arrow'>
                <img
                  src={arrowRight}
                  alt='arrow-right'
                  width={16}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className=' my-3'>
            <div className='lg:pl-12'>
              <img
                src={SINGLE_PRODUCT.brand}
                alt='brand'
                width={60}
                height={40}
              />

              <h6 className='my-0 max-w-[400px] mt-3 mb-2 font-bold text-base'>
                {SINGLE_PRODUCT.title}
              </h6>
              <div className='text-[#A7A9AC]'>{SINGLE_PRODUCT.category}</div>
              <div className='sub-section'>
                <Rating
                  rating={SINGLE_PRODUCT.stars}
                  rates={SINGLE_PRODUCT.rates}
                />
                <Price
                  price={SINGLE_PRODUCT.price}
                  currency={SINGLE_PRODUCT.currency}
                  discount={SINGLE_PRODUCT.discount}
                  oldPrice={SINGLE_PRODUCT.oldPrice}
                />
              </div>
              <div className='sub-section'>
                <h6 className='font-bold text-base mb-3'>Size</h6>
                <Sizes
                  sizes={SINGLE_PRODUCT.sizes}
                  activeSize={size}
                  setSize={setSize}
                />
              </div>
              <div className='sub-section'>
                <h6 className='font-bold text-base mb-3'>Colors</h6>
                <Colors
                  colors={SINGLE_PRODUCT.colors}
                  activeColor={color}
                  setColor={setColor}
                />
              </div>
              <div className=''>
                <h6 className='font-bold text-base my-3'>Quantity</h6>
                <Quantity quantity={quantity} setQuantity={setQuantity} />
              </div>
              <div className='flex gap-3 items-center w-100 mt-4'>
                <button
                  className='w-50 yt-btn secondary'
                  onClick={onAddToCartClick}
                >
                  Add To Cart
                </button>
                <button className='w-50 yt-btn'>Pickup From Store</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Suspense
        fallback={
          <div className='h-28 flex justify-center items-center'>
            <div className='spinner-border text-dark' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        }
      >
        <ProductsList
          title='Similar Products'
          subtitle='You may like these products also'
          products={SIMILAR_PRODUCTS}
        />
      </Suspense>
    </Layout>
  );
}

export default SingleProduct;
