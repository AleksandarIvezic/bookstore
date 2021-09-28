import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const titleInput = document.getElementById('title');
  const categoryInput = document.getElementById('category');
  const dispatch = useDispatch();
  const [bookState, setBookState] = useState({ id: uuidv4() });

  const handleChange = (e) => {
    setBookState((bookState) => ({
      ...bookState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = () => {
    dispatch(addBook({ bookState }));
    setBookState({ id: uuidv4() });
    titleInput.value = '';
    categoryInput.value = '';
  };

  return (
    <form>
      <h3>Add new book</h3>
      <input name="title" type="text" placeholder="Book title" id="title" onChange={handleChange} />
      <input name="category" type="text" placeholder="category" id="category" onChange={handleChange} />
      <button
        type="button"
        onClick={handleClick}
      >
        Add book
      </button>
    </form>
  );
};

export default Form;
