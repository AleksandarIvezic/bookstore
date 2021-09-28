import { createStore } from 'redux';
import { reducer } from './redux/books/books';

const store = createStore(
  reducer,
);

export default store;
