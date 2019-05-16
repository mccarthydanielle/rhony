import React from 'react'
import { Dropdown, Card } from 'semantic-ui-react'

import LocationCard from './Card'

import '../css/App.css'

const neighboods = [
  { key: 'upperEastSide', text: 'Upper East Side', value: 'upperEastSide' },
  { key: 'upperWestSide', text: 'Upper West Side', value: 'upperWestSide' },
  { key: 'Midtown', text: 'Midtown', value: 'Midtown' },
  { key: 'Chelsea', text: 'Chelsea', value: 'Chelsea' },
  { key: 'FlatironDistrict', text: 'Flatiron District', value: 'FlatironDistrict' },

]

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
]

const cast = [
  { key: 'Luann de Lesseps', text: 'Luann de Lesseps', value: 'Luann de Lesseps' },
  { key: 'Bethenny Frankel', text: 'Bethenny Frankel', value: 'Bethenny Frankel' },
  { key: 'Alex McCord', text: 'Alex McCord', value: 'Alex McCord' },
  { key: 'Ramona Singer', text: 'Ramona Singer', value: 'Ramona Singer' },
  { key: 'Jill Zarin', text: 'Jill Zarin', value: 'Jill Zarin' },
  { key: 'Kelly Killoren Bensimon', text: 'Kelly Killoren Bensimon', value: 'Kelly Killoren Bensimon' },
  { key: 'Sonja Morgan', text: 'Sonja Morgan', value: 'Sonja Morgan' },
  { key: 'Cindy Barshop', text: 'Cindy Barshop', value: 'Cindy Barshop' },
  { key: 'Aviva Drescher', text: 'Aviva Drescher', value: 'Aviva Drescher' },
  { key: 'Carole Radziwill', text: 'Carole Radziwill', value: 'Carole Radziwill' },
  { key: 'Heather Thomson', text: 'Heather Thomson', value: 'Heather Thomson' },
  { key: 'KristenTaekman', text: 'KristenTaekman', value: 'KristenTaekman' },
  { key: 'Dorinda Medley', text: 'Dorinda Medley', value: 'Dorinda Medley' },
  { key: 'Jules Wainstein', text: 'Jules Wainstein', value: 'Jules Wainstein' },
  { key: 'Tinsley Mortimer', text: 'Tinsley Mortimer', value: 'Tinsley Mortimer' },
]

export default class FilterNav extends React.Component {
  constructor() {
    super()
    this.state = {
      neighborhoods: [],
      seasons: [],
      cast: []
    }
    this.handleChangeTest = this.handleChangeTest.bind(this)
    this.showAll = this.showAll.bind(this)
  }

  handleChangeTest(e, { value, name }) {
    this.setState({ [name]: value })

  }

  showAll() {
    this.setState({ neighborhoods: [], seasons: [], cast: [] })
  }

  render() {
    return (
      <div className="entireFilterNav">

        {/*----- filtering -----*/}
        <div style={{ flex: 3 }}>
          <div className="filterBlock">
            <button onClick={this.showAll}>Show all</button>
          </div>

          <div className="filterBlock">
            <p className="filterHeader">Neighborhood</p>
            <Dropdown onChange={this.handleChangeTest} value={this.state.neighborhoods} name="neighborhoods" placeholder="Neighborhoods" options={neighboods} selection fluid multiple search />
          </div>

          <div className="filterBlock">
            <p className="filterHeader">Season</p>
            <Dropdown onChange={this.handleChangeTest} value={this.state.seasons} placeholder="Seasons" name="seasons" options={seasons} selection fluid multiple search />
          </div>

          <div className="filterBlock">
            <p className="filterHeader">Cast Member</p>
            <Dropdown onChange={this.handleChangeTest} value={this.state.cast} placeholder="Cast Members" name="cast" options={cast} selection fluid multiple search />
          </div>

        </div >

        {/*----- cards -----*/}
        <div className="filterNavCardCluster">
          <Card.Group className="sideCardStyling">
            {this.props.locations.map(curr => <LocationCard handleRelocate={this.props.handleRelocate} key={curr.locationName} locationDetails={curr} />)}
          </Card.Group>
        </div>

      </div>
    );
  }
}
