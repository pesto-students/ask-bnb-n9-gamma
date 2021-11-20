import { useEffect, useState } from 'react';
import { Button, Container, Grid, Segment } from 'semantic-ui-react';
import Header from '../shared/Header';
import styles from './BookingHistory.module.css';
import moment from 'moment';
import axios from 'axios';

const BookingHistory = ({ history }) => {
  const [bookingHistory, setBookingHistory] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:9000/api/booking/bookinghistory',
      headers: {
        'auth-token': localStorage.getItem('auth-token'),
      },
    }).then(response => {
      console.log(response.data.data);
      setBookingHistory(response.data.data);
    });
  }, []);
  return (
    <>
      <Header history={history} />
      <Container textAlign='left'>
        <h1>My Bookings</h1>
        {bookingHistory.length &&
          bookingHistory.map(booking => (
            <Segment color='red'>
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
                    <Button basic color='red' floated='right' disabled>
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
          ))}
      </Container>
    </>
  );
};

export default BookingHistory;
