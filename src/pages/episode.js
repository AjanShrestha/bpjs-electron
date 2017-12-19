// npm packages
import React, {Component} from 'react';

// our packages
import {Crunchyroll} from '../api';

export default class Episode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episode: null,
      file: null,
    };

    // trigger episode loading
    this.init(props);
  }

  componentDidUpdate() {
    const {episode, file} = this.state;

    if (!episode || !file) {
      return;
    }

    videojs('video', {
      plugins: {
        ass: {
          src: file.subtitles,
        },
      },
    });
  }

  async init(props) {
    const {location} = props;
    const file = await Crunchyroll.getEpisode(location.state);
    this.setState({
      episode: location.state,
      file,
    });
  }

  render() {
    const {episode, file} = this.state;

    if (!episode || !file) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        episode video here
        <video id="video" className="video-js" controls autoPlay preload="auto">
          <source src={file.url} type={file.type} />
        </video>
      </div>
    );
  }
}
