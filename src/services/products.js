import brand from '../images/single-product/brand.png';
import image from '../images/single-product/image.png';

import color1 from '../images/single-product/colors/color-1.png';
import color2 from '../images/single-product/colors/color-2.png';

import slide1 from '../images/single-product/slider/slide-1.png';
import slide2 from '../images/single-product/slider/slide-2.png';
import slide3 from '../images/single-product/slider/slide-3.png';
import slide4 from '../images/single-product/slider/slide-4.png';

import product1 from '../images/products/product-1.png';
import product2 from '../images/products/product-2.png';
import product3 from '../images/products/product-3.png';
import product4 from '../images/products/product-4.png';

const SINGLE_PRODUCT = {
  id: 1,
  title:
    'Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  category: 'Men',
  image,
  stars: 4,
  rating: 4.9,
  rates: 22,
  price: '9,999',
  currency: 'LE',
  oldPrice: '9,999 LE',
  discount: '30% Off',
  sizes: ['Small', 'Medium', 'Large', 'X Large', 'XX Large'],
  brand,
  colors: [color1, color2],
  slides: [slide1, slide2, slide3, slide4],
};

const BANNER_URLS = [
  {
    label: 'Men',
    url: '#0',
  },
  {
    label: 'Clothing',
    url: '#0',
  },
  {
    label: 'Tops',
    url: '#0',
  },
  {
    label: 'Adidas / Adidas Black T-Shirt',
    url: '#0',
  },
];

const SIMILAR_PRODUCTS = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    category: 'Men',
    image: product1,
    rating: 4.9,
    rates: 22,
    price: '9,999',
    currency: 'LE',
    oldPrice: '9,999 LE',
    discount: '30%',
    brand,
    location: 'Genena Mall',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    category: 'Men',
    image: product2,
    rating: 4.9,
    rates: 22,
    price: '9,999',
    currency: 'LE',
    oldPrice: '9,999 LE',
    discount: null,
    brand,
    location: {
      from: 'UK',
      to: 'Egypt',
      duration: 10,
    },
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    category: 'Men',
    image: product3,
    rating: 4.9,
    rates: 22,
    price: '9,999',
    currency: 'LE',
    oldPrice: '9,999 LE',
    discount: '30%',
    brand,
    location: 'Genena Mall',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    category: 'Men',
    image: product4,
    rating: 4.9,
    rates: 22,
    price: '9,999',
    currency: 'LE',
    oldPrice: '9,999 LE',
    discount: '30%',
    brand,
    location: {
      from: 'UK',
      to: 'Egypt',
      duration: '10 Days',
    },
  },
];

export { SINGLE_PRODUCT, BANNER_URLS, SIMILAR_PRODUCTS };
