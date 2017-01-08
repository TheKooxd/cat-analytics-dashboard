import React from 'react';
import ReactDOM from 'react-dom';
import ReactDatalist from 'react-datalist';
import { Link } from 'react-router'
import axios from 'axios';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import ErrorAlert from '../../alerts/ErrorAlert';

import style from './Header.less';

export default class Header extends React.Component {

  constructor(props) {
   super(props);
   this.state = {value: '', suggestions: []};

   this.doSearch = this.doSearch.bind(this);
 }

  doSearch(event) {
    this.setState({value: event.target.value});
    axios.get('http://localhost:8000/searchCat/' + event.target.value)
        .then((response)=>{
          if(response.status===200){
            return response.data.split(",")
          } else {
            throw new Error("Server response wasn't ok");
          }
        })
      .then((responseData)=>{
        if(this.LatestSuggestion != responseData.length) {
        this.setState({suggestions: responseData.slice(0, 100)})
        this.setState({LatestSuggestion: responseData.length})
        }
      })
  }

  render() {
    return (
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={`/`}>cat-analytics-dashboard</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Cat Search</NavItem>
          <NavItem eventKey={2} href="#">Leaderboards</NavItem>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" list="suggestions" options={this.state.suggestions} placeholder="Search" value={this.state.value} onChange={this.doSearch.bind(this)} />
                <ReactDatalist list="suggestions" options={this.state.suggestions} className="hidden" />
              </FormGroup>
              {' '}
              <Link to={`/cat-info/${this.state.value}`}><Button type="submit" bsStyle="primary">Submit</Button></Link>
            </Navbar.Form>
          <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Report wrong data</MenuItem>
            <MenuItem eventKey={3.2}>Leave feedback</MenuItem>
            <li role="separator" className="divider" />
            <MenuItem eventKey={3.3}><Link to={`/about`}>About</Link></MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      <ErrorAlert type="info" header="Early development notice" content="This is app is in early development and there might be lack of data and odd UI choises. If you know something about coding, take a look at my github. You can also email me to nikolas.kohvakka@gmail.com"/>
      </div>
  )
  }
}
