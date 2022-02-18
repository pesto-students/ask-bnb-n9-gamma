import moment from 'moment';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { connect } from 'react-redux';
import styles from './Review.module.css';

export const Review = ({ review, currentHotel: { reviews, ratings } }) => {
	console.log(review);
	return (
		<div className={styles.reviewWrapper}>
			<div className={styles.heading}>
				Reviews{' '}
				<span className={styles.minDetail}>{`- ${ratings?.toFixed(
					1
				)} (${reviews} reviews)`}</span>
			</div>
			<div className={styles.minDetail}>Recent 5 reviews</div>
			<div className={styles.reviewContainer}>
				{review.length &&
					review.map(rev => (
						<div key={rev._id} className={styles.reviewItem}>
							<div style={{ position: 'relative' }}>
								<div className={styles.userName}>
									<span style={{ minWidth: '10rem' }}>
										{rev.name}
									</span>
									<span className={styles.ratingStyle}>
										<FaStar
											color='gold'
											style={{ marginRight: '5px' }}
										/>{' '}
										{rev.rating}
									</span>
								</div>
								<span className={styles.dateContainer}>
									{moment(rev.timeStamp).format(
										'h:mm a - DD MMM yy'
									)}
								</span>
								<div className={styles.userComment}>
									{rev.comment}
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

Review.propTypes = {
	review: PropTypes.object.isRequired,
};

// const mapDispatchToProps = {};

export default connect(null, {})(Review);
