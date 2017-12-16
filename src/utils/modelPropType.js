import {shape, string, number} from 'prop-types';

export const SeriesPropType = shape({
  title: string,
  image: string,
  url: string,
  count: number,
});

export const SeriesDefaultPropType = {};
