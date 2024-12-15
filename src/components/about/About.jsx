import styles from "./about.module.css"
import GeneralStyles from "../../index.module.css";  

const About = () => {
  return (
    <section
      className={`${GeneralStyles.container} ${styles.section2Container}`}
    >
      <h2 className={styles.heading}> Entourage</h2>
      <section className={styles.aboutContainer}>
        <p className={styles.textContainer}>
          ENTOURAGE is a luxury car hire platform employing the use of
          technology in providing a unique solution to the growing demand for
          car rentals in Nigeria with more emphasis on comfort, ease of access,
          convenience and luxury.
        </p>
        <img
          className={styles.aboutImage}
          src="/car2.png"
          alt=" luxurious car"
        />
      </section>
    </section>
  );
}
export default About