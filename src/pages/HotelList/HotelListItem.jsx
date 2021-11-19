import { Button } from 'semantic-ui-react';
import { FaStar } from 'react-icons/fa';
import styles from './HotelList.module.css';
import { connect } from 'react-redux';
import { setCurrentRoom } from '../../actions/hotelAction';
import PropTypes from 'prop-types';

const HotelListItem = prop => {
  const { data, history, setCurrentRoom } = prop;

  const getRoomType = () => {
    return data?.room_collection?.delux[0].room_type.join(' - ').toString();
  };

  const getAmenities = () => {
    return data.amenities?.splice(0, 4).join(' - ');
  };

  const showRoomDetails = () => {
    setCurrentRoom(data._id);
    history.push(`/hotel/${data._id}`);
  };

  return (
    <>
      <hr />
      <div className={styles.hotelListItem}>
        <img src={data.indexImage} alt='' />
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionHeader}>{data.hotel_name}</div>
          <div className={styles.descriptionSubHeader}>{data.description}</div>
          <div className={styles.amnities}>{getRoomType()}</div>
          <div className={styles.amnities}>{getAmenities()}</div>
          <Button
            onClick={() => showRoomDetails()}
            className={styles.viewButton}
            color='teal'>
            View Rooms
          </Button>
          <div className={styles.reviewContainer}>
            <FaStar color='yellow' /> {data.ratings} (
            <span>{data.reviews}</span>)
          </div>
          <div className={styles.priceContainer}>
            <div className={styles.perDayPrice}>
              Rs. 1000 <span>/ night</span>
            </div>
            <div className={styles.totalPrice}>Rs. 4000 total</div>
          </div>
        </div>
      </div>
    </>
  );
};

HotelListItem.propType = {
  setCurrentRoom: PropTypes.func.isRequired,
};

export default connect(null, { setCurrentRoom })(HotelListItem);
