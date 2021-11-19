import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';
import HotelList from './HotelList';

test('renders list summary', () => {
  render(
    <Router>
      <HotelList />
    </Router>
  );
  const listSummary = screen.getByTestId('listsummary');
  expect(listSummary).toBeInTheDocument();
});

test('renders hotel list', () => {
  render(
    <Router>
      <HotelList />
    </Router>
  );
  const hotelList = screen.getByTestId('hotellist');
  expect(hotelList).toBeInTheDocument();
});
