
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

      <ScrollReveal>
        <Signature />
      </ScrollReveal>

      <ScrollReveal>
        <Category />
      </ScrollReveal>

      <ScrollReveal>
        <NewArrivals />
      </ScrollReveal>

      <ScrollReveal>
        <Featured />
      </ScrollReveal>

      <ScrollReveal>
        <Special />
      </ScrollReveal>

      <ScrollReveal>
        <BestSelling />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <Blogs />
      </ScrollReveal>

      <ScrollReveal>
        <Offer />
      </ScrollReveal>

      <ScrollReveal>
        <RecentPost />
      </ScrollReveal>
    </div>
  );
};

export default Home;
