import React from 'react'
import { isServer } from '../../utils/env';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function withCssComponent(styles) {
  return (WrappedComponent) => {
    class WithCssComponent extends React.Component {
      constructor() {
        super(...arguments);
        if (isServer) {
          this.props.staticContext.css.push(styles._getCss());
        }
      }
      render() {
        return <WrappedComponent {...this.props} />
      }
    }
    WithCssComponent.displayName = `WithCssComponent(${getDisplayName(WrappedComponent)})`;
    return WithCssComponent;
  }
}
