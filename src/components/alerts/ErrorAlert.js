import React from 'react';
import {Alert, Button} from 'react-bootstrap';

export default class ErrorAlert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {alertVisible: true};
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    this.handleAlertShow = this.handleAlertShow.bind(this);
  }

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle={this.props.type} onDismiss={this.handleAlertDismiss}>
          <p><strong>{this.props.header}</strong> {this.props.content}</p>
        </Alert>
      );
    }
      return (
        <div></div>
      )
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
}

ErrorAlert.propTypes = {
  type: React.PropTypes.string.isRequired,
  header: React.PropTypes.string.isRequired,
  content: React.PropTypes.string
};
