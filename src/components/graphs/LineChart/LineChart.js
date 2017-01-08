import React from 'react';
import {Line} from 'react-chartjs';
import _ from 'lodash';

export default class DonughtGraph extends React.Component {
  render() {
      console.log(this.props)
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
    labels: _.sortBy(labels.reverse()),
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: _.values(this.props.data),
            spanGaps: false,
        }
    ]
};

    let options = {
      responsive: true,
      fill: false
    }
    return(
        <div>
        <Line data={chartData} options={options} width="400" height="150"/>
        </div>
    )
  }
}
