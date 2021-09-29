import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooksThunk } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooksThunk());
  }, []);

  if (books.length) {
    return (
      <div>
        <ul>
          {
            books.map((book) => (
              <Book bookTitle={book.title} bookCategory={book.category} key={book.id} />
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
