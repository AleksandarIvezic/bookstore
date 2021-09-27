import React from 'react'
import '../styling/App.css';
import { Route, Switch } from 'react-router';
import Books from './Books';
import Navbar from './Navbar';
import Categories from './Categories';
import { Provider } from 'react-redux'
import store from '../storeConfig';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route path='/books'>
          <Books />
        </Route>
        <Route path='/categories'>
          <Categories />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
