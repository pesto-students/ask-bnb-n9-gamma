import { useEffect } from 'react';
import { Button, Container, Grid, Segment } from 'semantic-ui-react';
import Header from '../shared/Header';
import styles from './BookingHistory.module.css';
import moment from 'moment';
import axios from 'axios';

const BookingHistory = () => {
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:9000/api/booking/bookinghistory',
      headers: {
        'auth-token': localStorage.getItem('auth-token'),
      },
    }).then(response => {
      console.log(response.data);
    });
  }, []);
  return (
    <>
      <Header></Header>
      <Container textAlign='left'>
        <h1>My Bookings</h1>
        <Segment color='red'>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <span className={styles.hotelName}>Hotel Paradise </span>
                <br />
                <br />
                <span className={styles.cityName}>Bangalore</span>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button basic color='red' floated='right'>
                  Cancel Booking
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
                      <b>{moment('2021-11-18').format('DD MMM')}</b>
                    </span>
                  </Segment>
                  <Segment>
                    <span>Check Out</span>
                    <br />
                    <span className={styles.checkOut}>
                      <b>{moment('2021-11-21').format('DD MMM')}</b>
                    </span>
                  </Segment>
                  <Segment>
                    <span>Guests</span>
                    <br />
                    <span className={styles.guests}>
                      <b>2</b>
                    </span>
                  </Segment>
                  <Segment>
                    <span>Status</span>
                    <br />
                    <span className={styles.status}>
                      <b>Confirmed</b>
                    </span>
                  </Segment>
                </Segment.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </>
  );
};

export default BookingHistory;
