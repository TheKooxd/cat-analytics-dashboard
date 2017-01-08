import React from 'react';
import {Pie} from 'react-chartjs';
import _ from 'lodash';

export default class DonughtGraph extends React.Component {
  render() {
    var sortable = [];
    var labels = [];
      for (var label in this.props.data)
          sortable.push([label, this.props.data[label]])

      sortable.sort(function(a, b) {
          return a[1] - b[1]
      })
    _.forEach(sortable, function(set) {
      labels.push(set[0]);
    });
    var chartData = {
    labels: labels,
    datasets: [
        {
            data: _.sortBy(this.props.data),
            backgroundColor: [
                "#ff2e00",
                "#ff7f00",
                "#ffbf00",
                "#fff200",
                "#d4ff00",
                "#bbff00",
                "#5dff00",
                "#ff2e00",
                "#ff7f00",
                "#ffbf00",
                "#fff200",
                "#d4ff00",
                "#bbff00",
                "#5dff00",
                "#ff2e00",
                "#ff7f00",
                "#ffbf00",
                "#fff200",
                "#d4ff00",
                "#bbff00",
                "#5dff00"
            ]
        }]
};

    let options = {
      responsive: true,
      fill: false
    }
    return(
        <div>
        <Pie data={chartData} options={options} width="400" height="150"/>
        </div>
    )
  }
}
