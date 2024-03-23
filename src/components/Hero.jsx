import Clients from "./Clients";
import Header from "./Header";
import MainHero from "./MainHero";

const Hero = () => {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <MainHero />
      <Clients />
    </div>
  );
};

export default Hero;
