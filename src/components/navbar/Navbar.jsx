import styles from "./navbar.module.css";
import GeneralStyles from "../../index.module.css";
import Bars from "../../assets/bars.png";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <section className={`${GeneralStyles.container} ${styles.navBarContainer}`}>
      <img className={styles.bars} src={Bars} alt="bars avatrt" />
      <h1>Entourage</h1>
      <Button type="button" className={styles.navbarBtn}>
        Login/Register
      </Button>
    </section>
  );
};
export default Navbar;
