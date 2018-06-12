import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectBook from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  /// Whatever is returned will show up as props inisde of BookList
  return {
    books: state.books,
  };
}

/// Anything returned from this fn will end up as props on the BookList container
const matchDispatchToProps = dispatch => {
  /// Whenever selectBook is called, the result should be passed to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BookList);
