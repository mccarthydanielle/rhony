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
import locationData from '../../server/locations';
import { seasons } from '../../server/seasons';
import { neighborhoods } from '../../server/neighborhoods';

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
        width: '100vw',
        height: '100vh',
        isOpen: false,
      },
      locations: [],
      allLocations: [],
    };
  }

  componentDidMount() {
    this.setState({ locations: locationData, allLocations: locationData });
  }

  toggleFilterNav = () => {};

  filterChange = (e, { value, name }) => {
    this.setState({ [name]: value }, this.runFilterFunc);
  };

  runFilterFunc = () => {
    if (!this.state.neighborhoods.length && !this.state.seasons.length) {
      this.showAll();
    } else {
      const filteredLocations = filter(
        this.state.allLocations,
        new Set(this.state.neighborhoods),
        new Set(this.state.seasons)
      );
      this.setState({ locations: filteredLocations });
    }
  };

  showAll = () => {
    this.setState({
      neighborhoods: [],
      seasons: [],
      cast: [],
      locations: this.state.allLocations,
      collapseOpen: false,
    });
  };

  _updateViewport = viewport => {
    this.setState({ viewport: viewport });
  };

  handleRelocate = (latitude, longitude) => {
    this.setState(prevState => ({
      viewport: {
        ...prevState.viewport,
        latitude,
        longitude,
        zoom: 15,
      },
    }));
  };

  toggleNavbar = () => {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen,
      },
    });
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { locations } = this.state;
    const { showFilterNav } = this.props;

    return (
      <div
        style={{ display: 'flex', height: '100vh', border: 'red solid 3px' }}
      >
        {/*----- start of side filter nav -----*/}
        <div
          style={{ width: '500px' }}
          className={showFilterNav === true ? '' : 'hide'}
        >
          {/*----- filtering -----*/}
          <div style={{ marginTop: '100px' }}>
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
        {/*----- end of filter nav -----*/}
        {/*----- map -----*/}
        <MyMap
          locations={locations}
          viewport={this.state.viewport}
          _updateViewport={this._updateViewport}
          // style={{ width: '80%' }}
        />
      </div>
    );
  }
}
