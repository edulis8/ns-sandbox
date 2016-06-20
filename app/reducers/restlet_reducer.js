
import { RECEIVE_RESTLET_DATA, REQUEST_RESTLET_DATA, RESTLET_SEARCH } from '../actions';

export default function restlet_reducer(state = {
  loading: false,
  data: [],
  filtered: [],
}, action) {
  switch (action.type) {
    case RECEIVE_RESTLET_DATA:
      return {
        ...state,
        data: action.restletData,
        filtered: action.restletData,
        loading: false
      };
    case REQUEST_RESTLET_DATA:
      return {
        ...state,
        loading: true
      };
    case RESTLET_SEARCH:
      return {
        ...state,
        filtered: state.data.filter((item) => {
          let bool = false;
          for (const key in item) {
            if (new RegExp(action.payload.toLowerCase()).test(String(item[key]).toLowerCase())) {
              bool = true;
            }
          }
          return bool;
        }),
      };
    default:
      return state;
  }
}
