import React from 'react';
import '../styling/App.css';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import Books from './Books';
import Navbar from './Navbar';
import Categories from './Categories';
import store from '../storeConfig';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
