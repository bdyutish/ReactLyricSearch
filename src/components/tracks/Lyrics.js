import React, { useState, useContext, useEffect, Fragment } from 'react';
import AppContext from '../../context/appContext';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
const Lyrics = (props) => {
  const appContext = useContext(AppContext);
  const { loading, setLoaded, setLoading } = appContext;

  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  const getLyrics = async () => {
    setLoading();
    const res = await axios.get(
      `http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}
      &apikey=${process.env.REACT_APP_API_KEY}`
    );
    console.log(res.data);
    setLyrics(res.data.message.body.lyrics);
  };

  const getTrack = async () => {
    const res = await axios.get(
      `http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}
        &apikey=${process.env.REACT_APP_API_KEY}`
    );
    console.log(res.data);
    setTrack(res.data.message.body.track);
    setLoaded();
  };

  useEffect(() => {
    getLyrics();
    getTrack();
    //  eslint-disable-next-line
  }, [props.match.params.id]);

  //   console.log(track);

  if (loading) return <Spinner />;
  else
    return (
      <Fragment>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card">
          <h5 className="card-header">
            {track.track_name} by{' '}
            <span className="text-secondary">{track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics_body}</p>
          </div>
        </div>
        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {track.album_id}
          </li>

          <li className="list-group-item">
            <strong>Explicit</strong>: {track.explicit === 0 ? 'No' : 'Yes'}
          </li>
          <li className="list-group-item">
            <strong>Updated</strong>:{' '}
            <Moment format="DD/MM/YYYY">{track.updated_time}</Moment>
          </li>
        </ul>
      </Fragment>
    );
};

export default Lyrics;
