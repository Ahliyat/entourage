
import { Navbar, Hero, About, CarsCollection } from "../../components/index";
import NeedACar from "../../components/needaCar/NeedACar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <CarsCollection/>
      <NeedACar/>
    </div>
  );
};
export default Home;
