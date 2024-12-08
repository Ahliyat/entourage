
import PropTypes from "prop-types";

const Button = ({ className, children, type }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,  
 type: PropTypes.string.isRequired

};


export default Button;
