
import React, { Component } from 'react';
// I only made this a class b/c i think it couldn't be a functional component 
// if it had two functions inside?
class RestletData extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    this.props.dispatch(this.props.handleSearch(event.target.value))
  }
  renderData(data, i) {
    return (
      <tr key={i}>
        <td>{data.line_number}</td>
        <td>{data.item}</td>
        <td>{data.assortment_item}</td>
        <td>{data.description}</td>
        <td>{data.customs_description}</td>
        <td>HTS</td>
        <td>{data.market_price}</td>
        <td>{data.markup}</td>
        <td>{data.quantity}</td>
        <td>{data.quantity_market_owned}</td>
        <td>{data.quantity_ws_owned}</td>
        <td>{data.unit_cost}</td>
        <td>{data.source_type}</td>
      </tr>
    );
  }
  render() {
    return (
    <div>
      <p>
        Restlet Searchable Data
      </p>
      <div className="col-md-5">
        <input 
          type="text" 
          className="form-control" 
          placeholder="search"
          onChange={this.onInputChange}
        />
      </div>
      <div>
          {
            this.props.loading ?
              <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i> :
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Line Number</th>
                    <th>Item</th>
                    <th>Assortment Item</th>
                    <th>Description</th>
                    <th>Customs Description</th>
                    <th>HTS</th>
                    <th>Market Price</th>
                    <th>Markup</th>
                    <th>Quantity</th>
                    <th>Quantity Market Owned</th>
                    <th>Quantity WS Owned</th>
                    <th>Unit Cost</th>
                    <th>Source Type</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.data.map(this.renderData)}
                </tbody>
              </table>
            }
      </div>
    </div>
    );
  }
}

export default RestletData;
