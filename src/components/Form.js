import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import { addBook } from '../redux/books/books';
import postBook from '../helpers/postBook';
import '../styling/Form.css';

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
      postBook(book.id, book.title, book.category);
      titleInput.value = '';
      categoryInput.value = '';
    }
  };
  return (
    <form>
      <h3>Add new book</h3>
      <div className="inputs">
        <input name="title" type="text" placeholder="Book title" className="form-input" id="title" required onChange={handleChange} />
        <input name="category" type="text" placeholder="Category" className="form-input" id="category" required onChange={handleChange} />
        <Button handleSubmit={submitBookToStore} buttonName="Add book" buttonClass="add-btn form-input" />
      </div>
    </form>
  );
};

export default Form;
