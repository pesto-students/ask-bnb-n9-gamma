import axios from 'axios';
import {
	GET_HOTEL_LIST,
	GET_REVIEW,
	GET_ROOM_LIST,
	SET_BLOCKED_ROOMS,
	SET_FILTER,
	SET_LOADING,
	SHOW_ALERT,
	SHOW_AUTH_MODAL,
} from './types';

const API_ENDPOINT = process.env.REACT_APP_API_URL;

// Set loadingto true
export const setLoading = () => async dispatch => {
	dispatch({
		type: SET_LOADING,
	});
};

export const addFilters = filters => async dispatch => {
	try {
		setLoading();
		dispatch({
			type: SET_FILTER,
			payload: filters,
		});
	} catch (error) {
		showErrorAlert();
	}
};

export const getHotels = location => async dispatch => {
	try {
		console.log(API_ENDPOINT);
		const res = await axios.get(`${API_ENDPOINT}api/hotel/getHotels`, {
			params: { location, select: '' },
		});
		const data = res.data;
		dispatch({
			type: GET_HOTEL_LIST,
			payload: data.data,
		});
	} catch (error) {
		showErrorAlert();
	}
};

export const addReviews =
	(hotel_id, rating, comment, name) => async dispatch => {
		try {
			const body = { hotel_id, rating, comment, name };
			const res = await axios.post(
				`${API_ENDPOINT}api/hotel/addReviews`,
				body
			);
			const data = res.data;
			console.log(data);
			dispatch({
				type: GET_REVIEW,
				payload: data.data,
			});
		} catch (error) {
			showErrorAlert();
		}
	};

export const getReviews = hotel_id => async dispatch => {
	try {
		const res = await axios.get(`${API_ENDPOINT}api/hotel/getReviews`, {
			params: { hotel_id },
		});
		const data = res.data;
		console.log(data);
		dispatch({
			type: GET_REVIEW,
			payload: data.data,
		});
	} catch (error) {
		showErrorAlert();
	}
};

export const blockRooms =
	(hotel_id, selected_rooms, startDate, endDate) => async dispatch => {
		try {
			setLoading();

			dispatch({
				type: SET_BLOCKED_ROOMS,
				payload: { hotel_id, selected_rooms, startDate, endDate },
			});
		} catch (error) {
			showErrorAlert();
		}
	};

export const confirmRooms =
	(hotel_id, selected_rooms, startDate, endDate) => async dispatch => {
		try {
			setLoading();

			const body = { hotel_id, selected_rooms, startDate, endDate };

			if (startDate && endDate) {
				const res = await axios.post(
					`${API_ENDPOINT}api/hotel/blockRooms`,
					body
				);
				console.log(res.data.data);
			}
		} catch (error) {
			// showErrorAlert();
		}
	};

export const setCurrentRoom = id => async dispatch => {
	try {
		dispatch({
			type: GET_ROOM_LIST,
			payload: id,
		});
	} catch (error) {
		showErrorAlert();
	}
};

export const showAuthModal = () => async dispatch => {
	dispatch({
		type: SHOW_AUTH_MODAL,
	});
};

// Set loadingto true
export const showErrorAlert = () => {
	return {
		type: SHOW_ALERT,
	};
};
