import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';

const Main = () => {
  return (
    <div className="min-h-screen mx-auto flex flex-col bg-white">
      <Navbar />

      {/* PUSH CONTENT BELOW FIXED NAVBAR */}
      <main className="flex-grow pt-[100px] md:pt-[120px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Main;
