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
      <div className="mapStyle">
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapboxApiAccessToken={mapboxToken}
          onViewportChange={_updateViewport}
        >
          <div className="navigationIcons">
            <NavigationControl
              className="navStyle"
              onViewportChange={_updateViewport}
            />

            <GeolocateControl
              className="geolocateStyle"
              onViewportChange={_updateViewport}
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
            />
          </div>

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
