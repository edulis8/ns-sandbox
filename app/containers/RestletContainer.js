import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchRestletDataIfNeeded } from '../actions';
import { handleSearch } from '../actions';

import RestletData from '../components/RestletData';

// const handleSearch = (value) => console.log(value)

const RestletContainer = React.createClass({
  componentDidMount() {
    // console.log('props comp did mount', this.props)
    this.props.dispatch(fetchRestletDataIfNeeded());
  },

  render() {
    const { loading, data, filtered } = this.props;
    return <RestletData loading={loading} data={filtered} handleSearch={handleSearch} dispatch={this.props.dispatch} />;
  },
});

function mapStateToProps(state) {
  // console.log('state in mapStateToProps in RestletContainer', state);
  return {
    loading: state.restletData.loading,
    data: state.restletData.data,
    filtered: state.restletData.filtered
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ handleSearch, fetchRestletDataIfNeeded }, dispatch);
// }

export default connect(mapStateToProps)(RestletContainer);
