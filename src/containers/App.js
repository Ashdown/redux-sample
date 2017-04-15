import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../store_enhancers/devTools';

import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
          <h2>App Component</h2>
        {/*<Provider store={store}>*/}
          {/*<FriendListApp />*/}
        {/*</Provider>*/}

        {renderDevTools(store)}
      </div>
    );
  }
}