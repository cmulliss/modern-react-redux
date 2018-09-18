import axios from 'axios'

const API_KEY = '15ffe6f0bbbbba655c8f904d633ab7d2'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// use varible here, and import into reducer
export const FETCH_WEATHER = 'FETCH_WEATHER'

// action creator, fetchWeather, responsible for making api request
export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},uk`
  // this will return a promise we call request
  // will pass request into our action as the payload
  const request = axios.get(url)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
