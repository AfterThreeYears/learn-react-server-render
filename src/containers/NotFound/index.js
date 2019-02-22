import React from 'react';

export default class NotFound extends React.PureComponent {
  render() {
    if (this.props.staticContext) {
      this.props.staticContext.notFound = true;
    }
    return <h1>404 NotFound</h1>;
  }
}
