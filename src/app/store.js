import {combineReducers, createStore, applyMiddleware} from "redux";
import {currentUserReducer, initialCurrentUser} from "./../features/currentUsers/currentUserSlice";
import {toDoReducer, initialTodos} from "./../features/todos/todoSlice";
import thunk from "redux-thunk";

// function logger(store) {                 // Middleware
//   return function(next) {
//     return function(action) {
//       console.log('yay');
//       action.payload.name += "z";
//       return next(action);
//     }
//   }
// }

// const logger2 = (store) => (next) => (action) => {     // Middleware
//   action.payload.name += "u";
//   console.log("ok");
//   return next(action);
// }

const store = createStore(combineReducers({
      currentUser: currentUserReducer,
      todos: toDoReducer
    }), {
    todos: initialTodos,
    currentUser: initialCurrentUser,
  }, applyMiddleware(thunk)
);

export default store;