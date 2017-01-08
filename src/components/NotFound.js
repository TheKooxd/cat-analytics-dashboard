import React from 'react';
import ReactDOM from 'react-dom';
import RandomCat from './RandomCat';

export default class NotFound extends React.Component {

  constructor(props) {
    super(props);
    this.state = {image: ""};
  }

  render() {
    return (
      <div>
        <RandomCat />
      </div>
    )
  }
}
