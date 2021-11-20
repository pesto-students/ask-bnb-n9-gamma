import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import HotelList from './pages/HotelList/HotelList';
import HotelDetail from './pages/HotelDetails/HotelDetail';
import { Provider } from 'react-redux';
import store from './store';
import Auth from './pages/Auth/Auth';
import Booking from './pages/Booking/Booking';
import BookingHistory from './pages/BookingHistory/BookingHistory';
import ProtectedRoute from './pages/shared/ProtectedRoute';

const App = () => {
  const {
    hotel: { showModal },
  } = store.getState();
  console.log(showModal);
  return (
    <Provider store={store}>
      <div className='App'>
        <Auth showModal={showModal} />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
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
