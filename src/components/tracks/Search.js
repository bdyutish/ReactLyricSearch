import React, { useState, useContext } from 'react';
import AppContext from '../../context/appContext';
const Search = () => {
  const appContext = useContext(AppContext);
  const { searchTrack } = appContext;
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    searchTrack(text);
  };
  return (
    <div>
      <div className="card card-body mb-4 p-4">
        <h1 className="display-4 text-center">Search For A Song</h1>
        <p className="lead text-center">Get the lyrics for any song</p>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Song title..."
              name="text"
              value={text}
              onChange={onChange}
            />
          </div>
          <button
            className="btn btn-primary btn-lg btn-block mb-5"
            type="submit"
          >
            Get Track Lyrics
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
