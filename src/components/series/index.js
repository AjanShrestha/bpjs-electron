// npm packages
import React from 'react';
import {withRouter} from 'react-router-dom';

// our packages
import {
  SeriesPropType,
  SeriesDefaultPropType,
  HistoryPropType,
} from '../../utils';

const Series = withRouter(({series, history}) => {
  const openSeriesPage = () => {
    const location = {
      pathname: `/series${series._id}`,
      state: series,
    };
    history.push(location);
  };
  return (
    <div className="column">
      <div className="card" onClick={openSeriesPage} onKeyDown={() => {}}>
        <div className="card-image">
          <figure className="image">
            <img src={series.image} alt={series.title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{series.title}</p>
              <p className="subtitle is-6">Videos count: {series.count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
Series.propTypes = {
  series: SeriesPropType,
  history: HistoryPropType,
};
Series.defaultProps = {
  series: SeriesDefaultPropType,
};

export default Series;
