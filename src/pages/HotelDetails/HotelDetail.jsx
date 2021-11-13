import { FaMinus, FaPlus, FaRegTrashAlt } from 'react-icons/fa';
import { Button } from 'semantic-ui-react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import styles from './HotelDetail.module.css';
import { Link } from 'react-router-dom';

const HotelDetail = () => {
  const data = {
    hotelDetail: '1 BHK Service Apartment 1',
    note: 'Fully furnished apartment in HRS Layout',
    amnities: [
      '2 guest',
      '1 Bed',
      'Studio',
      '2 Bathrooms',
      'WiFi',
      'Kitchen',
      'Free Parking',
    ],
    reviews: '11',
    ratings: '4.5',
    averagePrice: '1000',
    _id: 1,
    image:
      'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    availableRooms: 3,
    maxOccupancy: 2,
  };

  const getRoomDetails = () => (
    <div>
      <div className={styles.roomSelection}>
        <div className={styles.guestDetailRow}>
          <span className={styles.roomNum}>Room 1</span>
          <div className={styles.addGuestRow}>
            <span className={`${styles.removeGuest} ${styles.buttonCircle}`}>
              <FaPlus />
            </span>
            <span className={styles.guestCount}>1 Guest</span>
            <span className={`${styles.addGuest} ${styles.buttonCircle}`}>
              <FaMinus />
            </span>
          </div>
          <span className={styles.removeLink}>
            <FaRegTrashAlt size='100%' />
          </span>
        </div>
      </div>
      <div className={styles.addRoom}>
        <FaPlus size='10' style={{ padding: '0 2px 0 0' }} />{' '}
        <span>Add Rooms</span>
      </div>
    </div>
  );

  return (
    <>
      <div>
        <Header color='#2E2E2E' />
      </div>
      <div className={styles.detailWrapper}>
        <div className={styles.imageContainer}>
          <div className={styles.mainImageContainer}>
            <img src={data.image} alt='' />
          </div>
          <div className={styles.additionalImageContainer}>
            <img src={data.image} alt='' />
            <img src={data.image} alt='' />
            <img src={data.image} alt='' />
            <img src={data.image} alt='' />
          </div>
        </div>
        <div className={styles.decriptionContainer}>
          <div className={styles.heading}>
            Fully furnished apartment in HRS Layout
          </div>
          <div className={styles.minDetail}>
            2 guest - 1 Bed - Studio - 2 Bathrooms
          </div>
        </div>
        <div className={styles.roomCustomizationContainer}>
          <div className={styles.leftContainer}>
            <img src={data.image} alt='' className={styles.roomImage} />
            <div className={styles.amenitiesColumn}>
              <ul>
                <li>Fits 3</li>
                <li>Fits 3</li>
                <li>Fits 3</li>
                <li>Fits 3</li>
              </ul>
            </div>
          </div>
          <div className={styles.rightContainer}>
            {getRoomDetails()}
            <div className={styles.verticalLine}></div>
            <div className={styles.priceWrapper}>
              <div className={styles.priceContainer}>
                <div className={styles.totalPrice}>Rs. 1234</div>
                <div className={styles.priceDescription}>
                  for 2 guest, 1 night
                </div>
              </div>
              <div className={styles.flexBox}>
                <Link to='/'>
                  <Button color='yellow' className={styles.bookButton}>
                    Book
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='amenityContainer'>
          <div className='amenityHeader'></div>
          <div className='availedAmenities'></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HotelDetail;
