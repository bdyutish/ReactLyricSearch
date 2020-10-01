import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faCompactDisc,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Track = (props) => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <FontAwesomeIcon icon={faPlay} />
              Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <FontAwesomeIcon icon={faCompactDisc} /> Album
            </strong>
            : {track.album_name}
          </p>
          <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark">
            <FontAwesomeIcon icon={faChevronRight} /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

Track.propTypes = {
  track: PropTypes.object.isRequired,
};
export default Track;
