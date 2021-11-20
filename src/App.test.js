import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders location search input', () => {
  render(<App />);
  const locationInput = screen.getByTestId('location');
  expect(locationInput).toBeInTheDocument();
});

test('renders checkin date input', () => {
  render(<App />);
  const checkInInput = screen.getByTestId('checkin');
  expect(checkInInput).toBeInTheDocument();
});

test('renders checkout date input', () => {
  render(<App />);
  const checkOutInput = screen.getByTestId('checkout');
  expect(checkOutInput).toBeInTheDocument();
});

test('renders guests input', () => {
  render(<App />);
  const guestsInput = screen.getByTestId('guests');
  expect(guestsInput).toBeInTheDocument();
});

test('renders search button', () => {
  render(<App />);
  const searchButton = screen.getByTestId('searchbutton');
  expect(searchButton).toBeInTheDocument();
});
