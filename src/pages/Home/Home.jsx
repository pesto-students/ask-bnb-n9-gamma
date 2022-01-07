import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Dropdown, Grid, Segment } from 'semantic-ui-react';

import { addFilters } from '../../actions/hotelAction';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import styles from './Home.module.css';

const Home = ({ history, addFilters, hotel: { filter }, activateModal }) => {
  const countryOptions = [
    { key: 'af', value: 'bangalore', text: 'Bangalore' },
    { key: 'ax', value: 'chennai', text: 'Chennai' },
    { key: 'al', value: 'pune', text: 'Pune' },
    { key: 'dz', value: 'mumbai', text: 'Mumbai' },
    { key: 'as', value: 'kolkata', text: 'Kolkata' },
    { key: 'dl', value: 'delhi', text: 'Delhi' },
  ];

  const [location, setLocation] = useState(filter?.location || '');
  const [startDate, setStartDate] = useState(filter?.startDate || '');
  const [endDate, setEndDate] = useState(filter?.endDate || '');
  const [guests, setGuests] = useState(filter?.guests);

  const onSubmit = () => {
    addFilters({ location, startDate, endDate, guests });
    history.push('/list');
  };

  const _onFocus = e => {
    e.currentTarget.type = 'date';
  };

  const _onBlur = e => {
    e.currentTarget.type = 'text';
    // e.currentTarget.placeholder = "Enter a Date";
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <Header
          transparent={true}
          history={history}
          activateModal={activateModal}
        />
        <div className='searchBarContainer'>
          <form className={styles.formWrapper} onSubmit={() => onSubmit()}>
            <Segment className={styles.formContainer}>
              <Grid stackable>
                <Grid.Row>
                  <Grid.Column width={4} className={styles.inputGrid}>
                    <Dropdown
                      labeled
                      className={styles.locationDropdown}
                      defaultValue={location || ''}
                      onChange={(e, { value }) => setLocation(value)}
                      options={countryOptions}
                      placeholder='Where are you going?'
                    />
                    {/* <input
                      type='text'
                      placeholder='Where are you going?'
                      value={location}
                      className={styles.inputField}
                      onChange={e => setLocation(e.target.value)}
                      data-testid='location'
                      required
                    /> */}
                  </Grid.Column>
                  <Grid.Column width={4} className={styles.inputGrid}>
                    <input
                      type='text'
                      name='startDate'
                      placeholder='Check-in'
                      onFocus={_onFocus}
                      onBlur={_onBlur}
                      value={startDate}
                      className={styles.inputField}
                      min={new Date().toISOString().slice(0, -14)}
                      max={new Date(
                        new Date().setDate(new Date().getDate() + 4 * 30)
                      )
                        .toISOString()
                        .slice(0, -14)}
                      onChange={e => setStartDate(e.target.value)}
                      data-testid='checkin'
                      required
                    />
                    {/* <div className={styles.vl}></div> */}
                  </Grid.Column>
                  <Grid.Column width={4} className={styles.inputGrid}>
                    <input
                      type='text'
                      name='endDate'
                      placeholder='Check-out'
                      onFocus={_onFocus}
                      onBlur={_onBlur}
                      value={endDate}
                      min={startDate}
                      className={styles.inputField}
                      max={new Date(
                        new Date().setDate(new Date().getDate() + 4 * 30)
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
                      placeholder='Guests'
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
