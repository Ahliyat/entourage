
import { Navbar, Hero, About, CarsCollection, PremiumServices, NeedACar } from "../../components/index";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <CarsCollection/>
      <NeedACar/>
      <PremiumServices/>
    </div>
  );
};
export default Home;
