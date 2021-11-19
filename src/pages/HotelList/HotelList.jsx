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
      _id: 1,
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
    {
      hotelDetail: '1 BHK Service Apartment 2',
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
      _id: 2,
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
    {
      hotelDetail: '1 BHK Service Apartment 3',
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
      _id: 3,
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
    {
      hotelDetail: '1 BHK Service Apartment 4',
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
      _id: 4,
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
    {
      hotelDetail: '1 BHK Service Apartment 5',
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
      _id: 5,
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
    {
      hotelDetail: '1 BHK Service Apartment 6',
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
      _id: 6,
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
    {
      hotelDetail: '1 BHK Service Apartment 7',
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
      _id: 7,
      image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
  ];

  const getIndividualItems = () => {
    return hotelList.map((item) => (
      <HotelListItem styles={styles} data={item} />
    ));
  };

  return (
    <>
      <div>
        <Header color="#2E2E2E" />
        <div className={styles.listSummary} data-testid="listsummary">
          <div className={styles.filterDetails}>
            100+ stays | 18th October to 21st October | 2 guests
          </div>
          <div className={styles.locationDetails}>Stay in Bangalore</div>
        </div>
        <div className={styles.hotelListWrapper} data-testid="hotellist">
          {getIndividualItems()}
        </div>
      </div>
      <Footer className={styles.footerContainer} />
    </>
  );
};

export default HotelList;
