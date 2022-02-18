import moment from 'moment';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaPencilAlt, FaStar } from 'react-icons/fa';
import { connect } from 'react-redux';
import styles from './Review.module.css';

export const Review = ({
	addReviews,
	review,
	currentHotel: { hotel_id, reviews, ratings },
}) => {
	const [myReview, setMyReview] = useState('');
	const [rating, setRating] = useState(0);

	const addNewReviews = () => {
		let name = localStorage.getItem('username') || 'Anonymous';
		addReviews({ name, rating, myReview, hotel_id });
	};

	const noReview = () => (
		<div className={styles.reviewWrapper}>No Reviews Available yet</div>
	);

	return (
		<div className={styles.reviewWrapper}>
			<div className={styles.heading}>
				Reviews{' '}
				<span className={styles.minDetail}>{`- 
				${parseInt(ratings)?.toPrecision(1)} 
				(${reviews} reviews)`}</span>
			</div>
			{reviews > 5 && (
				<div className={styles.minDetail}>Recent 5 reviews</div>
			)}
			<div className={styles.reviewContainer}>
				{!review.length
					? noReview()
					: review.map(rev => (
							<div key={rev._id} className={styles.reviewItem}>
								<div style={{ position: 'relative' }}>
									<div className={styles.userName}>
										<span style={{ minWidth: '10rem' }}>
											{rev.name}
										</span>
										<span className={styles.ratingStyle}>
											<FaStar
												color='yellow'
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

			<div className={styles.addCommentContainer}>
				<textarea
					placeholder='Add your review here...'
					name='review'
					className={styles.inputText}
					value={myReview}
					onChange={e => setMyReview(e.target.value)}
				></textarea>
				<div>
					{[...Array(5)].map((star, i) => (
						<FaStar
							values={i + 1}
							color={i + 1 <= rating ? 'yellow' : 'grey'}
							size={30}
							onClick={() => {
								console.log(i + 1);
								setRating(i + 1);
							}}
							// on
						/>
					))}
				</div>

				<button
					className={styles.addButton}
					onClick={() => addNewReviews()}
					disabled={!rating}
				>
					<FaPencilAlt /> Add Review
				</button>
			</div>
		</div>
	);
};

Review.propTypes = {
	review: PropTypes.object.isRequired,
	addReviews: PropTypes.func.isRequired,
};

// const mapDispatchToProps = {};

export default connect(null, {})(Review);
