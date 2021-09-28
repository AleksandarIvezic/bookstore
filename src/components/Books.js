import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Button from './Button';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  if (books.length) {
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
                Author:
                {' '}
                {book.author}
                {' '}
                -
                {' '}
                <Button handleSubmit={() => dispatch(removeBook(book))} buttonName="Remove book" />
              </li>
            ))
          }
        </ul>
        <Form />
      </div>
    );
  }
  return (
    <>
      <h2> YOU DON&apos;T HAVE ANY BOOKS TO DISPLAY!</h2>
      <Form />
    </>
  );
};

export default Books;
