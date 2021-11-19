import styles from './HotelList.module.css';

const NoHotels = props => {
  return (
    <div className={styles.noHotelAvailable}>
      No hotels available in the selected location.
      <br />
      Change location and try again
    </div>
  );
};

export default NoHotels;
