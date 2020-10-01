import { GET_TOP10, SEARCH_TRACK, SET_LOADED, SET_LOADING } from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_TOP10:
      return {
        ...state,
        track_list: action.payload,
        heading: 'Top 10 Tracks',
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_LOADED:
      return {
        ...state,
        loading: false,
      };
    case SEARCH_TRACK:
      return {
        ...state,
        track_list: action.payload,
        heading: 'Top 10 Results',
        loading: false,
      };
    default:
      return state;
  }
};
