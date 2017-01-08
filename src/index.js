
import React from 'react';

export default function (init) {
  return function (props, context, updater) {
    const self = Object.create(React.PureComponent.prototype);
    self.props = props;
    self.context = context;
    self.updater = updater; // || ...
    self.state = null;
    // Call the init function on the fresh instance.
    init(self);
    // Add react-15 error handling.
    const originalRender = self.render;
    self.unstable_handleError = function (ex) {
      this.setState({error: ex});
    };
    self.render = function () {
      const state = self.state;
      if (state !== null) {
        const ex = state.error;
        if (ex) {
          return (
            <div className="epic-fail">
              <div>{ex.toString()}</div>
              <pre>{ex.stack}</pre>
            </div>
          );
        }
      }
      return originalRender();
    };
    return self;
  };
};
