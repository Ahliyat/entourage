import styles from "./premiumServices.module.css";
import GeneralStyles from "../../index.module.css";
import { BsStars } from "react-icons/bs";
import { PiHandCoins } from "react-icons/pi";
import { PiSealCheckBold } from "react-icons/pi";
const PremiumServices = () => {
  return (
    <section   className={`${GeneralStyles.container} ${styles.section5Container}`}>
      <section className={styles.section5Text}>
        <h1 className={styles.section5Heading}>Our Premium Services</h1>
        <p className={styles.section5Paragraph}>
          To make renting easy and hassle-free, we provide a variety of services
          and advantages. We have you covered with a variety of vehicles and
          flexible rental terms.
        </p>
      </section>
      <section className={styles.section5Content}>
        <div  className={styles.section5Icons}>
          <BsStars className={styles.section5Icon} />
          <h3>Quality Choice</h3>
          <p>
            We offer a wide range of high-quality vehicles to choose from,
            including luxury cars, SUVs, vans, and more.
          </p>
        </div>
        <div  className={styles.section5Icons}>
          <PiHandCoins className={styles.section5Icon} />
          <h3>Affordable Prices</h3>
          <p>
            Our rental rates are highly competitive and affordable, allowing our
            customers to enjoy their trips without breaking the bank.
          </p>
        </div>
        <div  className={styles.section5Icons}>
          <PiSealCheckBold className={styles.section5Icon} />
          <h3>Convenient Online Booking</h3>
          <p>
            With our easy-to-use online booking system, customers can quickly
            and conveniently reserve their rental car from anywhere, anytime.
          </p>
        </div>
      </section>
    </section>
  );
};
export default PremiumServices;
