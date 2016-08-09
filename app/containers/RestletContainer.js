import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchRestletDataIfNeeded, handleSearch, handleTitleClick, handleQuantityCellClick } from '../actions';

import RestletData from '../components/RestletData';


const RestletContainer = React.createClass({
  componentDidMount() {
    this.props.dispatch(fetchRestletDataIfNeeded());
  },

  render() {
    const { loading, data, filtered, titleClicked, selectedCell } = this.props;
    return <RestletData loading={loading} data={filtered} handleTitleClick={handleTitleClick} handleSearch={handleSearch} handleQuantityCellClick={handleQuantityCellClick} dispatch={this.props.dispatch} titleClicked={titleClicked} selectedCell={selectedCell} />;
  },
});

function mapStateToProps(state) {
  // console.log('state in mapStateToProps in RestletContainer', state);
  return {
    loading: state.restletData.loading,
    data: state.restletData.data,
    filtered: state.restletData.filtered,
    titleClicked: state.restletData.titleClicked,
    selectedCell: state.restletData.selectedCell,
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ handleSearch, fetchRestletDataIfNeeded }, dispatch);
// }

export default connect(mapStateToProps)(RestletContainer);
