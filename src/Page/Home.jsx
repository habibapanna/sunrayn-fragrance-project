
import Hero from '../components/Hero';
import Signature from '../components/Signature';
import Category from '../components/Category';
import Featured from '../components/Featured';
import Special from '../components/Special';
import BestSelling from '../components/BestSelling';
import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';
import Offer from '../components/Offer';
import RecentPost from '../components/RecentPost';
import Hero2 from '../components/Hero2';


const Home = () => {
  return (
    <div>
        
      <Hero />
        <Category />
 <Signature />    
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
