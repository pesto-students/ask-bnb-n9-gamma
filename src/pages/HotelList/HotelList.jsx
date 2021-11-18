import Header from '../shared/Header';
import Footer from '../shared/Footer';
import styles from './HotelList.module.css';
import HotelListItem from './HotelListItem';
import { connect } from 'react-redux';
import { getHotels } from '../../actions/hotelAction';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const HotelList = ({ hotel: { filter, hotelList }, getHotels, history }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // const [range1, setRange1] = useState(null);
  const range1 = moment.range(startDate, endDate);

  useEffect(() => {
    getHotels('Bangalore');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStartDate(filter.startDate);
    setEndDate(filter.endDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // useEffect(() => {
  //   setRange1(moment.range(startDate, endDate));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [startDate, endDate]);

  const getIndividualItems = () => {
    return hotelList.map(item => (
      <HotelListItem
        key={item._id}
        styles={styles}
        data={item}
        history={history}
      />
    ));
  };
  // useEffect(() => {
  // }, [hotelList])

  return (
    <>
      <div>
        <Header color='#2E2E2E' />
        <div className={styles.listSummary}>
          <div className={styles.filterDetails}>
            100+ stays | {moment(startDate).format('Do MMMM')} to{' '}
            {moment(endDate).format('Do MMMM')} | {range1.diff('days')} days |{' '}
            {filter.guests} guests
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
  getHotels: PropTypes.func.isRequired,
};

const mapStateToProp = state => ({
  hotel: state.hotel,
});

export default connect(mapStateToProp, { getHotels })(HotelList);
