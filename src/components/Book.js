import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Button from './Button';

const Book = ({ bookTitle, bookCategory, key }) => {
  const dispatch = useDispatch();
  return (
    <li key={key}>
      Book title:
      {bookTitle}
      - Category:
      {bookCategory}
      -
      {' '}
      <Button
        handleSubmit={() => dispatch(removeBook(key))}
        buttonName="Remove book"
      />
    </li>
  );
};

Book.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  bookCategory: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
};

export default Book;
