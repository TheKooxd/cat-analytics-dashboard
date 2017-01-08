import React from 'react';
import { PageHeader } from 'react-bootstrap';

export default class ShowTable extends React.Component{
  render() {
    return(
      <div>
      <PageHeader><small>Show table</small></PageHeader>
      <table className="table table-hover">
      <thead>
      <tr>
      <th>Time</th>
      <th>Place</th>
      <th>Class</th>
      <th>Name</th>
      <th>Tags</th>
      </tr>
      </thead>
      <tbody>
      {this.props.table.map(function(row) {
        return (
          <tr>
          {row.map(function(col, j) {
            return <td>{col}</td>;
          })}
          </tr>
        );
      })}
      </tbody>
      </table>
      </div>
    )
  }
}
