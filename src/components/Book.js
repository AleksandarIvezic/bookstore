import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Button from './Button';
import deleteBook from '../helpers/deleteBook';
import '../styling/Book.css';

const Book = ({ bookTitle, bookCategory, id }) => {
  const dispatch = useDispatch();
  return (
    <li className="book">
      <div className="info">
        <div className="book-details">
          <p className="category">{bookCategory}</p>
          <h2>{bookTitle}</h2>
        </div>
        <ul className="book-links">
          <li className="book-link">Comments</li>
          <li className="border" />
          <li className="book-link">
            <Button
              handleSubmit={() => {
                dispatch(removeBook(id));
                deleteBook(id);
              }}
              buttonName="Remove"
              buttonClass="remove-link"
            />
          </li>
          <li className="border" />
          <li className="book-link">Edit</li>
        </ul>
      </div>
      <div className="progress">
        <div className="completed">
          <div className="progress-img" />
          <div className="progress-percent">
            <h3 className="no-margin number">75%</h3>
            <p className="no-margin grey-text">Completed</p>
          </div>
        </div>
        <div className="border short-border" />
        <div className="update-progress">
          <span className="grey-text">CURRENT CHAPTER</span>
          <p className="chapter">Chapter 15</p>
          <button className="update-btn" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  bookCategory: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
