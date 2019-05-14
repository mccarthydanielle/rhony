import React from 'react'
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

import locationData from '../../server/dummyData'

import Pin from './Pin'
import FilterNav from './FilterNav'

const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}


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
        width: "100vw",
        height: "100vh",
      }
    }
  }

  render() {
    const { viewport } = this.state
    return (
      <div>
        <FilterNav />
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxApiAccessToken={mapboxToken}
          onViewportChange={(viewport) => this.setState({ viewport })}
        >
          <div className="nav" style={navStyle}>
            <NavigationControl />
          </div>

          {locationData.map(curr => <Pin location={curr} />)}

        </ReactMapGL>
      </div>

    );
  }
}
