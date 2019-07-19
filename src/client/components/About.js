import React from 'react';
import $ from 'jquery';

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      giphys: [],
    };
  }

  componentDidMount() {
    let newGifs = [];
    const xhr = $.get(
      `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${
        process.env.REACT_APP_GIPHY_TOKEN
      }&limit=5`
    );
    xhr
      .done(function(data) {
        console.log('success got data', data);
        newGifs = data.data;
      })
      .then(() => {
        this.setState({ giphys: newGifs });
      });
  }

  // gifRandomizer = () => {
  //   const idx = Math.floor(Math.random() * this.state.giphys.length) + 1;
  //   return ` "https://giphy.com/embed/${this.state.giphys[idx].slug}"`;
  // };

  render() {
    return (
      <div>
        <div>THIS IS MY ABOUT COMPONENT!!!!! HAS THIS CHANGED?</div>
        <p>
          Hi fellow Bravo-obsessed people. My name is Danielle McCarthy and I
          developed this website after experiencing a lack of motivation to
          build a personal portfolio website. I love reality tv and decided to
          build something I'm interested in. I hope you enjoy the site and would
          like to thank everyone who has contributed the mass amounts of data
          that is required to maintain a site like this. Feel free to email me
          or tweet me with any suggestions / ideas for the site. Cheers.{' '}
        </p>
        <div>
          {/* <iframe
            src={this.gifRandomizer()}
            width="480"
            height="265"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          /> */}
          <p>
            <a href="https://giphy.com/gifs/season-9-episode-14-real-housewives-3ohryorU9mIF0scqNq">
              via GIPHY
            </a>
          </p>
        </div>
      </div>
    );
  }
}
