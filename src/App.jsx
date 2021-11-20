import './App.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Auth from './pages/Auth/Auth';
import Booking from './pages/Booking/Booking';
import BookingHistory from './pages/BookingHistory/BookingHistory';
import Home from './pages/Home/Home';
import HotelDetail from './pages/HotelDetails/HotelDetail';
import HotelList from './pages/HotelList/HotelList';
import ProtectedRoute from './pages/shared/ProtectedRoute';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/auth' component={Auth} />
            <Route exact path='/list' component={HotelList} />
            <Route exact path='/hotel/:hotelId' component={HotelDetail} />
            <ProtectedRoute exact path='/booking' component={Booking} />
            <ProtectedRoute
              exact
              path='/bookingHistory'
              component={BookingHistory}
            />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
