import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render () {
    if (!this.props.book) {
      return <div>Select a book to get started</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    book: state.activeBook
  }
}
export default connect(mapStateToProps)(BookDetail)
// export our container

// container, as cares what active book is

// import the connect helper and connect our App state to the props of the container, using mapStateToProps, we connect mapStateToProps to BookDetail
// argument is the App state, prop is book, because
// our activeBook reducer is creating activeBook piece of state

// need a reasonable default, add an initial check in the render method of bookDetail
