import React, { useContext, useEffect, Fragment } from 'react';
import AppContext from '../../context/appContext';
import Spinner from '../layout/Spinner';
import Track from './Track';
const Tracks = () => {
  const appContext = useContext(AppContext);
  const { getTop10, loading, heading, track_list } = appContext;
  useEffect(() => {
    getTop10();
    // eslint-disable-next-line
  }, []);
  if (loading) return <Spinner />;
  else
    return (
      <Fragment>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {track_list.map((item) => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </Fragment>
    );
};

export default Tracks;
