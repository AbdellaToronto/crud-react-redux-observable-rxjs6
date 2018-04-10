import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import { epicMiddleware } from './epics';
import { RootReducer } from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  RootReducer,
  applyMiddleware(epicMiddleware),
);

const ReduxApp = () => <Provider store={store}><App/></Provider>;

ReactDOM.render(
  <ReduxApp />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
