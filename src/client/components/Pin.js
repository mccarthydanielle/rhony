import React from 'react'
import { Marker } from 'react-map-gl'
import apple from '../../assets/apple2.png'

export default class Pin extends React.Component {

  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    const { locationName, address, castMembers, description, neighborhood, seasons } = this.props.location

    const [lat, long] = this.props.location.coords
    return (
      <Marker latitude={lat} longitude={long} offsetLeft={-20} offsetTop={-10} >
        <img onClick={() => this.props.handlePopUp(this.props.location)} style={{ size: '10px' }} src={apple} alt="apple" />
      </Marker>
    )
  }


}
