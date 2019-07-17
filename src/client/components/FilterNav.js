import React from 'react';
import { Dropdown, Card } from 'semantic-ui-react';

// components
import LocationCard from './Card';
import MyMap from './MyMap';

//filter utility function
import { filter } from '../../utils/filter';

//css
import '../css/App.css';

//show data
import locationData from '../../server/dummyData';
import { seasons, neighborhoods } from '../../utils/showData';

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
      locations: [],
      allLocations: [],
    };
    this.filterChange = this.filterChange.bind(this);
    this.showAll = this.showAll.bind(this);
    this._updateViewport = this._updateViewport.bind(this);
    this.handleRelocate = this.handleRelocate.bind(this);
    this.runFilterFunc = this.runFilterFunc.bind(this);
  }

  componentDidMount() {
    this.setState({ locations: locationData, allLocations: locationData });
  }

  filterChange(e, { value, name }) {
    this.setState({ [name]: value }, this.runFilterFunc);
  }

  runFilterFunc() {
    const filteredLocations = filter(
      this.state.allLocations,
      new Set(this.state.neighborhoods),
      new Set(this.state.seasons)
    );
    this.setState({ locations: filteredLocations });
  }

  showAll() {
    this.setState({
      neighborhoods: [],
      seasons: [],
      cast: [],
      locations: this.state.allLocations,
    });
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
    const { locations } = this.state;
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
                onChange={this.filterChange}
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
                onChange={this.filterChange}
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
              {locations.map(curr => (
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
          locations={locations}
          viewport={this.state.viewport}
          _updateViewport={this._updateViewport}
        />
      </div>
    );
  }
}
