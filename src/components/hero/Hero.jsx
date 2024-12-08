import GeneralStyles from "../../index.module.css";
import styles from "./hero.module.css";
import car1 from "../../assets/car1.png";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${car1})`,
      }}
      className={`${GeneralStyles.container} ${styles.heroContainer}`}
    >
      <h2>Discover the world on wheels with our car rental service</h2>
    </section>
  );
};
export default Hero;
