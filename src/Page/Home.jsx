import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../shared/Navbar/Navbar';
import Signature from '../components/Signature';
import Category from '../components/Category';
import NewArrivals from '../components/NewArrivals';
import Featured from '../components/Featured';


const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Hero></Hero>
            <Signature></Signature>
            <Category></Category>
           <NewArrivals></NewArrivals>
           <Featured></Featured>
        </div>
    );
};

export default Home;