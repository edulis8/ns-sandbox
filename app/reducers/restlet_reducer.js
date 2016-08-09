
import { RECEIVE_RESTLET_DATA, REQUEST_RESTLET_DATA, RESTLET_SEARCH, RESTLET_CLICK, RESTLET_CELL_CLICK } from '../actions';

export default function restlet_reducer(state = {
  loading: false,
  data: [],
  filtered: [],
  titleClicked: false,
  selectedCell: null
}, action) {
  switch (action.type) {
    case RESTLET_CLICK:
      return {
        ...state,
        titleClicked: !action.payload
      };
    case RESTLET_CELL_CLICK:
      return {
        ...state,
        selectedCell: action.payload
      }
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
