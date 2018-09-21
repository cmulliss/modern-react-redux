// import { bindActionCreators } from 'redux'
import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
  console.log('Action received', action)
  switch (action.type) {
    case FETCH_WEATHER:
      // can use concat or spread
      // return state.concat([ action.payload.data])
      return [action.payload.data, ...state]
    default:
      return state
  }
}
// need to take our existing list of cities and add on to our
// existing state with the new one, NOT replace the existing
// state, need to return an entirely new []

// reducers are just fns
// first arg, state, for which reducer responsible
// null as initial state, but want to store weather data so becomes []
// second arg is the action

// this a simple reducer that takes an action
// go to action creator and console.log the request that goes out
