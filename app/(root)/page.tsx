import Info from "@/components/home/Info";
import LandingOffers from "@/components/home/LandingOffers";
import YogaHero from "@/components/home/Hero";
import { ParallaxImageContainer } from "@/components/home/ParallaxImageContainer";

const Home = () => {
  return (
    <div className="bg-[#EEFFF3]">
      <YogaHero />
      <Info />
      <LandingOffers />
      <ParallaxImageContainer />
    </div>
  );
};
export default Home;
