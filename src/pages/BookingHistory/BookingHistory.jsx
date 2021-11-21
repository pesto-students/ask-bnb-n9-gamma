import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Loader from 'react-cssfx-loading/lib/FillingBottle';
import { connect } from 'react-redux';
import { Button, Container, Grid, Segment } from 'semantic-ui-react';

import Footer from '../shared/Footer';
import Header from '../shared/Header';
import styles from './BookingHistory.module.css';

const API_ENDPOINT = process.env.REACT_APP_API_URL;

const BookingHistory = ({ history }) => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: `${API_ENDPOINT}api/booking/bookinghistory`,
      headers: {
        'auth-token': localStorage.getItem('auth-token'),
      },
    }).then(response => {
      console.log(response.data.data);
      setLoading(false);
      setBookingHistory(response.data.data);
    });
  }, []);

  const NoBooking = () => (
    <div className={styles.noBookingContainer}>No Booking yet</div>
  );

  if (loading) {
    return (
      <div className="loaderContainer">
        <Loader width="5rem" height="5rem" />
      </div>
    );
  }

  return (
    <>
      <Header history={history} />
      <Container textAlign="left" className={styles.bottomMargin}>
        <h1>My Bookings</h1>
        {bookingHistory.length
          ? bookingHistory.map(booking => (
              <Segment color="red">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={10}>
                      <span className={styles.hotelName}>
                        {booking.hotel_name}{' '}
                      </span>
                      <br />
                      <br />
                      <span className={styles.cityName}>{booking.city}</span>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Button basic color="red" floated="right" disabled>
                        Cancel Booking (FS)
                      </Button>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Segment.Group horizontal>
                        <Segment>
                          <span>Check In</span>
                          <br />
                          <span className={styles.checkIn}>
                            <b>{moment(booking.check_in).format('DD MMM')}</b>
                          </span>
                        </Segment>
                        <Segment>
                          <span>Check Out</span>
                          <br />
                          <span className={styles.checkOut}>
                            <b>{moment(booking.check_out).format('DD MMM')}</b>
                          </span>
                        </Segment>
                        <Segment>
                          <span>Guests</span>
                          <br />
                          <span className={styles.guests}>
                            <b>{booking.guests || 2}</b>
                          </span>
                        </Segment>
                        <Segment>
                          <span>Status</span>
                          <br />
                          <span className={styles.status}>
                            <b>{booking.status}</b>
                          </span>
                        </Segment>
                      </Segment.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            ))
          : NoBooking()}
      </Container>
      <Footer className={styles.footerContainer} />
    </>
  );
};

const mapStateToProp = state => ({
  loading: state.hotel.loading,
});

export default connect(mapStateToProp, {})(BookingHistory);
