import { combineReducers } from 'redux';
import { reducer as page1, reducerPostDetail as postDetail } from './Page1';

export default combineReducers({
  page1,
  postDetail
});
