import {
  shape,
  string,
  number,
  bool,
  object,
  oneOfType,
  array,
  func,
  oneOf,
  arrayOf,
} from 'prop-types';

export const SeriesPropType = shape({
  _id: string.isRequired,
  title: string.isRequired,
  image: string.isRequired,
  url: string.isRequired,
  count: number.isRequired,
  source: string.isRequired,
});

export const SeriesDefaultPropType = {};

export const EpisodePropType = shape({
  _id: string,
  title: string.isRequired,
  image: string.isRequired,
  url: string.isRequired,
  description: string.isRequired,
});

export const EpisodeDefaultProp = {};

export const LocationPropType = shape({
  hash: string.isRequired,
  key: string, // only in createBrowserHistory and createMemoryHistory
  pathname: string.isRequired,
  search: string.isRequired,
  state: oneOfType([array, bool, number, object, string]), // only in createBrowserHistory and createMemoryHistory
});

export const HistoryPropType = shape({
  action: oneOf(['PUSH', 'REPLACE', 'POP']).isRequired,
  block: func.isRequired,
  canGo: func, // only in createMemoryHistory
  createHref: func.isRequired,
  entries: arrayOf(LocationPropType), // only in createMemoryHistory
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired,
  index: number, // only in createMemoryHistory
  length: number.isRequired,
  listen: func.isRequired,
  location: LocationPropType.isRequired,
  push: func.isRequired,
  replace: func.isRequired,
});

export const MatchPropType = shape({
  isExact: bool,
  params: object.isRequired,
  path: string.isRequired,
  url: string.isRequired,
});
