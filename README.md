
# Usage

```js
    import React from 'react';
    import EpicComponent from 'epic-component';
    
    export default EpicComponent(self => {

      // Define handlers as local functions.
      const onClick = function () {
        console.log('click');
      };

      // Set the initial state here.
      self.state = {};

      // Attach the react render and lifecycle methods on self.
      self.render = function () {
        return (
          <p onClick={onClick}>Hello, world!</p>
        );
      };

    });
    
```
