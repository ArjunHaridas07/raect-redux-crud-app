import { createStore, combineReducers } from 'redux';
import booksReducer from './reducers/books';

const rootReducer = combineReducers({
  books: booksReducer,
});

const store = createStore(rootReducer);

export default store;
