import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../shared/Navbar/Navbar';
import Signature from '../components/Signature';
import Category from '../components/Category';
import NewArrivals from '../components/NewArrivals';


const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Hero></Hero>
            <Signature></Signature>
            <Category></Category>
           <NewArrivals></NewArrivals>
        </div>
    );
};

export default Home;