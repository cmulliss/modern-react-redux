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
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
