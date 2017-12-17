// npm packages
import React, {Component} from 'react';

// our packages
import {Crunchyroll} from '../api';
import {LocationPropType} from '../utils';

export default class Episode extends Component {
  constructor(props) {
    super(props);
    console.log('Episode');

    // this.state = {
    //   episode: null,
    // };

    // trigger episode loading
    const {location} = props;
    Crunchyroll.getEpisode(location.state);
  }

  render() {
    return <div>episode video here</div>;
  }
}
Episode.propTypes = {
  // eslint-disable-next-line react/no-typos
  location: LocationPropType.isRequired,
};
