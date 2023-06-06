import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  children: <></>,
};

export default Layout;
