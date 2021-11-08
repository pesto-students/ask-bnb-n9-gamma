import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import HotelList from './pages/HotelList/HotelList';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/list' component={HotelList} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
