import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { setCurrentRoom } from '../../actions/hotelAction';
import styles from './HotelList.module.css';

const HotelListItem = prop => {
  const { data, history, setCurrentRoom } = prop;

  const basePrice = data?.room_collection?.standard[0].base_price || 0;

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
              Rs. {basePrice} <span>/ night</span>
            </div>
            <div className={styles.totalPrice}>Rs. {basePrice} total</div>
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
