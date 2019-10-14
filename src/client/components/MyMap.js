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
    this.state = {};
    this.handlePopUp = this.handlePopUp.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
    this._renderPopUp = this._renderPopUp.bind(this);
  }

  handlePopUp(popupInfo) {
    this.setState({ popupInfo });
  }

  closePopUp() {
    this.setState({ popupInfo: null });
  }

  _renderPopUp() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <PopupBox
          closePopUp={this.closePopUp}
          location={this.state.popupInfo}
        />
      )
    );
  }

  render() {
    const { viewport, _updateViewport } = this.props;
    return (
      <div>
        <ReactMapGL
          {...viewport}
          width="100vw"
          height="100vh"
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

          {this._renderPopUp()}

          {this.props.locations.map(curr => (
            <Pin
              id={curr.locationName}
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
