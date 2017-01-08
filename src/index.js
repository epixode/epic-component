import React from 'react';

export default function (factory) {
  return function (props, context) {
    const self = {
      ...React.PureComponent.prototype,
      props,
      context
    };
    factory(self);
    // react 15 error handling
    const originalRender = self.render;
    self.unstable_handleError = function (ex) {
      this.setState({error: ex});
    };
    self.render = function () {
      const ex = self.state.error;
      if (ex) {
        return (
          <div className="epic-fail">
            <div>{ex.toString()}</div>
            <pre>{ex.stack}</pre>
          </div>
        );
      }
      return originalRender();
    };
    return self;
  };
};
