import React from 'react';
import ReactMapGL, { NavigationControl, GeolocateControl } from 'react-map-gl';

//style sheets
import 'mapbox-gl/dist/mapbox-gl.css';

//components
import Pin from './Pin';
import PopupBox from './Popup';

//keys
const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 40.7736,
        longitude: -73.9566,
        zoom: 13,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: '100vh',
      },
      popupInfo: null,
    };
    this.handlePopUp = this.handlePopUp.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
  }

  handlePopUp(popupInfo) {
    this.setState({ popupInfo });
  }

  closePopUp() {
    this.setState({ popupInfo: null });
  }

  render() {
    const { viewport, _updateViewport } = this.props;
    return (
      <div style={{ flex: 4 }}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={mapboxToken}
          onViewportChange={_updateViewport}
        >
          <div className="nav navStyle">
            <NavigationControl onViewportChange={_updateViewport} />
          </div>

          <GeolocateControl
            className="geolocateStyle"
            onViewportChange={_updateViewport}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />

          {this.state.popupInfo ? (
            <PopupBox
              closePopUp={this.closePopUp}
              location={this.state.popupInfo}
            />
          ) : null}

          {this.props.locations.map(curr => (
            <Pin
              key={curr.locationName}
              handlePopUp={this.handlePopUp}
              location={curr}
            />
          ))}
        </ReactMapGL>
      </div>
    );
  }
}
