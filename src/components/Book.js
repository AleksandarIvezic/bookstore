import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Button from './Button';
import deleteBook from '../helpers/deleteBook';

const Book = ({ bookTitle, bookCategory, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      Book title:
      {bookTitle}
      {' '}
      - Category:
      {bookCategory}
      {' '}
      <Button
        handleSubmit={() => {
          dispatch(removeBook(id));
          deleteBook(id);
        }}
        buttonName="Remove book"
      />
    </li>
  );
};

Book.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  bookCategory: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
