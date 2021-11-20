import React from 'react';
import {
  Grid,
  Segment,
  Sticky,
  Divider,
  Button,
  Container,
  Image,
  Message,
} from 'semantic-ui-react';
import Header from '../shared/Header';
import styles from './Booking.module.css';
import visa from './images/visa.png';
import upi from './images/upi.png';
import mastercard from './images/mastercard.png';
import moment from 'moment';
import axios from 'axios';
import { useState } from 'react';

const Booking = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const booking_details = {
    hotel_id: '1',
    hotel_name: 'Hotel Paradise',
    city: 'Banglore',
    hotel_thumbnail: 'https://react.semantic-ui.com/images/wireframe/image.png',
    check_in: '2021-11-18',
    check_out: '2021-11-21',
    guests: '2',
    rooms_selected: [{ type: 'standard', room_id: '103', price: 1500 }],
  };

  const calculateTotal = () => {
    let total = 0;
    booking_details.rooms_selected.forEach((room) => {
      total +=
        room.price *
        moment(booking_details.check_out).diff(
          moment(booking_details.check_in),
          'days'
        );
    });
    return total;
  };

  const checkout = async () => {
    // Create order from the server
    var res = await axios({
      method: 'POST',
      url: 'http://localhost:9000/api/booking/newbooking',
      data: {
        hotel_id: booking_details.hotel_id,
        check_in: booking_details.check_in,
        check_out: booking_details.check_out,
        rooms_booked: booking_details.rooms_selected,
        amount: calculateTotal() * 100, // Amount should be in Paise. So, multiply by 100.
      },
      headers: {
        'auth-token': localStorage.getItem('auth-token'),
      },
    });

    // Store order data sent from server
    /* Format of Payload
        code: 200
        data:
          amount: 50000
          amount_due: 50000
          amount_paid: 0
          attempts: 0
          created_at: 1636143827
          currency: "INR"
          entity: "order"
          id: "order_II3KpZeG6YftRu"
          notes: []
          offer_id: null
          receipt: null
          status: "created"
          [[Prototype]]: Object
        message: "Order created successfully"
        status: "Success"
    */
    const payload = res.data;
    console.log(payload);

    // Define options to initialize for checkout/payment
    const options = {
      key: 'rzp_test_1QYZLKUjPqLEA3', // Enter the Key ID generated from the Dashboard
      amount: payload.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'ASKBNB',
      description: 'Hotel Room Booking',
      image: 'https://example.com/your_logo',
      order_id: payload.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        console.log(
          'Payment Id',
          response.razorpay_payment_id,
          typeof response.razorpay_payment_id
        );
        console.log('Order Id', response.razorpay_order_id);
        console.log('Signature', response.razorpay_signature);
        const res = await axios({
          method: 'POST',
          url: 'http://localhost:9000/api/booking/verifypayment',
          data: {
            order_id: response.razorpay_order_id.toString(),
            payment_id: response.razorpay_payment_id.toString(),
          },
        });
        const payload = res.data;
        console.log(payload);
        if (payload.code === 400) {
          setErrorMessage(payload.message);
          setShowErrorMessage(true);
        } else {
          setSuccessMessage(payload.message);
          setShowSuccessMessage(true);
        }
      },
      theme: {
        color: '#3399cc',
      },
    };
    try {
      // Instatiate Razorpay object with options as parameter
      var rzp1 = new window.Razorpay(options);

      // Open Razorpay checkout page
      rzp1.open();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Header />
      <Container textAlign="left">
        <Message success hidden={!showSuccessMessage}>
          {successMessage}
        </Message>
        <Message error hidden={!showErrorMessage}>
          {errorMessage}
        </Message>
        <h1>Confirm and Pay</h1>
        <Grid stackable>
          <Grid.Column width={10}>
            <Segment text>
              <h2>Your Trip</h2>
              <h3>Dates</h3>
              <p>
                {moment(booking_details.check_in).format('DD MMM')} -{' '}
                {moment(booking_details.check_out).format('DD MMM')}
              </p>
              <h3>Guests</h3>
              <p>{booking_details.guests}</p>
              <Divider />
              <h2>Pay With</h2>
              <img className={styles.logo} src={visa} alt="visa" />
              <img className={styles.logo} src={mastercard} alt="mastercard" />
              <img className={styles.logo} src={upi} alt="upi" />
              <Divider />
              <h2>Cancellation Policy</h2>
              <br />
              <p>
                Only the cleaning fee is refundable because check-in is less
                than 7 days away.
                <a href="#">
                  <strong>Learn More</strong>
                </a>
              </p>
              <p>
                Our Extenuating Circumstances policy does not cover travel
                disruptions caused by COVID-19.
                <a href="#">
                  <strong>Learn More</strong>
                </a>
              </p>
            </Segment>
            <Button size="big" color="red" floated="left" onClick={checkout}>
              Confirm and Pay
            </Button>
          </Grid.Column>
          <Grid.Column width={6}>
            <Sticky>
              <Segment>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <Image
                        src={booking_details.hotel_thumbnail}
                        size="medium"
                      />
                    </Grid.Column>
                    <Grid.Column width={8} textAlign="right">
                      <h3>{booking_details.hotel_name}</h3>
                      <h5>{booking_details.city}</h5>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Divider />
                <Segment>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <h2>Price Details</h2>
                      </Grid.Column>
                    </Grid.Row>
                    {booking_details.rooms_selected.map((room) => {
                      return (
                        <Grid.Row>
                          <Grid.Column width={8}>
                            <span className={styles.item}>
                              {room.type.toUpperCase()} X{' '}
                              {moment(booking_details.check_out).diff(
                                moment(booking_details.check_in),
                                'days'
                              )}{' '}
                              days
                            </span>
                          </Grid.Column>
                          <Grid.Column width={8}>
                            <span className={styles.price}>
                              {room.price *
                                moment(booking_details.check_out).diff(
                                  moment(booking_details.check_in),
                                  'days'
                                )}
                            </span>
                          </Grid.Column>
                        </Grid.Row>
                      );
                    })}

                    <Grid.Row>
                      <Grid.Column width={8}>
                        <h3 className={styles.item}>Total</h3>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h3 className={styles.price}>{calculateTotal()}</h3>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Segment>
            </Sticky>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default Booking;
