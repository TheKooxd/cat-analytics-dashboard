import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header/Header';
import { StickyContainer } from 'react-sticky';

import style from './Layout.less';

class Layout extends React.Component {
  render() {
    return (
      <StickyContainer>
       <div className="container">
          <Header/>
          {this.props.children}
        </div>
      </StickyContainer>
    );
  }
}

export default Layout
