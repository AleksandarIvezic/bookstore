import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import { addBook } from '../redux/books/books';

const Form = () => {
  const titleInput = document.getElementById('title');
  const categoryInput = document.getElementById('category');
  const dispatch = useDispatch();
  const [book, setBook] = useState({ id: uuidv4() });

  const handleChange = (e) => {
    setBook((book) => ({
      ...book,
      [e.target.name]: e.target.value,
    }));
  };

  const submitBookToStore = () => {
    if (book.title && book.category) {
      setBook((book) => ({
        ...book,
        id: uuidv4(),
      }));
      dispatch(addBook(book));
      titleInput.value = '';
      categoryInput.value = '';
    }
  };
  return (
    <form>
      <h3>Add new book</h3>
      <input name="title" type="text" placeholder="Book title" id="title" required onChange={handleChange} />
      <input name="category" type="text" placeholder="Category" id="category" required onChange={handleChange} />
      <Button handleSubmit={submitBookToStore} buttonName="Add book" />
    </form>
  );
};

export default Form;
