import axios from 'axios';
import { GET_HOTEL_LIST, SET_LOADING, SHOW_ALERT } from './types';

export const getHotels = () => async dispatch => {
  try {
    setLoading();
    // const res = await axios.get()
    const data = {}; //res.data

    dispatch({
      type: GET_HOTEL_LIST,
      payload: data,
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
