# react-basics

## Chapter 5
We'll continue to use `<App />` and explore the `shouldComponentUpdate` lifecycle method.

### shouldComponentUpdate
[docs:](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
`shouldComponentUpdate()` is invoked before rendering when new props or state are being received.

- Defaults to true
- Returning false does not prevent child components from re-rendering when their state changes
- Note that in the future React may treat this method return value as a "hint" and re-render anyway
- React docs do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate(). It is very inefficient and will harm performance.


## Local setup
- clone the repo
- make sure you're on node 8 and npm 5
- `npm install`
- `npm run start`
- in a second terminal window `npm run dev`