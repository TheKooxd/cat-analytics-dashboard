import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header/Header';

import style from './Layout.less';

class Layout extends React.Component {
  render() {
    return (
       <div className="container">
          <Header/>
          {this.props.children}
        </div>
    );
  }
}

export default Layout
