import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import HotelList from './pages/HotelList/HotelList';
import HotelDetail from './pages/HotelDetails/HotelDetail';
import { Provider } from 'react-redux';
import store from './store';
import Auth from './pages/Auth/Auth';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/list' component={HotelList} />
            <Route exact path='/hotel/:hotelId' component={HotelDetail} />
            <Route exact path="/auth" component={Auth} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
