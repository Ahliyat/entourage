import GeneralStyles from "../../index.module.css";
import styles from "./hero.module.css";
import car1 from "../../assets/car1.png";
import Button from "../button/Button";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return (
    <section className={styles.container}>
      <section
        style={{
          backgroundImage: `url(${car1})`,
        }}
        className={`${GeneralStyles.container} ${styles.heroContainer}`}
      >
        <h2>Discover the world on wheels with our car rental service</h2>
      </section>
      <section className={styles.inputSection}>
        <section className={styles.forms}>
          <form className={styles.form1}>
            <label className={styles.label}>Pick-up location</label>
            <div>
              <IoLocationOutline className={styles.location} />
              <input
                className={styles.input}
                type="search"
                placeholder="Search a location"
              />
            </div>
          </form>
          <form className={styles.form2}>
            <label className={styles.label}>Pick-up date</label>
            <input type="date" />
          </form>
          <form className={styles.form1}>
            <label className={styles.label}>Drop-off location</label>
            <div>
              <IoLocationOutline className={styles.location} />
              <input
                className={styles.input}
                type="search"
                placeholder="Search a location"
              />
            </div>
          </form>
          <form className={styles.form2}>
            <label className={styles.label}>Drop-off date</label>
            <input type="date" />
          </form>
          <Button className={styles.inputBtn}>
            Find a vehicle <FaArrowRight />
          </Button>
        </section>
      </section>
    </section>
  );
};
export default Hero;
