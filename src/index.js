// @flow
import * as React from "react";

export let createConsume = <Value>(Context: React$Context<Value>) => {
  let Consumer = Context.Consumer;
  return <Props>(
    render: (props: Props, value: Value, ref: React.Ref<*>) => React.Node
  ): React.ComponentType<Props> => {
    // $FlowFixMe
    return React.forwardRef((props, ref) => {
      return <Consumer>{value => render(props, value, ref)}</Consumer>;
    });
  };
};
