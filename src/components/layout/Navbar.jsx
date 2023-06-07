import React from 'react';
import CategoryNavbar from './CategoryNavbar';
import MainNavbar from './MainNavbar';
import MobileNavbar from './MobileNavbar';
import TopNavbar from './TopNavbar';

import '../../assets/sass/components/navbar.scss';

function Navbar() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <CategoryNavbar />
      <MobileNavbar />
    </>
  );
}

export default Navbar;
