import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

// initial state is an empty string
export default class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = { term: '' }
    // binding the context
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (event) {
    this.setState({ term: event.target.value })
  }

  // we need to fetch the weather data, onSubmit, this
  // container needs to fire up the action creator,
  // fetchWeather, and make our api request
  // need to connect to redux using connect method
  // also need to bind the action creator, fetchWeather,
  // as a prop to this container
  // submitting calls action creator and sets search term
  // to value entered as new state, via empty string first
  onFormSubmit (event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.term)
    // clear after search
    this.setState({ term: '' })
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Get a five-day forecast in your favorite cities'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>
            Submit
          </button>
        </span>
      </form>
    )
  }
}

// needs to have ability to modify the state of our App
// by dispatching actions and to call an action creator
// someone has entered a search term, we need to make an API request
// turn input into controlled field, ie a form element where the value of the input is set by the state of our component
// need to set our state (component level state) whenever the input is changed
// submitting, browser thinks we are making a POST request
// reloads page, not ideal, need to prevent this
// add an event handler to form itself, onFormSubmit
