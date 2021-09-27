import { createStore } from 'redux'
import { reducer } from './redux/books/books'
const store = createStore (
  reducer
)

console.log(store);

export default store;