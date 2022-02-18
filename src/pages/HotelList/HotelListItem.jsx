import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Button, Grid, Image } from 'semantic-ui-react';
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
			<Grid stackable>
				<Grid.Row>
					<Grid.Column width={6} textAlign='center'>
						<Image
							style={{ width: '100%' }}
							src={data.indexImage}
							size='medium'
							verticalAlign='middle'
						/>
					</Grid.Column>
					<Grid.Column width={10}>
						<div>
							<div className={styles.descriptionHeader}>
								{data.hotel_name}
							</div>
							<div className={styles.descriptionSubHeader}>
								{data.description}
							</div>
							<div className={styles.amnities}>
								{getRoomType()}
							</div>
							<div className={styles.amnities}>
								{getAmenities()}
							</div>
							<div>
								<Button
									className={styles.viewButton}
									onClick={() => showRoomDetails()}
									color='teal'
								>
									View Rooms
								</Button>
								<div className={styles.priceContainer}>
									<div className={styles.perDayPrice}>
										Rs. {basePrice} <span>/ night</span>
									</div>
									<div className={styles.totalPrice}>
										Rs. {basePrice} total
									</div>
								</div>
							</div>
							<div className={styles.reviewContainer}>
								<FaStar color='yellow' />{' '}
								{parseInt(data?.ratings)?.toFixed(1)} (
								<span>{data.reviews}</span>)
							</div>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	);
};

HotelListItem.propType = {
	setCurrentRoom: PropTypes.func.isRequired,
};

export default connect(null, { setCurrentRoom })(HotelListItem);
