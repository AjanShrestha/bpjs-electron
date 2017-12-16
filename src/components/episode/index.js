// npm packages
import React from 'react';
import {withRouter} from 'react-router-dom';

// our packages
import {
  EpisodePropType,
  EpisodeDefaultProp,
  HistoryPropType,
} from '../../utils';

const Episode = withRouter(({episode, history}) => {
  const openEpisodePage = () => {
    const location = {
      pathname: `/episode${episode.id}`,
      state: episode,
    };
    history.push(location);
  };
  return (
    <div className="column">
      <div className="card" onClick={openEpisodePage} onKeyDown={() => {}}>
        <div className="card-image">
          <figure className="image">
            <img src={episode.image} alt={episode.title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{episode.title}</p>
              <p className="subtitle is-6">{episode.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
Episode.propTypes = {
  episode: EpisodePropType,
  history: HistoryPropType,
};
Episode.defaultProps = {
  episode: EpisodeDefaultProp,
};

export default Episode;
