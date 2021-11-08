import { Button } from 'semantic-ui-react';
import { FaStar } from 'react-icons/fa';
import styles from './HotelList.module.css';

const HotelListItem = ({ data }) => {
  console.log(data);
  return (
    <>
      <hr />
      <div className={styles.hotelListItem}>
        <img src={data.image} alt='' />
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionHeader}>{data.hotelDetail}</div>
          <div className={styles.descriptionSubHeader}>{data.note}</div>
          <div className={styles.amnities}>All - Amnities - Goes - Here</div>
          <div className={styles.amnities}>All - Amnities - Goes - Here</div>
          <Button className={styles.viewButton} color='teal'>
            View Rooms
          </Button>
          <div className={styles.reviewContainer}>
            <FaStar color='yellow' /> 4.5 (<span>11 reviews</span>)
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

export default HotelListItem;
