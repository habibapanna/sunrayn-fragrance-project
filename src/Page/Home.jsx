
import Hero from '../components/Hero';
import Signature from '../components/Signature';
import Category from '../components/Category';
import NewArrivals from '../components/NewArrivals';
import Featured from '../components/Featured';
import Special from '../components/Special';
import BestSelling from '../components/BestSelling';
import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';
import Offer from '../components/Offer';
import RecentPost from '../components/RecentPost';


import ScrollReveal from "../components/ScrollReveal";

const Home = () => {
  return (
    <div>
        
      <Hero />

    
        <Signature />
      

    
        <Category />
      

     
        <NewArrivals />
      

     
        <Featured />
     

      
        <Special />
      

     
        <BestSelling />
      

    
        <Testimonials />
     

   
        <Blogs />
     

     
        <Offer />
     

      
        <RecentPost />
    
    </div>
  );
};

export default Home;
