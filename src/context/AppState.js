import React, { useReducer } from 'react';
import AppContext from './appContext';
import AppReducer from './AppReducer';
import { GET_TOP10, SEARCH_TRACK, SET_LOADED, SET_LOADING } from './types';
import axios from 'axios';
const AppState = (props) => {
  const initialState = {
    track_list: [],
    heading: 'Top 10 Tracks',
    loading: false,
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTop10 = async () => {
    setLoading();
    const res = await axios.get(
      `http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`
    );

    dispatch({ type: GET_TOP10, payload: res.data.message.body.track_list });
  };

  const searchTrack = async (text) => {
    setLoading();
    const res = await axios.get(
      `http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${text}&page_size=10&f_lyrics_language=en&f_has_lyrics=true&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`
    );
    dispatch({ type: SEARCH_TRACK, payload: res.data.message.body.track_list });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setLoaded = () => dispatch({ type: SET_LOADED });
  return (
    <AppContext.Provider
      value={{
        track_list: state.track_list,
        heading: state.heading,
        getTop10,
        setLoading,
        setLoaded,
        searchTrack,
        loading: state.loading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
