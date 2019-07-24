import React from 'react';
import $ from 'jquery';

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      giphys: [],
      selectedGif: {},
    };
    this.gifRandomizer = this.gifRandomizer.bind(this);
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
        newGifs = data.data;
      })
      .then(() => {
        this.setState({ giphys: newGifs });
      });
  }

  gifRandomizer = () => {
    const idx = Math.floor(Math.random() * this.state.giphys.length) + 1;
    this.setState({ selectedGif: this.state.giphys[idx] });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'solid red 1px',
          height: '100vh',
        }}
      >
        {/* GIPHY SHIAT */}

        <div>
          {Object.keys(this.state.selectedGif).length && (
            <div>
              <div
                style={{
                  width: '100%',
                  height: 0,
                  paddingBottom: '59%',
                  position: 'relative',
                }}
              >
                <iframe
                  title="gif"
                  src={this.state.selectedGif.embed_url}
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute' }}
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>

        {/* ABOUT ME TEXT  */}
        <div>
          <h1>Hi, I'm Danielle.</h1>
          <p>
            Hi fellow Bravo-obsessed people. My name is Danielle McCarthy and
            this is my passion project. After attending a coding bootcamp from
            October 2018-February 2019 I decided I wanted to begin a side
            project to keep my skills fresh.
          </p>

          <p>
            I love all reality tv and especially RHONY. I'm always looking for
            more data, if there is a missing restaurant or cast relationship
            from the site, get in touch! If you're a developer, designer,
            graphic artist, or would like to contribute to the site in any way
            get in touch! If you have any suggested / ideas for the site, get in
            touch! Cheers.
          </p>
          <ul>
            <li>
              <a href="/contact">Contact Form</a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/mccarthydanielle/rhony"
              >
                Github
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/whatdanielle"
              >
                Twitter
              </a>
            </li>
            <li>
              <a href="mailto:daniellemccarthy54@gmail.com?Subject=RHONY%Site%Inquiry">
                Email
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/whatdanielle/"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
