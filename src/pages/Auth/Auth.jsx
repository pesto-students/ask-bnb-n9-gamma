import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Modal, Icon } from 'semantic-ui-react';
import styles from './Auth.module.css';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const Auth = (props) => {
  // const history = useHistory();
  const [open, setOpen] = useState(true);
  const [hideSignIn, setHideSignIn] = useState(false);
  const [hideSignUp, setHideSignUp] = useState(true);
  const [formHeader, setFormHeader] = useState('Sign In');
  const [inputs, setInputs] = useState({});

  // Show Login Form & hide Register Form
  const showLoginForm = () => {
    setHideSignIn(false);
    setHideSignUp(true);
    setFormHeader('Sign In');
  };

  // Show Register Form & hide Login Form
  const showRegisterForm = () => {
    setHideSignIn(true);
    setHideSignUp(false);
    setFormHeader('Sign Up');
  };

  // Handles onChange event of input fields
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Handles onSubmit event of Login form
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log('From login submit');
    console.log(inputs);

    // Send a POST request
    const response = await axios({
      method: 'post',
      url: 'http://localhost:9000/api/user/login',
      data: {
        email: inputs.email,
        password: inputs.password,
      },
    });

    // Extract the data from the response object
    const payload = response.data;
    localStorage.setItem('auth-token', payload.data.token);
    localStorage.setItem('username', payload.data.name);
    localStorage.setItem('isAuthenticated', true);
    console.log(payload);
    //history.goBack();
    console.log(props.location.state.referrer);
    window.location.href = props.location.state.referrer;
  };

  // Handles onSubmit event of Register form
  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    console.log('From register submit');
    console.log(inputs);

    // Send a POST request
    const response = await axios({
      method: 'post',
      url: 'http://localhost:9000/api/user/register',
      data: {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      },
    });

    // Extract the data from the response object
    const payload = response.data;
    console.log(payload);
  };

  // Handles Google login onSuccess
  const responseGoogle = (response) => {
    console.log(response);
    axios({
      method: 'POST',
      url: 'http://localhost:9000/api/user/googlelogin',
      data: { tokenId: response.tokenId },
    }).then((response) => {
      const payload = response.data;
      localStorage.setItem('auth-token', payload.data.token);
      localStorage.setItem('username', payload.data.name);
      localStorage.setItem('isAuthenticated', true);
      console.log(payload);
      //history.goBack();
      console.log(props.location.state.referrer);
      window.location.href = props.location.state.referrer;
    });
  };

  return (
    <>
      <Modal
        size="tiny"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Content>
          <div className={styles.modalContent}>
            <h3>{formHeader}</h3>
            <Form
              className={styles.form}
              hidden={hideSignIn}
              onSubmit={handleLoginSubmit}
              data-testid="loginform"
            >
              <Form.Field className={styles.inputField}>
                <input
                  value={inputs.email}
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  data-testid="loginemail"
                />
              </Form.Field>
              <Form.Field className={styles.inputField}>
                <input
                  value={inputs.password}
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  data-testid="loginpassword"
                />
              </Form.Field>
              <Button
                basic
                color="black"
                className={styles.button}
                type="submit"
                data-testid="loginsubmit"
              >
                Continue
              </Button>
              <span style={{ marginTop: '10px' }}>
                <span className={styles.link}>Forgot Password</span>
              </span>
              <span style={{ marginTop: '10px' }}>
                Don't have an account.
                <span className={styles.link} onClick={showRegisterForm}>
                  Sign Up Now
                </span>
              </span>
            </Form>
            <Form
              className={styles.form}
              hidden={hideSignUp}
              onSubmit={handleRegisterSubmit}
            >
              <Form.Field className={styles.inputField}>
                <input
                  value={inputs.name}
                  placeholder="Full Name"
                  name="name"
                  onChange={handleChange}
                  data-testid="registername"
                />
              </Form.Field>
              <Form.Field className={styles.inputField}>
                <input
                  value={inputs.email}
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  data-testid="registeremail"
                />
              </Form.Field>
              <Form.Field className={styles.inputField}>
                <input
                  value={inputs.password}
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  data-testid="registerpassword"
                />
              </Form.Field>
              <Button
                basic
                color="black"
                className={styles.button}
                type="submit"
                data-testid="registersubmit"
              >
                Sign Up Now
              </Button>
              <span style={{ marginTop: '10px' }}>
                Already have an account.
                <span className={styles.link} onClick={showLoginForm}>
                  Sign In Here
                </span>
              </span>
            </Form>
            <div className={styles.or}>OR</div>
            <GoogleLogin
              clientId="62568579646-22dpn8tc7i77jg2c0mmtestk55nm1naj.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  basic
                  color="black"
                  className={styles.button}
                  type="submit"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <Icon name="google" /> Continue with Google
                </Button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Auth;
