// npm packages
import React from 'react';
import {withRouter} from 'react-router-dom';

// our packages
import db from '../../db';
import {
  SeriesPropType,
  SeriesDefaultPropType,
  HistoryPropType,
} from '../../utils';

const Series = withRouter(({series, history}) => {
  const openSeriesPage = async () => {
    const location = {
      pathname: `/series${series._id}`,
      state: series,
    };

    let doc;
    try {
      doc = await db.current.get('series');
    } catch (error) {
      console.error(error);
    }
    const update = {
      _id: 'series',
      data: series,
    };
    if (doc) {
      update._rev = doc._rev;
    }
    await db.current.put(update);

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
