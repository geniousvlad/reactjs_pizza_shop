import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);


export default store;


// const store = createStore(filtersReducer, pizzasReducer);

// function counter(state =0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }
