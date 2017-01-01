import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';

class Layout extends React.Component {
  render() {
    return (
      <div>
      <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Layout
