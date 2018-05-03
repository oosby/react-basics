# react-basics

## Chapter 8
We're going to take a break from Component and look at children. UserDetail will get expanded to include a form that handles editing a contact. In addition to `children` we'll also use `isValidElement` and `cloneElement`.

### componentDidUpdate
[Children:](https://reactjs.org/docs/react-api.html#reactchildren)
[isValidElement:](https://reactjs.org/docs/react-api.html#isvalidelement)
[cloneElement:](https://reactjs.org/docs/react-api.html#cloneelement)


- Children are useful for keeping your components reusable and composable
- Children have their own methods for looping and examining
- `isValidElement` returns a boolean telling us if the object passed to it is a react element
- `cloneElement` lets us clone a react element and add/edit its props


## Local setup
- clone the repo
- make sure you're on node 8 and npm 5
- `npm install`
- `npm run start`
- in a second terminal window `npm run dev`