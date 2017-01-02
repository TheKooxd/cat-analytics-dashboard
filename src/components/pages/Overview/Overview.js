import React from 'react';
import style from './Overview.less';
import BarChart from '../../graphs/BarChart/BarChart';
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
            return response.data.split(",")
          } else {
            throw new Error("Server response wasn't ok");
          }
        })
      .then((responseData)=>{
        this.setState({statArray:responseData});
      })
  }

  render() {
    return(
      <div className="col-md-12">
        <div className="well clearfix">
          <div className="page-header">
            <h1>Overview of data <small></small></h1>
              <div className="col-md-12">
                <BarChart data={this.state.statArray}/>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Overview
