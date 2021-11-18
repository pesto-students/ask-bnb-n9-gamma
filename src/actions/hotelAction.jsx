import axios from 'axios';
import {
  GET_HOTEL_LIST,
  GET_ROOM_LIST,
  SET_BLOCKED_ROOMS,
  SET_FILTER,
  SET_LOADING,
  SHOW_ALERT,
} from './types';

export const addFilters = filters => async dispatch => {
  try {
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
    setLoading();
    const res = await axios.get('http://localhost:9000/api/hotel/getHotels', {
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

export const blockRooms =
  (hotel_id, selected_rooms, startDate, endDate) => async dispatch => {
    try {
      setLoading();

      const body = { hotel_id, selected_rooms, startDate, endDate };

      console.log(body);
      if (startDate && endDate) {
        const res = await axios.post(
          'http://localhost:9000/api/hotel/blockRooms',
          body
        );
        console.log(res.data.data);
      }

      dispatch({
        type: SET_BLOCKED_ROOMS,
        payload: { hotel_id, selected_rooms, startDate, endDate },
      });
    } catch (error) {
      showErrorAlert();
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

// Set loadingto true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// Set loadingto true
export const showErrorAlert = () => {
  return {
    type: SHOW_ALERT,
  };
};
