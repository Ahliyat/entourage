import styles from "./card.module.css";
import PropTypes from "prop-types";
const Card = ({ children, className }) => {
  return (
    <section className={`${styles.card} ${className}`}>{children}</section>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,  

};
export default Card;
