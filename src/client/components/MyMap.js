import React from 'react';
import ReactMapGL, { NavigationControl, GeolocateControl } from 'react-map-gl';

//style sheets
import 'mapbox-gl/dist/mapbox-gl.css';

import locationData from '../../server/dummyData';

//components
import Pin from './Pin';
import FilterNav from './FilterNav';
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
      locations: locationData,
    };
    this.handlePopUp = this.handlePopUp.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
    this._updateViewport = this._updateViewport.bind(this);
    this.handleRelocate = this.handleRelocate.bind(this);
  }

  handlePopUp(popupInfo) {
    this.setState({ popupInfo });
  }

  closePopUp() {
    this.setState({ popupInfo: null });
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  handleRelocate(latitude, longitude) {
    this.setState(prevState => ({
      viewport: {
        ...prevState.viewport,
        latitude,
        longitude,
        zoom: 15,
      },
    }));
  }

  render() {
    const { viewport } = this.state;
    return (
      <div style={{ display: 'flex' }}>
        <FilterNav
          handleRelocate={this.handleRelocate}
          locations={this.state.locations}
          style={{ flex: 1 }}
          locations={this.state.locations}
        />
        <div style={{ flex: 4 }}>
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={mapboxToken}
            onViewportChange={viewport => this.setState({ viewport })}
          >
            <div className="nav navStyle">
              <NavigationControl onViewportChange={this._updateViewport} />
            </div>

            <GeolocateControl
              className="geolocateStyle"
              onViewportChange={this._updateViewport}
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
            />

            {this.state.popupInfo ? (
              <PopupBox
                closePopUp={this.closePopUp}
                location={this.state.popupInfo}
              />
            ) : null}

            {locationData.map(curr => (
              <Pin
                key={curr.locationName}
                handlePopUp={this.handlePopUp}
                location={curr}
              />
            ))}
          </ReactMapGL>
        </div>
      </div>
    );
  }
}
