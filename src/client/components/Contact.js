import React from 'react';
import * as typeformEmbed from '@typeform/embed';
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
      <div className="contactPageGeneral">
        <div className="contactPageHeader">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 2,
              color: 'white',
            }}
          >
            <h2 style={{ color: 'white' }}>Get in Touch.</h2>
          </div>
        </div>

        <div
          style={{
            flex: 8,
            height: '80vh',
          }}
          ref={el => (this.el = el)}
        />
      </div>
    );
  }
}
