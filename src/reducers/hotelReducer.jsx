import { SET_FILTER } from '../actions/types';

const initialState = {
  filter: {},
  hotelList: [
    {
      hotelDetail: '1 BHK Service Apartment 12',
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
  ],
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return { ...state, filter: { ...payload } };

    default:
      return state;
  }
};
