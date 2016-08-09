import axios from 'axios';

export const RECEIVE_RESTLET_DATA = 'RECEIVE_RESTLET_DATA';
export const receiveRestletData = (restletData) => {

  return { type: RECEIVE_RESTLET_DATA, restletData };
};

export const REQUEST_RESTLET_DATA = 'REQUEST_RESTLET_DATA';
export const requestRestletData = () => ({ type: REQUEST_RESTLET_DATA });

export const RESTLET_SEARCH = 'RESTLET_SEARCH';
export const restletSearch = (searchInput) => {
  // console.log('searchInput', searchInput)
  return ({ type: RESTLET_SEARCH, payload: searchInput });
};

export const RESTLET_CLICK = 'RESTLET_CLICK';
export const restletTitleClick = titleClicked => {
  console.log('restletTitleClick in /actions, titleClicked: ', titleClicked);
  return ({ type: RESTLET_CLICK, payload: titleClicked });
};

export const RESTLET_CELL_CLICK = 'RESTLET_CELL_CLICK';
export const restletCellClick = (id) => {
  console.log('restletCellClick', id)
  return ({ type: RESTLET_CELL_CLICK, payload: id })
};

export const fetchRestletData = () => dispatch => {
  dispatch(requestRestletData());
  const start = new Date().getTime();
  axios.get('api/restlet')
    .then(res => {
      let counter = 1;
      const restletData = [];
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].line_number = counter++;
        res.data[i].hts = 'asdf';
        restletData.push(res.data[i]);
      }

      dispatch(receiveRestletData(restletData));
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
  dispatch(restletSearch(searchValue));
};

export const handleTitleClick = () => (dispatch, getState) => {
  const titleClicked = getState().restletData.titleClicked;
  dispatch(restletTitleClick(titleClicked));
};

export const handleQuantityCellClick = (id) => (dispatch, getState) => {
  dispatch(restletCellClick(id));
};

