import React from 'react'
import { isServer } from '../../utils/env';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function withStyle(styles) {
  return (WrappedComponent) => {
    class WithStyleComponent extends React.Component {
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
    WithStyleComponent.displayName = `WithStyleComponent(${getDisplayName(WrappedComponent)})`;
    return WithStyleComponent;
  }
}
