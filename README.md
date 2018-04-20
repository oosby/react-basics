# react-basics

## Chapter 7
We'll continue to use `<App />` and explore the `componentDidUpdate` lifecycle method.

### componentDidUpdate
[docs:](https://reactjs.org/docs/react-component.html#componentdidupdate)
`componentDidUpdate()` is invoked immediately after updating occurs

- This is a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed)
- This method is not called for the initial render


## Local setup
- clone the repo
- make sure you're on node 8 and npm 5
- `npm install`
- `npm run start`
- in a second terminal window `npm run dev`