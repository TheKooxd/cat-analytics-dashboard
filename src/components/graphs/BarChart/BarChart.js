import React from 'react';
import {Bar} from 'react-chartjs';

export default class Placeholder extends React.Component {
  render() {
    let propData = this.props.data;
    let chartData = {
      labels: ["Best In Show", "Nominated", "Kunniamaininta", "Värin Paras", "Poissaolo", "Excellent-arvostely", "Supreme Champion", "sc", " Grand Champion", "Grand International Champion", "International Champion", "Champion"],
          datasets: [
              {
                label: ["Data hit distibrution"],
                  data: [propData[0],
                         propData[1],
                         propData[2],
                         propData[3],
                         propData[4],
                         propData[5],
                         propData[6],
                         propData[7],
                         propData[8],
                         propData[9],
                         propData[10],
                         propData[11]
                        ],
                        backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(255, 255, 0, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(154, 25, 164, 0.2)',
                      'rgba(145, 151, 50, 0.2)',
                      'rgba(20, 155, 255, 0.2)',
                      'rgba(24, 179, 120, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1,
              }]
      };

    let options = {
      responsive: true,
      fill: false
    }
    return(
        <div>
        <Bar data={chartData} options={options} width="400" height="150"/>
        </div>
    )
  }
}
