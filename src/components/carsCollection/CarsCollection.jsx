import styles from "./carsCollection.module.css";
import Button from "../button/Button";
import { FaArrowRight } from "react-icons/fa6";
import GeneralStyles from "../../index.module.css";
import { cardData } from "../../utils/data"; 
import { iconData } from "../../utils/data"; 
import Card from "../card/Card"

const CarsCollection = () => {
  return (
    <section
      className={`${GeneralStyles.container} ${styles.section3Container}`}
    >
      <section className={styles.section3Text}>
        <h1 className={styles.section3Heading}>
          Our Impressive Collection of Cars
        </h1>
        <p className={styles.section3Paragraph}>
          Ranging from elegant sedans to powerful sports cars, all carefully
          selected to provide our customers with the ultimate driving experience
          from our Top dealers.
        </p>
      </section>
      <section className={styles.carsOptionButton}>
        <Button className={styles.carButton1}>Popular Car</Button>
        <Button className={styles.carButton}>Luxury Car</Button>
        <Button className={styles.carButton}>Executive Car</Button>
        <Button className={styles.carButton}>Premium Car</Button>
      </section>
      <section className={styles.cardContainer}>
        <section className={styles.cards}>
          <section className={styles.cards}>
            {cardData.map((item) => (
              <Card key={item.id} className={styles.cardContent}>
                <img className={styles.cardimage} src={item.img} alt="" />
                <p className={styles.carName}>{item.title}</p>

                <h1 className={styles.carPrice}>
                  {item.number} <span>{item.text}</span>
                </h1>

                <div className={styles.cardIcons}>
                  {iconData.map((i) => (
                    <div key={i.id} className={styles.cardIcon}>
                      {<i.iconName className={styles.icon} />}
                      <p>{i.iconText}</p>
                    </div>
                  ))}
                </div>
                <Button className={styles.rent}>Rent Now</Button>
              </Card>
            ))}
          </section>
        </section>
      </section>
      <Button className={styles.allCarsBtn}>
        See all cars <FaArrowRight />
      </Button>
    </section>
  );
};
export default CarsCollection;
