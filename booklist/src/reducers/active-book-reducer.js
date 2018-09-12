export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
    default:
      return state
  }
}

// state argument is NOT App state, only the state
// this reducer is responsible for
