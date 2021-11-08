import Header from '../shared/Header';
import Footer from '../shared/Footer';
import styles from './HotelList.module.css';
import HotelListItem from './HotelListItem';

const HotelList = () => {
  const hotelList = [
    {
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
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
    {
      hotelDetail: '1 BHK Service Apartment',
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
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
    {
      hotelDetail: '1 BHK Service Apartment',
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
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
    {
      hotelDetail: '1 BHK Service Apartment',
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
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
    {
      hotelDetail: '1 BHK Service Apartment',
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
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
    {
      hotelDetail: '1 BHK Service Apartment',
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
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
    {
      hotelDetail: '1 BHK Service Apartment',
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
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
  ];

  const getIndividualItems = () => {
    return hotelList.map(item => <HotelListItem styles={styles} data={item} />);
  };

  return (
    <>
      <div>
        <Header color='#2E2E2E' />
        <div className={styles.listSummary}>
          <div className={styles.filterDetails}>
            100+ stays | 18th October to 21st October | 2 guests
          </div>
          <div className={styles.locationDetails}>Stay in Bangalore</div>
        </div>
        <div className={styles.hotelListWrapper}>
          {getIndividualItems()}
          {/* <div className={style.hotelListItem}>
            <img
              src='https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE='
              alt=''
            />
            <div className={style.descriptionContainer}>
              <div className={style.descriptionHeader}>
                1 BHK Service Apartment
              </div>
              <div className={style.descriptionSubHeader}>
                Fully furnished apartment in HRS Layout
              </div>
              <div className={style.amnities}>All - Amnities - Goes - Here</div>
              <div className={style.amnities}>All - Amnities - Goes - Here</div>
              <Button className={style.viewButton} color='teal'>
                View Rooms
              </Button>
              <div className={style.reviewContainer}>
                <FaStar color='yellow' /> 4.5 (<span>11 reviews</span>)
              </div>
              <div className={style.priceContainer}>
                <div className={style.perDayPrice}>
                  Rs. 1000 <span>/ night</span>
                </div>
                <div className={style.totalPrice}>Rs. 4000 total</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer className={styles.footerContainer} />
    </>
    // <div>
    //   <h1>Hotel Listing</h1>
    //   HotelList page is here
    // </div>
  );
};

export default HotelList;
