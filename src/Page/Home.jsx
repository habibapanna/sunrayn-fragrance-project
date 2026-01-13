import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../shared/Navbar/Navbar';
import Signature from '../components/Signature';
import Category from '../components/Category';
import NewArrivals from '../components/NewArrivals';
import Featured from '../components/Featured';
import Special from '../components/Special';
import BestSelling from '../components/BestSelling';


const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Hero></Hero>
            <Signature></Signature>
            <Category></Category>
           <NewArrivals></NewArrivals>
           <Featured></Featured>
           <Special></Special>
           <BestSelling></BestSelling>
        </div>
    );
};

export default Home;