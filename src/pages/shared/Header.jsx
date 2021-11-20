import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Grid, Image } from 'semantic-ui-react';

import { showAuthModal } from '../../actions/hotelAction';
import logo from './ASK.svg';
import style from './Header.module.css';

const Header = ({ history, showAuthModal }) => {
  const isAutenticated = localStorage.getItem('isAuthenticated');

  const UserAvatar = props => {
    return (
      <div className={style.avatarContainer}>
        <Image
          className={style.avatarImage}
          src='https://react.semantic-ui.com/images/wireframe/square-image.png'
          avatar
        />
        <span>{'Welcome, ' + props.username.split(' ')[0]}</span>
        <Dropdown>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to='/'>Home</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='/bookinghistory'>My Bookings</Link>
            </Dropdown.Item>
            <Dropdown.Item>My Account (FS)</Dropdown.Item>
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
    history.push('/');
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <div className={style.headerContainer}>
            <div
              onClick={() => history.push('/')}
              className={style.logoContainer}>
              <img src={logo} alt='logo' /> BnB
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          {isAutenticated ? (
            <UserAvatar username={localStorage.getItem('username')} />
          ) : (
            <AuthButton />
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

Header.defaultProps = {
  transparent: false,
};

Header.propType = {
  transparent: PropTypes.bool.isRequired,
};

export default connect(null, { showAuthModal })(Header);
