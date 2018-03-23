# react-basics

## Chapter 3
We'll continue with `<App />` and explore the `componentDidMount` lifecycle method. The users have been moved to the server side and we'll run a local express server so we can fetch them asynchronously.

### componentDidMount
[docs:](https://reactjs.org/docs/react-component.html#componentdidmount)
`componentDidMount()` is invoked immediately after a component is mounted.

- Fetch data in this method
- The DOM is available at this point
- server side components are not mounted



## Local setup
- clone the repo
- make sure you're on node 8 and npm 5
- `npm install`
- `npm run start`
- in a second terminal window `npm run dev`