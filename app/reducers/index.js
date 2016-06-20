
import { combineReducers } from 'redux';

import userData from './userData';
import restletData from './restlet_reducer';

const rootReducer = combineReducers({
  userData,
  restletData,
  // add more reducers here...
});

export default rootReducer;

