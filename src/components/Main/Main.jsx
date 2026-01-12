import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';

const Main = () => {
    return (
        <div className='min-h-screen mx-auto flex flex-col'>
            <Navbar></Navbar>
            <section className='flex-grow'>
            <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Main;