import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/books/books';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  const submitBookToStore = () => {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const newBook = {
      id: uuidv4(),
      title: titleInput.value,
      author: authorInput.value,
    };
    if (newBook.title && newBook.author) {
      dispatch(addBook(newBook));
      titleInput.value = '';
      authorInput.value = '';
    }
  };
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
        <Form handleSubmit={submitBookToStore} />
      </div>
    );
  }
  return (
    <>
      <h2> YOU DON&apos;T HAVE ANY BOOKS TO DISPLAY!</h2>
      <Form handleSubmit={submitBookToStore} />
    </>
  );
};

export default Books;
