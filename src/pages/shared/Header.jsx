import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import styles from './Header.module.css';
import logo from './ASK.svg';

const Header = ({ transparent }) => {
  // console.log(transparent);
  return (
    <div
      className={`${styles.headerContainer} 
      ${!transparent && styles.addColor}`}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='logo' /> BnB
      </div>

      <div className={styles.buttonContainer}>
        <Button basic color='black' className={styles.buttonPadding}>
          Login
        </Button>
        <Button className={styles.buttonPadding} secondary>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

Header.defaultProps = {
  transparent: false,
};

Header.propType = {
  transparent: PropTypes.bool.isRequired,
};

export default Header;
