import React from 'react';
import * as PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';

export default function (factory, getInitialState) {
  return function (props, context) {
    const self = {
      ...React.Component.prototype,
      ...PureRenderMixin,
      props,
      context
    };
    if (getInitialState !== undefined)
      self.state = getInitialState(self);
    factory(self);
    // Wrap an exception handler around the render function.
    const originalRender = self.render;
    self.render = function () {
      try {
        return originalRender();
      } catch (ex) {
        return (
          <div className="epic-fail">
            <div>{ex.toString()}</div>
            <pre>{ex.stack}</pre>
          </div>
        );
      }
    };
    return self;
  };
};
