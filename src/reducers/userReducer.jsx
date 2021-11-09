import { GET_USER } from '../actions/types';

const initialState = {
  getUser: [],
  isAuthenticated: false,
  setToken: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
