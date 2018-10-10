# react-context-consume

> A handy way to consume values from React's createContext API

# Install

```bash
yarn add react-context-consume
```

# Usage

```jsx
import * as React from "react";
import { createConsume } from "react-context-consume";

let Context = React.createContext("value");

let consume = createConsume(Context);

let Comp = consume((props, value, ref) => {
  return value;
});

render(<Comp />); // will render "value"
```

# License

MIT
