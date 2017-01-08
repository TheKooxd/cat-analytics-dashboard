import React from 'react';
import axios from 'axios';
import { PageHeader } from 'react-bootstrap';
import _ from 'lodash';
import {Table, Column, Cell} from 'fixed-data-table';
import ShowTable from '../../tables/ShowTable';
import DoughnutGraph from '../../graphs/DoughnutGraph/DoughnutGraph';
import LineChart from '../../graphs/LineChart/LineChart';

export default class CatInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {table: [], tags: '', tagCount: {bis: 0, nom: 0, sc: 0, km: 0, biv: 0, abs: 0, ex1: 0}, placeCache: {}, yearCache: {}};
    axios.get('http://localhost:8000/getCat/' + this.props.params.name)
  }

  componentWillMount(nextProps) {
    axios.get('http://localhost:8000/getCat/' + this.props.params.name)
        .then((response)=>{
          if(response.status===200){
            return response.data
          } else {
            throw new Error("Server response wasn't ok");
          }
        })
      .then((responseData)=>{
        var places = {};
        var years = {};
        for (var key in responseData) {
          responseData[key] = JSON.parse(responseData[key]);
          if(responseData[key].bis) {
            this.state.tagCount.bis++
          }
          if(responseData[key].sc) {
            this.state.tagCount.sc++
          }
          if(responseData[key].nom) {
            this.state.tagCount.nom++
          }
          if(responseData[key].km) {
            this.state.tagCount.km++
          }
          if(responseData[key].biv) {
            this.state.tagCount.biv++
          }
          if(responseData[key].abs) {
            this.state.tagCount.abs++
          }
          if(responseData[key].ex1) {
            this.state.tagCount.ex1++
          }
          if(places[responseData[key].place] == undefined) {
            places[responseData[key].place] = 1;
          }
          else {
          places[responseData[key].place]++;
          }
          if(years[responseData[key].time.substr(responseData[key].time.length - 4)] == undefined) {
            years[responseData[key].time.substr(responseData[key].time.length - 4)] = 1
          }
          else {
            years[responseData[key].time.substr(responseData[key].time.length - 4)]++;
          }
          responseData[key] = Object.values(responseData[key]);
          responseData[key] = responseData[key].slice(0,5);
        }
        responseData = _.sortBy(responseData, [function(o) { return new Date(o.time).getTime; }])
        responseData = Object.values(responseData);
        this.setState({table: responseData, tags: " "+responseData[0][4], placeCache: places, yearCache: years})
      })
  }

  componentWillReceiveProps(nextProps) {
    axios.get('http://localhost:8000/getCat/' + nextProps.params.name)
        .then((response)=>{
          if(response.status===200){
            return response.data
          } else {
            throw new Error("Server response wasn't ok");
          }
        })
      .then((responseData)=>{
        var places = {};
        var years = {};
        for (var key in responseData) {
          responseData[key] = JSON.parse(responseData[key]);

            if(responseData[key].bis) {
              this.state.tagCount.bis++
            }
            if(responseData[key].sc) {
              this.state.tagCount.sc++
            }
            if(responseData[key].nom) {
              this.state.tagCount.nom++
            }
            if(responseData[key].km) {
              this.state.tagCount.km++
            }
            if(responseData[key].biv) {
              this.state.tagCount.biv++
            }
            if(responseData[key].abs) {
              this.state.tagCount.abs++
            }
            if(responseData[key].ex1) {
              this.state.tagCount.ex1++
            }
            if(places[responseData[key].place] == undefined) {
              places[responseData[key].place] = 1;
            }
            else {
            places[responseData[key].place]++;
            }
            if(years[responseData[key].time.substr(responseData[key].time.length - 4)] == undefined) {
              years[responseData[key].time.substr(responseData[key].time.length - 4)] = 1
            }
            else {
              years[responseData[key].time.substr(responseData[key].time.length - 4)]++;
            }

          responseData[key] = Object.values(responseData[key]);
          responseData[key] = responseData[key].slice(0,5);
        }
        responseData = _.sortBy(responseData, [function(o) { return new Date(o.time).getTime; }])
        responseData = Object.values(responseData);
        this.setState({table: responseData, tags: " "+responseData[0][4], placeCache: places, yearCache: years})
      })
  }

  render() {
    return(
      <div className="col-md-12">
        <PageHeader>{"Info for " + this.props.params.name}</PageHeader>
        <div className="col-md-6">
          <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Distribution between diffrent show-results</h3>
          </div>
            <div className="panel-body">
              <DoughnutGraph data={this.state.tagCount} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Distribution of places where cat has been showing</h3>
          </div>
            <div className="panel-body">
              <DoughnutGraph data={this.state.placeCache} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Apperance of cat during years</h3>
          </div>
            <div className="panel-body">
            <LineChart data={this.state.yearCache}/>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Cats perfomace</h3>
          </div>
            <div className="panel-body">
            <LineChart data={this.state.yearCache}/>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <ShowTable table={this.state.table} />
        </div>
      </div>
    )
  }
}
