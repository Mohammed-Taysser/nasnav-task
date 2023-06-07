import React from 'react';
import CartOffcanvas from '../CartOffcanvas';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <CartOffcanvas />
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  children: <></>,
};

export default Layout;
