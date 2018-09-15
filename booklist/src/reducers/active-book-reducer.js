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
// if action does't concern this reducer, return default state
// or if does, will return new state
// if the action's type is 'BOOK_SELECTED' we return the actions payload, which is the selected book
