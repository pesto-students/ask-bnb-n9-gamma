import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';
import { addFilters } from '../../actions/hotelAction';
import PropTypes from 'prop-types';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import styles from './Home.module.css';

const Home = ({ history, addFilters, hotel: { filter } }) => {
  const [location, setLocation] = useState(filter?.location || '');
  const [startDate, setStartDate] = useState(
    filter?.startDate || new Date().toLocaleDateString()
  );
  const [endDate, setEndDate] = useState(filter?.endDate || '');
  const [guests, setGuests] = useState(filter?.guests || 2);

  const onSubmit = () => {
    addFilters({ location, startDate, endDate, guests });
    history.push('/list');
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <Header transparent={true} />
        <div className='searchBarContainer'>
          <form className={styles.formWrapper} onSubmit={() => onSubmit()}>
            <div className={styles.formContainer}>
              <input
                type='text'
                placeholder='Where are you going?'
                value={location}
                onChange={e => setLocation(e.target.value)}
                data-testid="location"
                required
              />
              <div className={styles.vl}></div>
              <input
                type='date'
                name='startDate'
                value={startDate}
                min={new Date().toISOString().slice(0, -14)}
                max={new Date(new Date().setDate(new Date().getDate() + 14))
                  .toISOString()
                  .slice(0, -14)}
                onChange={e => setStartDate(e.target.value)}
                data-testid="checkin"
                required
              />
              <div className={styles.vl}></div>
              <input
                type='date'
                name='endDate'
                value={endDate}
                min={startDate}
                max={new Date(new Date().setDate(new Date().getDate() + 14))
                  .toISOString()
                  .slice(0, -14)}
                onChange={e => setEndDate(e.target.value)}
                data-testid="checkout"
                required
              />
              <div className={styles.vl}></div>
              <input
                type='number'
                name='guests'
                value={guests}
                onChange={e => setGuests(e.target.value)}
                data-testid="guests"
                required
              />
              <button type='submit'>
                <FaSearch color='grey' className={styles.searchIcon} data-testid="searchbutton"/>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer className={styles.footerContainer} />
    </>
  );
};

Home.propType = {
  addFilters: PropTypes.func.isRequired,
};

const mapStateToProp = state => ({
  hotel: state.hotel,
});

export default connect(mapStateToProp, { addFilters })(Home);
