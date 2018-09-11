import { combineReducers } from 'redux'
import BooksReducer from './books-reducer'

const rootReducer = combineReducers({
  books: BooksReducer
})

export default rootReducer

// combineReducers is the mapping of our state
// key, piece of state, value the reducer itself
