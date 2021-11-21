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
import { useState } from 'react';

const App = () => {
  // const {
  //   hotel: { showModal },
  // } = store.getState();
  // console.log(showModal);
  const [showModal, setShowModal] = useState(false);

  const activateModal = () => {
    console.log('I am in openmodal');
    setShowModal(true);
  };

  const closeModal = () => {
    console.log('i am in close modal');
    setShowModal(false);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/list"
              component={HotelList}
              // render={props => {
              //   <HotelList {...props} />;
              // }}
            />
            <Route exact path="/hotel/:hotelId" component={HotelDetail} />
            <Route exact path="/auth" component={Auth} />
            <ProtectedRoute exact path="/booking" component={Booking} />
            <ProtectedRoute
              exact
              path="/bookingHistory"
              component={BookingHistory}
            />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
