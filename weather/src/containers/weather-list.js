import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressue</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>x</tbody>
      </table>
    )
  }

function mapStateToProps (state) {
  return {
    weather: state.weather
  }
}
export default WeatherList
