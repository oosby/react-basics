# react-basics

## Chapter 1
We'll set up the `<App />` component and two stateless components. The `<App />` component will keep state for the entire app and pass parts of it down to the stateless components as props. We'll also provide a click handler to a stateless component that will trigger a state change in `<App />`.

### Constructor
Components that extend `React.Component` have the option to implement the constructor.

* Do I need to do anything with the constructor?
* What is `super(props)` and do I have to do that?

### State
[docs:](https://reactjs.org/docs/react-component.html#state)

* The state contains data specific to this component that may change over time. The state is user-defined, and it should be a plain JavaScript object.
* If you don’t use it in `render()`, it shouldn’t be in the state. For example, you can put timer IDs directly on the instance.
* Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.

### Props
[docs:](https://reactjs.org/docs/react-component.html#props)

* `this.props` contains the props that were defined by the caller of this component.
* props are **read only**

### Render
Render is a lifecycle method!

* It should return a single child element, null or false.
* The render method should not modify props or state.
* It doesn't interact with the browser DOM.