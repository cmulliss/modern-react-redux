import { combineReducers } from 'redux'
import BooksReducer from './books-reducer'
import ActiveBook from './active-book-reducer'

// global App state, key books, value is whatever gets returned from the books reducer, in this case our array of books
// any key to the object that we provide to combineReducers, ends up as a key on our global state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
})

export default rootReducer

// combineReducers is the mapping of our state
// key, piece of state, value the reducer itself
