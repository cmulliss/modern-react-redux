import React, { Component } from 'react'
import { connect } from 'react-redux'
// we take the return value from selectBook and make sure it flows through all the reducers
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'
        >
          {book.title}
        </li>
      )
    })
  }
  render () {
    return <ul className='list-group col-sm-4'>{this.renderList()}</ul>
  }
}
function mapStateToProps (state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}
// anything returned from this fn will end up as props
// on the BookList container
function mapDispatchToProps (dispatch) {
  // whenever selectBook is called, the result should be
  // passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}
// promote BookList from a component to a container, it needs
// to know about this new dispatch method, selectBook.
// make it available as a prop
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)
// Anything returned from this function will end up as props
// on the BookList container
// function mapDispatchToProps (dispatch) {
// Whenever selectBook is called, the result shoudl be passed
// to all of our reducers

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
// redux generated a state object that contained our books, than mapped that state as props to our component.
// because the state was updated through our reducer, our component re-rendered with that list of books
