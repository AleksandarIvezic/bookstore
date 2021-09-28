import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {
          books.map((book) => (
            <li
              key={book.id}
            >
              Book title:
              {' '}
              {book.title}
              {' '}
              -
              Category:
              {' '}
              {book.category}
              {' '}
              -
              {' '}
              <button
                type="button"
                onClick={() => dispatch(removeBook(book))}
              >
                Remove book
              </button>
            </li>
          ))
        }
      </ul>
      <Form />
    </div>

  );
};

export default Books;
