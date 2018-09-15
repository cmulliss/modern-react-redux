export function selectBook (book) {
  // selectBook is an ActionCreator, it needs to return an action, an object with a type property
  // only arg is book, an object with a title

  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
// need to make sure the action returned from it runs through all our reducers, need to make sure this action creator is wired up to redux: in container, bindActionCreators and dispatch
