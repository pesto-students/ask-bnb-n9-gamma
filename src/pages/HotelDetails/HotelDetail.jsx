import Moment from 'moment';
import { extendMoment } from 'moment-range';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Button, Grid } from 'semantic-ui-react';

import { blockRooms } from '../../actions/hotelAction';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import styles from './HotelDetail.module.css';

const moment = extendMoment(Moment);

const HotelDetail = ({
  currentHotel,
  filter: { startDate, endDate, guests },
  blockRooms,
  history,
}) => {
  const {
    hotel_id,
    room_collection: { standard },
  } = currentHotel;
  console.log(currentHotel);

  const [roomCount, setRoomCount] = useState(1);
  const [minRoom] = useState(Math.ceil(guests / 2));
  const [maxRoomAvailable, setMaxRoomAvailable] = useState(0);
  const [roomsSelected, setRoomsSelected] = useState([]);

  useEffect(() => {
    setRoomCount(minRoom);
    getMinRoomAvailed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minRoom]);

  const bookNewRooms = () => {
    history.push('/booking');
    blockRooms(hotel_id, roomsSelected.slice(0, roomCount), startDate, endDate);
  };

  const getMinRoomAvailed = () => {
    let roomArray = getRoomBasedOnDate();
    setRoomsSelected(roomArray);
    console.log(roomsSelected);
    let totalRoomBasedOnDate = roomArray.length;
    let totalRoomBasedOnGuest = guests;
    let maxRoom =
      totalRoomBasedOnDate < totalRoomBasedOnGuest
        ? totalRoomBasedOnDate
        : totalRoomBasedOnGuest;
    console.log('maxRoom', maxRoom);
    setMaxRoomAvailable(maxRoom);
  };

  const getRoomBasedOnDate = () => {
    const bookingRange = moment.range(startDate, endDate);

    let rooms_selected = [];
    standard.forEach(room => {
      if (
        !room.bookingDurations.some(durationArray =>
          bookingRange.overlaps(
            moment.range(durationArray[0], durationArray[1])
          )
        )
      ) {
        rooms_selected.push({
          type: 'standard',
          room_id: room.room_id,
          price: room.base_price,
        });
      }
    });
    return rooms_selected;
  };

  const getRoomType = () => {
    return currentHotel?.room_collection?.standard[0].room_type
      .join(' - ')
      .toString();
  };

  // HOF
  const getRoomDetails = room_data => (
    <div>
      {roomsSelected.slice(0, roomCount).map((room, index) => {
        return (
          <div key={index} className={styles.roomSelection}>
            <div className={styles.guestDetailRow}>
              <span className={styles.roomNum}>Room {index + 1}</span>
              <div className={styles.addGuestRow}>
                <span className={styles.guestCount}>
                  Maximum {room_data.room_type[0]}
                </span>
              </div>
              {!(
                !index ||
                index + 1 !== roomCount ||
                index + 1 === minRoom
              ) && (
                <span
                  className={styles.removeLink}
                  onClick={() => setRoomCount(roomCount - 1)}>
                  <FaRegTrashAlt size='100%' />
                </span>
              )}
            </div>
          </div>
        );
      })}
      {maxRoomAvailable > roomCount && (
        <div
          className={styles.addRoom}
          onClick={() => setRoomCount(roomCount + 1)}>
          <FaPlus size='10' style={{ padding: '0 2px 0 0' }} />{' '}
          <span>Add Rooms</span>
        </div>
      )}
    </div>
  );

  const getImageGrid = () => (
    <>
      {currentHotel.images.slice(0, 4).map((item, index) => {
        if (item) return <img key={index} src={item} alt='' />;
        else return null;
      })}
    </>
  );

  const getAmenityList = array => (
    <ul>
      {array.room_type.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const getRoomDetail = (data, room_type) => {
    const room_data = data.room_collection[`${room_type}`][0];
    let nights = moment.range(startDate, endDate).diff('days');
    return (
      <div
        className={`${styles.roomCustomizationContainer}
          ${styles[`${room_type}`]}`}>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <div className={styles.leftContainer}>
                <img src={data.images[0]} alt='' className={styles.roomImage} />
                <div className={styles.amenitiesColumn}>
                  {getAmenityList(room_data)}
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <div className={styles.rightContainer}>
                {getRoomDetails(room_data)}
                <div className={styles.verticalLine}></div>
                <div className={styles.priceWrapper}>
                  <div className={styles.priceContainer}>
                    <div className={styles.totalPrice}>
                      Rs. {room_data.base_price}
                    </div>
                    <div className={styles.priceDescription}>
                      for maximum {room_data.room_type[0]}
                      s, 1 night
                    </div>
                  </div>
                  <div className={styles.flexBox}>
                    {/* <Link to='/'> */}
                    <Button
                      color='yellow'
                      className={styles.bookButton}
                      onClick={() => bookNewRooms()}>
                      Book (Rs. {room_data.base_price * nights * roomCount})
                    </Button>
                    {/* </Link> */}
                    <div className={styles.priceDescription}>
                      for {roomCount} room(s), {nights} night
                    </div>
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  };
  return (
    <>
      <div>
        <Header color='#2E2E2E' history={history} />
      </div>
      <div className={styles.detailWrapper}>
        <div className={styles.hotelName}>
          <h1>{currentHotel.hotel_name}</h1>, <h4>{currentHotel.city}</h4>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.mainImageContainer}>
            <img src={currentHotel.indexImage} alt='' />
          </div>
          <div className={styles.additionalImageContainer}>
            {getImageGrid()}
          </div>
        </div>
        <div className={styles.decriptionContainer}>
          <div className={styles.heading}>{currentHotel.description}</div>
          <div className={styles.minDetail}>{getRoomType()}</div>
        </div>
        {getRoomDetail(currentHotel, 'standard')}
        {/* {currentHotel?.room_collection?.delux &&
          getRoomDetail(currentHotel, 'delux')} */}
        <div className='amenityContainer'>
          <div className='amenityHeader'></div>
          <div className='availedAmenities'></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

HotelDetail.propTypes = {
  currentHotel: PropTypes.object.isRequired,
  blockRooms: PropTypes.func.isRequired,
};

const mapStateToProp = state => ({
  currentHotel: state.hotel.current,
  filter: state.hotel.filter,
});

export default connect(mapStateToProp, { blockRooms })(HotelDetail);
