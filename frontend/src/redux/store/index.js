import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import postReducer from '../reducers/postReducer';
import commentReducer from '../reducers/commentReducer';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
  users: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
