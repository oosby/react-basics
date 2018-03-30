# react-basics

## Chapter 4
We completed the mounting methods, now we'll move on to the updating methods.
We'll continue to use `<App />` and explore the `componentWillReceiveProps` lifecycle method.

### componentWillReceiveProps/UNSAFE_componentWillReceiveProps
[docs:](https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops)
`componentDidMount()` is invoked immediately after a component is mounted.

- This lifecycle was previously named componentWillReceiveProps. That name will continue to work until version 17
- invoked before a mounted component receives new props
- if a parent component causes your component to re-render, this method will be called even if props have not changed
- compare the current and next values if you only want to handle changes


## Local setup
- clone the repo
- make sure you're on node 8 and npm 5
- `npm install`
- `npm run start`
- in a second terminal window `npm run dev`