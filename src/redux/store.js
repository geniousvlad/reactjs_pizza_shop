import { createStore } from 'redux';

import rootReducer from './reducers';


const store = createStore(rootReducer);

window.store = store;

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
