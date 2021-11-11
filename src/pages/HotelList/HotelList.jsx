import Header from '../shared/Header';
import Footer from '../shared/Footer';
import styles from './HotelList.module.css';
import HotelListItem from './HotelListItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const HotelList = ({ hotelList }) => {
  // console.log(hotelList);
  const getIndividualItems = () => {
    return hotelList.map(item => (
      <HotelListItem key={item._id} styles={styles} data={item} />
    ));
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
        <div className={styles.hotelListWrapper}>{getIndividualItems()}</div>
      </div>
      <Footer className={styles.footerContainer} />
    </>
  );
};

HotelList.propType = {
  hotel: PropTypes.array.isRequired,
};

const mapStateToProp = state => ({
  hotelList: state.hotel.hotelList,
});

export default connect(mapStateToProp, {})(HotelList);
