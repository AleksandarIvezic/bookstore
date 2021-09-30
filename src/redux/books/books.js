import getBooks from '../../helpers/getBooks';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const LOAD = 'bookstore/books/LOAD';

const initialState = {
  books: [],
};

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
        books: [...state.books.filter((book) => book.id !== action.payload)],
      };
    case LOAD:
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

const addBook = (payload) => ({
  type: ADD,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE,
  payload,
});

const loadBooks = (payload) => ({
  type: LOAD,
  payload,
});

const loadBooksThunk = () => async (dispatch) => {
  const books = await getBooks();
  if (books) {
    dispatch(loadBooks(books));
  }
};

export {
  booksReducer, addBook, removeBook, loadBooksThunk,
};
