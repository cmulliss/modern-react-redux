## Weather app

* per project:

npm install prettier-eslint --save-dev

* often needed:

npm install --save redux react-redux —-save

npm install --save axios

* Middleware, to help handle ajax requests

npm install --save redux-promise

* openweathermap.org/forecast5
* middleware has ability to block, modify or let pass through actions as they are created before they hit a reducer.
* gatekeepers
* install redux-promise to help with the Ajax request
* npm install --save redux-promise
* we only change our application state through our reducers and actions
* to load our weather data we need to dispatch an action call
* call an action creator which is going to be responsible for making that ajax request
* inside actions/index.js to create an action creator that's going to be responsible for making an API request to go fetch our weather data
* create a new fn and export it so can be required into other files
* action creators always have to return an action
* an action is an object which always has to have a type
* define a variable called FETCH_WEATHER (rather than use a string)
* assign a string to it, and then exported that variable
* finally, created an action where the type was FETCH_WEATHER
* this way keeps our action types consistent between our action creators and our reducers
* going to create a reducer that handles this type FETCH_WEATHER
* what we , as a convention, is make a single variable that holds our action type and we use it in the action, then reference it in the reducer
* make new variable: const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
* use es6 template strings to clean up, backticks and ${API_kKEY}
* need to city from somewhere, so should always have an argument in the fetchWeather fn, of city which should be a string
* looking back at weather map site, in function:
  const url = `${ROOT_URL}&q=${city},uk`;
* we want to make a simple Ajax request with the axios library
* npm install --save axios
* is like jquery but simpler
* we need to make a get request, axios.get returns a promise
* import axios at top of file, then in theaction creator function:
* const request = axios.get(url);
* so take this url we crafted, with a particular search city and make a get request, this will return a promise, call it request
* going to pass that request into our action as the payload

```javascript
import axios from "axios";
//using es6 template strings ``
const API_KEY = "15ffe6f0bbbbba655c8f904d633ab7d2";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
```

* we setup a new action creator called fetchWeather that's going to be reponsible for creating an action that contains a request to the backend API
* It's type was FETCH_WEATHER, the fetchWeather action creator takes a city, which is a string and uses it as part of the search query
* we installed the axios library, which behaves like jquery
* reaches out, does an ajax request in the form of a get url that we supply and returns a promise that we pass into the actions payload property.
* at top of searchBar, import connect, bindActionCreators and the action creator we have just created, fetchWeather
* our goal is to hook up the action creator fetchWeather to our searchBar container.
* we do that by defining a fn at the bottom of the search bar called mapDispatchToProps
* and inside that fn, we return a call to bindActionCreators with fetchWeather, and then as second argument we pass in dispatch

```javascript
function mapDispatchToProps(dispatch) {
  return bindActionsCreators({ fetchWeather }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
```

* so this causes the action creator, whenever it gets called adn returns an action, find action creators with dispatch
* Make sure that action flows down into the middleware and then the reducers inside our redux app
* now we will export default and connect null, mapDispatchToProps to searchBar.
* null is used because this container doesn't care about state, but mapDispatchToProps in always second argument
* so by binding the action creator fetchWeather to dispatch and mapping it to props that gives us access to the function this.props.fetchWeather indside of our component
* insode of onFormSubmit which is when we want to call that action creator because a user is trying to search for a given city, we will sy this.props.fetchWeather and then we need to pass in the actual city which is this.state.term
* as a convenience to our users, after we kick off the search here we'll also clear out that search input, by just calling this.setState and set term to empty
* so whenever the user clicks submit, or presses enter, with the form selected it will call our action creator with the search term that they entered and then will set the state of term to empty string, which will cause our component to re-render, the input has a value of this.state.term so the inputs value will now be empty strings, will appear empty to user.
* get error, cannot read props of null, are using 'this' so need to bind it
* we have onFormSubmit, which is a callback, and just added in reference to 'this' and cannot read property 'props of null'
* when we have a callback, which we pass to a jsx, DOM elemenent that makes a reference to 'this', we need to bind the context.
* So at the top, in the constructor, we add
* this.onFormSubmit = this.onFormSubmit.bind(this);
*

### Summary

* we are working in a container here and this needs to be able to call an action creator, needs to be able to reach out to redux and work with redux directly.
* That means we need to connect our searchBar container to redux using the connect method from the react-redux library
* We are also going to bind the action creator fetchWeather as a property to this container
