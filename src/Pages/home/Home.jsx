import React from 'react';
import Navbar from '../../Components/Navbar/Page';
import Footer from '../../Components/Footer/Page';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
