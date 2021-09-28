import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.booksReducer.books);

  if (books.length) {
    return (
      <div>
        <ul>
          {
            books.map((book) => (
              <Book bookTitle={book.title} bookAuthor={book.author} key={book.id} />
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
