
# Description

A simpler alternative writing style for React components:

* because ES6 classes are not awesome (https://github.com/joshburgess/not-awesome-es6-classes)
* because `React.createClass` adds pain with `this` and `bind` (https://facebook.github.io/react/docs/react-without-es6.html)

# Usage

`EpicComponent(init)` returns a React component that applies `init` to
each element it creates.

Passing the element to `init` gives local functions defined in `init`
painless access to the element.

The `init` function must set the `render` function on the element and
may set the initial state.

`init` may also set any of the React lifecycle method: `componentWillMount`,
`componentDidMount`, `componentWillReceiveProps`, `componentWillUpdate`,
`componentDidUpdate`, `componentWillUnmount`.

PureComponent provides the default implementation of `shouldComponentUpdate`.
The component may replace this implementation if necessary.


```js
    import React from 'react';
    import EpicComponent from 'epic-component';
    
    export default EpicComponent(self => {

      // Set the initial state here.
      self.state = {value: 0};

      // Define callbacks as local functions capturing `self`.
      function onClick (event) {
        const newValue = self.state.value + 1;
        self.setState({value: newValue});
      };

      // Set the react render function.
      self.render = function () {
        // Refer to props as self.props.
        const className = self.props.className;
        const value = self.state.value;
        return (
          <p className={className} onClick={onClick}>Clicked {value} times</p>
        );
      };

    });
    
```
