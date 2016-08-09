
import React, { Component } from 'react';
import QuantityCell from './QuantityCell';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// I only made this a class b/c i think it couldn't be a functional component 
// if it had two functions inside?
class RestletData extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onTitleClick = this.onTitleClick.bind(this);
    this.handleQuantityCellClick = this.handleQuantityCellClick.bind(this);
  }
  onInputChange(event) {
    event.preventDefault();
    this.props.dispatch(this.props.handleSearch(event.target.value));
  }
  onTitleClick(e) {
    e.preventDefault();
    this.props.dispatch(this.props.handleTitleClick());
  }
  handleQuantityCellClick(id) {
    console.log('id', id);
    this.props.dispatch(this.props.handleQuantityCellClick(id));
  }
  renderData(data, i) {
    if (i > 10) {
      return;
    }
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
        <QuantityCell id={i} quantity={data.quantity} onQuantityCellClick={this.handleQuantityCellClick} selectedCell={this.props.selectedCell} />
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
        {!this.props.titleClicked ? 
          <p onClick={this.onTitleClick}>
          Restlet Searchable Data
          </p> 
          : 
          <form onSubmit={this.onTitleClick}>
            <input placeholder="asdfasdf"></input>
          </form>}

        <div className="col-md-5">
          <input 
            onChange={this.onInputChange}
            type="text" 
            className="form-control" 
            placeholder="search"
          />
        </div>
        <div>
            {
              this.props.loading ?
                <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i> :

                <BootstrapTable data={this.props.data} pagination={true}>
                  <TableHeaderColumn dataField="line_number" isKey={true}>Line Number</TableHeaderColumn>
                  <TableHeaderColumn dataField="quantity">Quantity</TableHeaderColumn>
                  <TableHeaderColumn dataField="customs_description">Customs Description</TableHeaderColumn>
                  <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
                  <TableHeaderColumn dataField="hts">HTS</TableHeaderColumn>
                  <TableHeaderColumn dataField="item">Item</TableHeaderColumn>
                  <TableHeaderColumn dataField="market_price">Market Price</TableHeaderColumn>
                  <TableHeaderColumn dataField="markup">Markup</TableHeaderColumn>
                  <TableHeaderColumn dataField="purchase_order">Purchase Order</TableHeaderColumn>
                  <TableHeaderColumn dataField="assortment_item">Assortment Item</TableHeaderColumn>
                  <TableHeaderColumn dataField="quantity_market_owned">Quantity Market Owned</TableHeaderColumn>
                  <TableHeaderColumn dataField="source_type">Source Type</TableHeaderColumn>
                  <TableHeaderColumn dataField="unit_cost">Unit Cost</TableHeaderColumn>
                </BootstrapTable>

                /* <table className="table table-hover">
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
                    {this.props.data.map(this.renderData.bind(this))}
                  </tbody>
                </table> */
              }
        </div>
      </div>
    );
  }
}



export default RestletData;
