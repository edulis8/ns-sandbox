import axios from 'axios';

export const RECEIVE_RESTLET_DATA = 'RECEIVE_RESTLET_DATA';
export const receiveRestletData = (restletData) => ({ type: RECEIVE_RESTLET_DATA, restletData });

export const REQUEST_RESTLET_DATA = 'REQUEST_RESTLET_DATA';
export const requestRestletData = () => ({ type: REQUEST_RESTLET_DATA });

export const RESTLET_SEARCH = 'RESTLET_SEARCH';
export const restletSearch = (searchInput) => {
  console.log('searchInput', searchInput)
  return ({ type: RESTLET_SEARCH, payload: searchInput })
}

export const fetchRestletData = () => dispatch => {
  dispatch(requestRestletData());
  const start = new Date().getTime();
  axios.get('api/restlet')
    .then(res => {
      dispatch(receiveRestletData(res.data.data));
      const end = new Date().getTime();
      console.log('ajax request on front end in seconds: ', (end - start) / 1000);
    })
    .catch(err => console.log(err));
};

export const shouldFetchRestletData = state => {
  const { restletData } = state;
  // return true if we don't have any users
  if (!restletData.data.length) {
    return true;
  }
  // return false if we're already trying to load data
  if (restletData.loading) {
    return false;
  }
  return false;
};

export const fetchRestletDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchRestletData(getState())) {
    dispatch(fetchRestletData());
  }
};

export const handleSearch = (searchValue) => (dispatch, getState) => {
  console.log('searchValue', searchValue)
  dispatch(restletSearch(searchValue));
  console.log('getState()', getState())
};

