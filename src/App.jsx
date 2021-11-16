import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import HotelList from './pages/HotelList/HotelList';
import Auth from './pages/Auth/Auth';
import Booking from './pages/Booking/Booking';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={HotelList} />
          <Route exact path="/hotel/:hotelId" component={HotelList} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/booking" component={Booking} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
