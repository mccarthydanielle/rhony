import React from 'react'
import ReactMapGL, { NavigationControl, GeolocateControl } from 'react-map-gl'

//style sheets
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'


import locationData from '../../server/dummyData'

//components
import Pin from './Pin'
import FilterNav from './FilterNav'
import PopupBox from './Popup'

//keys
const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN

const navStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '10px'
}

const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  margin: 10
};

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 40.7736,
        longitude: -73.9566,
        zoom: 13,
        bearing: 0,
        pitch: 0,
        width: "100%",
        height: "100vh",
      },
      popupInfo: null
    }
    this.handlePopUp = this.handlePopUp.bind(this)
    this.closePopUp = this.closePopUp.bind(this)
    this._updateViewport = this._updateViewport.bind(this)
  }

  handlePopUp(popupInfo) {
    this.setState({ popupInfo })
  }

  closePopUp() {
    this.setState({ popupInfo: null })
  }

  _updateViewport = (viewport) => {
    this.setState({ viewport })
  }

  render() {
    const { viewport } = this.state
    return (
      <div style={{ display: 'flex' }}>
        <FilterNav style={{ flex: 1 }} />
        <div style={{ flex: 4 }}>
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={mapboxToken}
            onViewportChange={(viewport) => this.setState({ viewport })}
          >
            <div className="nav" style={navStyle}>
              <NavigationControl onViewportChange={this._updateViewport} />
            </div>

            <GeolocateControl
              style={geolocateStyle}
              onViewportChange={this._updateViewport}
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
            />

            {this.state.popupInfo ? <PopupBox closePopUp={this.closePopUp} location={this.state.popupInfo} /> : null}


            {locationData.map(curr => <Pin key={curr.locationName} handlePopUp={this.handlePopUp} location={curr} />)}

          </ReactMapGL>
        </div>
      </div>

    );
  }
}
