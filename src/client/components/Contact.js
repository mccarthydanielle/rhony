import React from 'react';
import * as typeformEmbed from '@typeform/embed';

const backgroundImage = require('../../assets/nyc_contact_form.jpg');

export default class FormSelection extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
  }

  componentDidMount() {
    const { history } = this.props;
    if (this.el) {
      typeformEmbed.makeWidget(
        this.el,
        'https://daniellemccarthy342205.typeform.com/to/CGX5fK',
        {
          hideFooter: true,
          hideHeaders: true,
          onSubmit: () => history.push('/map'),
        }
      );
    }
  }
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '200px',
          }}
        >
          <div style={{ flex: 2, color: 'white' }}>
            <h2 style={{ textAlign: 'bottom', color: 'white' }}>
              Get in Touch.
            </h2>
          </div>

          <div style={{ flex: 6 }}>
            <p style={{ textAlign: 'center', color: 'white' }}>
              This project wouldn't be possible without the help of dedicated
              Bravo fans.
            </p>
            <p style={{ textAlign: 'center', color: 'white' }}>
              Get in touch, add a new restaurant location, add a new cast
              relationship, or help develop the site!
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: '20px',
            flex: 8,
            border: 'red solid 1px',
            height: '50vh',
          }}
          ref={el => (this.el = el)}
        />
      </div>
    );
  }
}
