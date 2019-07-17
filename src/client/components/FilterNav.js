import React from 'react';
import { Dropdown, Card } from 'semantic-ui-react';

import LocationCard from './Card';
import MyMap from './MyMap';

import locationData from '../../server/dummyData';

import '../css/App.css';

const neighborhoods = [
  { key: 'upperEastSide', text: 'Upper East Side', value: 'upperEastSide' },
  { key: 'upperWestSide', text: 'Upper West Side', value: 'upperWestSide' },
  { key: 'Midtown', text: 'Midtown', value: 'Midtown' },
  { key: 'Chelsea', text: 'Chelsea', value: 'Chelsea' },
  {
    key: 'FlatironDistrict',
    text: 'Flatiron District',
    value: 'FlatironDistrict',
  },
];

const seasons = [
  { key: 1, text: '1', value: '1' },
  { key: 2, text: '2', value: '2' },
  { key: 3, text: '3', value: '3' },
  { key: 4, text: '4', value: '4' },
  { key: 5, text: '5', value: '5' },
  { key: 6, text: '6', value: '6' },
  { key: 7, text: '7', value: '7' },
  { key: 8, text: '8', value: '8' },
  { key: 9, text: '9', value: '9' },
  { key: 10, text: '10', value: '10' },
  { key: 11, text: '11', value: '11' },
];

export default class FilterNav extends React.Component {
  constructor() {
    super();
    this.state = {
      neighborhoods: [],
      seasons: [],
      viewport: {
        latitude: 40.7736,
        longitude: -73.9566,
        zoom: 13,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: '100vh',
      },
    };
    this.handleChangeTest = this.handleChangeTest.bind(this);
    this.showAll = this.showAll.bind(this);
    this._updateViewport = this._updateViewport.bind(this);
    this.handleRelocate = this.handleRelocate.bind(this);
  }

  handleChangeTest(e, { value, name }) {
    this.setState({ [name]: value });
  }

  showAll() {
    this.setState({ neighborhoods: [], seasons: [], cast: [] });
  }

  _updateViewport = viewport => {
    console.log('viewport', viewport);
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
    return (
      <div style={{ display: 'flex' }}>
        <div className="entireFilterNav">
          {/*----- filtering -----*/}
          <div style={{ flex: 3 }}>
            <div className="filterBlock">
              <button onClick={this.showAll}>Show all</button>
            </div>

            <div className="filterBlock">
              <p className="filterHeader">Neighborhood</p>
              <Dropdown
                onChange={this.handleChangeTest}
                value={this.state.neighborhoods}
                name="neighborhoods"
                placeholder="Neighborhoods"
                options={neighborhoods}
                selection
                fluid
                multiple
                search
              />
            </div>

            <div className="filterBlock">
              <p className="filterHeader">Season</p>
              <Dropdown
                onChange={this.handleChangeTest}
                value={this.state.seasons}
                placeholder="Seasons"
                name="seasons"
                options={seasons}
                selection
                fluid
                multiple
                search
              />
            </div>
          </div>

          {/*----- cards -----*/}
          <div className="filterNavCardCluster">
            <Card.Group className="sideCardStyling">
              {locationData.map(curr => (
                <LocationCard
                  handleRelocate={this.handleRelocate}
                  key={curr.locationName}
                  locationDetails={curr}
                />
              ))}
            </Card.Group>
          </div>
        </div>
        {/*----- map -----*/}
        <MyMap
          locations={locationData}
          viewport={this.state.viewport}
          _updateViewport={this._updateViewport}
        />
      </div>
    );
  }
}
