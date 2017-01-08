import React from 'react';
import style from './Overview.less';
import DoughnutGraph from '../../graphs/DoughnutGraph/DoughnutGraph';
import axios from 'axios';

class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {statArray: [0,0,0,0]}
  }
  componentDidMount() {
    axios.get('http://localhost:8000/getStats/')
        .then((response)=>{
          if(response.status===200){
            return response.data;
          } else {
            throw new Error("Server response wasn't ok");
          }
        })
      .then((responseData)=>{
        var stats = ["bis", "nom", "km", "biv", "abs", "ex1", "cacs", "sc", "cagcib", "gic", "ic", "ch"]
        var fixedObject = {};
        _.forEach(responseData, function(data, index){
          fixedObject[stats[index]] = data[stats[index]]
        })
        this.setState({statArray: fixedObject});
      })
  }

  render() {
    return(
      <div className="col-md-12">
        <div className="well clearfix">
          <div className="page-header">
            <h1>Overview of data <small></small></h1>
              <div className="col-md-12">
                <DoughnutGraph data={this.state.statArray}/>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Overview
