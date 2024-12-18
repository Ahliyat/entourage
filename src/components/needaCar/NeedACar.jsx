import { TbMoodHappy, TbCalendarCheck, TbSearch } from "react-icons/tb";
import styles from "./needaCar.module.css";
import Button from "../button/Button";
import GeneralStyles from "../../index.module.css";
const NeedACar = () => {
  return (
    <section
      className={`${GeneralStyles.container} ${styles.section4Container}`}
    >
      <div className={styles.section4Text}>
        <h1 className={styles.section4Heading}>How it works</h1>
        <p className={styles.section4Paragraph}>
          Renting a luxury car has never been easier. Our streamlined process
          makes it simple for you to book and confirm your vehicle of choice
          online
        </p>
      </div>
      <Button className={styles.Button1}>I need a car</Button>
      <Button className={styles.Button2}>I am a dealer</Button>

      <section className={styles.section4Content}>
        <section className={styles.section4LeftContainer}>
          <div className={styles.section4Icons}>
            <div className={styles.section4IconContainer}>

            <TbSearch className={styles.section4Icon} />
            </div>
            <div className={styles.section4IconText}>
              <h1>Browse and select</h1>
              <p>
                Choose from our wide range of premium cars, select the pickup
                and return dates and locations that suit you best.
              </p>
            </div>
          </div>
          <div className={styles.section4Icons}>
            <div className={styles.section4IconContainer}>
              <TbCalendarCheck className={styles.section4Icon} />
            </div>
            <div className={styles.section4IconText}>
              <h1>Book and confirm</h1>
              <p>
                Book your desired car with just a few clicks and receive an
                instant confirmation via email or SMS.
              </p>
            </div>
          </div>
          <div className={styles.section4Icons}>
            <div className={styles.section4IconContainer}>
              <TbMoodHappy className={styles.section4Icon} />
            </div>

            <div className={styles.section4IconText}>
              <h1>Enjoy your ride</h1>
              <p>
                Pick up your car at the designated location and enjoy your
                premium driving experience with our top-quality service.
              </p>
            </div>
          </div>
        </section>
        <div className={styles.section4RightContainer}>
          <img className={styles.section4Img} src="/needacarCar.png" alt="" />
        </div>
      </section>
    </section>
  );
};
export default NeedACar;
