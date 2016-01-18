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
    return self;
  };
};
