import Header from '../shared/Header';
import Footer from '../shared/Footer';
import styles from './HotelList.module.css';
import HotelListItem from './HotelListItem';
import { connect } from 'react-redux';
import { getHotels, setLoading } from '../../actions/hotelAction';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import NoHotels from './NoHotels';
import Loader from 'react-cssfx-loading/lib/FillingBottle';
import { Grid } from 'semantic-ui-react';

const moment = extendMoment(Moment);

const HotelList = ({
  hotel: { filter, hotelList, loading },
  getHotels,
  setLoading,
  history,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // const [range1, setRange1] = useState(null);
  const range1 = moment.range(startDate, endDate);

  useEffect(() => {
    setLoading();
    getHotels(filter.location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStartDate(filter.startDate);
    setEndDate(filter.endDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // HOF
  const getIndividualItems = () => {
    return hotelList.map(item => (
      <Grid.Column width={16}>
        <HotelListItem
          key={item._id}
          styles={styles}
          data={item}
          history={history}
        />
      </Grid.Column>
    ));
  };

  if (!filter.location) {
    history.push('/');
    return <div> No Data </div>;
  }

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader width='5rem' height='5rem' />
      </div>
    );
  }

  return (
    <>
      <div>
        <Header color='#2E2E2E' history={history} />
        <div className={styles.listSummary} data-testid='listsummary'>
          <div className={styles.filterDetails}>
            100+ stays | {moment(startDate).format('Do MMMM')} to{' '}
            {moment(endDate).format('Do MMMM')} | {range1.diff('days')} days |{' '}
            {filter.guests} guests
          </div>
          <div className={styles.locationDetails}>
            Stay in{' '}
            {filter.location.replace(
              /(^\w{1}|\.\s*\w{1})/gi,
              function (toReplace) {
                return toReplace.toUpperCase();
              }
            )}
          </div>
        </div>
        <div className={styles.hotelListWrapper} data-testid='hotellist'>
          {hotelList.length ? (
            <Grid>{getIndividualItems()}</Grid>
          ) : (
            <NoHotels />
          )}
        </div>
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

export default connect(mapStateToProp, { getHotels, setLoading })(HotelList);
