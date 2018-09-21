import axios from 'axios'

// this code works
const API_KEY = 'f83103e80f04446e313420212628af33'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`

// use varible here, and import into reducer
export const FETCH_WEATHER = 'FETCH_WEATHER'

// action creator, fetchWeather, responsible for making api request
export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},UK`
  // this will return a promise we call request
  // will pass request into our action as the payload
  const request = axios.get(url)

  // log the request going out
  console.log('Request:', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
// a user enters a search term, they submit the form
// and that calls the action creator, fetchWeather and
// passes in the city, we craft a url, and make an ajax
// request with axios, axios returns a promise
// a promise is a data structure that doesn't actually yet
// contain any of our request data
// but, returning the promise on the payload key, ie as the
// payload.
// middlewares have the ability to stop or manipulate actions
// before they hit any reducers
// redux promise sees this incoming action, as the gatekeeper,
// looks at specifically the payload property,
// in actions/index.js, if the payload is a promise then
// it stops the action entirely, then once the request finishes
// it dispatches a NEW action of the same 'type', but with a
// 'payload' of the resolved request
