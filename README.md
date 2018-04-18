# react-basics

## Chapter 6
We'll continue to use `<App />` and explore the now-deprecated `UNSAFE_componentWillUpdate` lifecycle method.

### UNSAFE_componentWillUpdate
[docs:](https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate)
`UNSAFE_componentWillUpdate()` is invoked just before rendering when new props or state are being received. Like `componentWillMount`, this isn't that useful and you may not see it used as frequently as `componentWillReceiveProps`

- Don't set state or dispatch redux actions here. we don't want to trigger a component update before this method finishes
- This method is not called for the initial render


## Local setup
- clone the repo
- make sure you're on node 8 and npm 5
- `npm install`
- `npm run start`
- in a second terminal window `npm run dev`