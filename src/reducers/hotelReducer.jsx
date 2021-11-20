import {
  GET_HOTEL_LIST,
  GET_ROOM_LIST,
  SET_BLOCKED_ROOMS,
  SET_FILTER,
} from '../actions/types';

const initialState = {
  filter: {},
  hotelList: [],
  current: {},
  loading: false,
  blockedRooms: {},
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return { ...state, filter: { ...payload } };
    case GET_HOTEL_LIST:
      return { ...state, hotelList: payload };
    case GET_ROOM_LIST:
      return {
        ...state,
        current: state.hotelList.filter(hotel => hotel._id === payload)[0],
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
