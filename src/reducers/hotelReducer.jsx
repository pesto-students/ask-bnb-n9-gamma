import {
	GET_HOTEL_LIST,
	GET_REVIEW,
	GET_ROOM_LIST,
	SET_BLOCKED_ROOMS,
	SET_FILTER,
	SET_LOADING,
	SHOW_AUTH_MODAL,
} from '../actions/types';

const initialState = {
	filter: {},
	hotelList: [],
	current: {},
	review: {},
	loading: false,
	blockedRooms: {},
	showModal: false,
	error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_FILTER:
			return { ...state, filter: { ...payload } };
		case GET_REVIEW:
			return { ...state, review: [...payload] };
		case SET_LOADING:
			return { ...state, loading: true };
		case GET_HOTEL_LIST:
			return { ...state, hotelList: payload, loading: false };
		case SHOW_AUTH_MODAL:
			return { ...state, showModal: true };
		case GET_ROOM_LIST:
			console.log('payload', payload);
			return {
				...state,
				current: state.hotelList.filter(
					hotel => hotel._id === payload
				)[0],
			};
		case SET_BLOCKED_ROOMS:
			return {
				...state,
				blockedRooms: payload,
			};

		default:
			return state;
	}
};
