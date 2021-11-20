import { Button, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import logo from './ASK.svg';
import PropTypes from 'prop-types';

const UserAvatar = props => {
  return (
    <div className={style.avatarContainer}>
      <Image
        src='https://react.semantic-ui.com/images/wireframe/square-image.png'
        avatar
      />
      <span>{'Welcome, ' + props.username.split(' ')[0]}</span>
      <Dropdown>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to='/bookinghistory'>My Bookings</Link>
          </Dropdown.Item>
          <Dropdown.Item>My Account</Dropdown.Item>
          <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

const AuthButton = () => {
  return (
    <div className={style.buttonContainer}>
      <Button basic color='black'>
        <Link to='/auth'>
          <b className={style.authButton}>Login/Sign Up</b>
        </Link>
      </Button>
    </div>
  );
};

const logout = () => {
  localStorage.clear();
  window.location.href = '/';
};

const Header = () => {
  const isAutenticated = localStorage.getItem('isAuthenticated');
  return (
    <div className={style.headerContainer}>
      {/* ${!transparent && styles.addColor}`}/> */}
      <div className={style.logoContainer}>
        <img src={logo} alt='logo' /> BnB
      </div>
      {isAutenticated ? (
        <UserAvatar username={localStorage.getItem('username')} />
      ) : (
        <AuthButton />
      )}
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
