// npm packages
import React, {Component} from 'react';
import videojs from 'video.js';

// our packages
import {Crunchyroll} from '../api';

export default class Episode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episode: null,
      filename: null,
    };

    // trigger episode loading
    this.init(props);
  }

  componentDidUpdate() {
    const {episode, filename} = this.state;

    if (!episode || !filename) {
      return;
    }

    videojs('video');
  }

  async init(props) {
    const {location} = props;
    const filename = await Crunchyroll.getEpisode(location.state);
    this.setState({
      episode: location.state,
      filename,
    });
  }

  render() {
    const {episode, filename} = this.state;

    if (!episode || !filename) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        episode video here
        <video id="video" className="video-js" controls autoPlay preload="auto">
          <source src={filename} type="video/mp4" />
        </video>
      </div>
    );
  }
}
