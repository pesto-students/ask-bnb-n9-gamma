import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Auth from './Auth';

test('email input is in document', () => {
  render(<Auth />);
  const loginemail = screen.getByTestId('loginemail');
  expect(loginemail).toBeInTheDocument();
});

test('email value is changed correctly', () => {
  render(<Auth />);
  const loginemail = screen.getByTestId('loginemail');
  userEvent.type(loginemail, 'pesto@pesto.tech');
  expect(loginemail).toHaveValue('pesto@pesto.tech');
});

test('password input is in document', () => {
  render(<Auth />);
  const loginpassword = screen.getByTestId('loginpassword');
  expect(loginpassword).toBeInTheDocument();
});

test('password value is changed correctly', () => {
  render(<Auth />);
  const loginpassword = screen.getByTestId('loginpassword');
  userEvent.type(loginpassword, 'pesto@123');
  expect(loginpassword).toHaveValue('pesto@123');
});

test('handle login submit is called', () => {
  const auth = render(<Auth />);
  const spy = jest.spyOn(auth, 'handleLoginSubmit');
  const loginsubmit = auth.screen.getByTestId('loginsubmit');
  userEvent.click(loginsubmit);
  expect(spy).toBeCalled();
});
