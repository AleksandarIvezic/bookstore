// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

// Initial state
const initialState = {
  books: [],
};

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

// Action Creators
const addBook = (payload) => ({
  type: ADD,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE,
  payload,
});

export { booksReducer, addBook, removeBook };
