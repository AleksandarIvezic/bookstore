//Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';


//Initial state
const initialState = {
  books: [{ title: 'Book 1', id: 0, category: 'Sci-fi'}]
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      console.log('action-state:', state);
      return {
        ...state,
        books: [...state.books, action.payload.bookState]
      }
    case REMOVE:
      return state.filter((book) => book.id !== action.payload.id);
    default: 
      return state;
  }
}

// Action Creators
const addBook = (book) => {
  return {
    type: ADD,
    payload: book
  }
}

const removeBook = (book) => {
  return {
    type: REMOVE,
    payload: book
  }
}

export {reducer, addBook, removeBook};