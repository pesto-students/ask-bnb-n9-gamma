import { Button } from 'semantic-ui-react';
import style from './Header.module.css';
import logo from './ASK.svg';

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.logoContainer}>
        <img src={logo} alt='logo' /> BnB
      </div>

      <div className={style.buttonContainer}>
        <Button basic color='black' className={style.buttonPadding}>
          Login
        </Button>
        <Button className={style.buttonPadding} secondary>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Header;
