import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

import { addFilters } from '../../actions/hotelAction';
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
        <Header transparent={true} history={history} />
        <div className='searchBarContainer'>
          <form className={styles.formWrapper} onSubmit={() => onSubmit()}>
            <Segment className={styles.formContainer}>
              <Grid stackable>
                <Grid.Row>
                  <Grid.Column width={6} className={styles.inputGrid}>
                    <input
                      type='text'
                      placeholder='Where are you going?'
                      value={location}
                      className={styles.inputField}
                      onChange={e => setLocation(e.target.value)}
                      data-testid='location'
                      required
                    />
                    {/* <div className={styles.vl}></div> */}
                  </Grid.Column>
                  <Grid.Column width={3} className={styles.inputGrid}>
                    <input
                      type='date'
                      name='startDate'
                      placeholder='check-in'
                      // value={startDate}
                      className={styles.inputField}
                      min={new Date().toISOString().slice(0, -14)}
                      max={new Date(
                        new Date().setDate(new Date().getDate() + 14)
                      )
                        .toISOString()
                        .slice(0, -14)}
                      onChange={e => setStartDate(e.target.value)}
                      data-testid='checkin'
                      required
                    />
                    {/* <div className={styles.vl}></div> */}
                  </Grid.Column>
                  <Grid.Column width={3} className={styles.inputGrid}>
                    <input
                      type='date'
                      name='endDate'
                      value={endDate}
                      min={startDate}
                      className={styles.inputField}
                      max={new Date(
                        new Date().setDate(new Date().getDate() + 14)
                      )
                        .toISOString()
                        .slice(0, -14)}
                      onChange={e => setEndDate(e.target.value)}
                      data-testid='checkout'
                      required
                    />
                    {/* <div className={styles.vl}></div> */}
                  </Grid.Column>
                  <Grid.Column width={2} className={styles.inputGrid}>
                    <input
                      type='number'
                      name='guests'
                      value={guests}
                      className={styles.inputField}
                      onChange={e => setGuests(e.target.value)}
                      data-testid='guests'
                      required
                    />
                  </Grid.Column>
                  <Grid.Column width={2} className={styles.inputGrid}>
                    <button type='submit' className={styles.submitButton}>
                      <FaSearch
                        color='grey'
                        className={styles.searchIcon}
                        data-testid='searchbutton'
                      />
                    </button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
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
