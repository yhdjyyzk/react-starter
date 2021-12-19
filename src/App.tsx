import * as React from 'react';
import Routers from './router/Routers';
import page0Reducer from './store/page0/reducers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'

// const store = createStore(page0Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const composeEnhancers =
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    //@ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const reducers = combineReducers({ page0Reducer });
const store = createStore(reducers, enhancer);

export default class App extends React.Component {
  render() {
    return (
      // <ToDo/>
      <div>
        {/* <HelloWorld text="Jack"></HelloWorld> */}
        <Provider store={store}>
          <Routers />
        </Provider>
      </div>
    );
  }
}
