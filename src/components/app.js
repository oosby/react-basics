import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserRow from './userRow';
import UserDetail from './userDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.handleUserClick = this.handleUserClick.bind(this);
    console.log('%cConstructor:', 'color:lime', this.state);
  }

  componentDidMount() {
    console.log('%cCDM:', 'color:hotpink', this.state);
    // to remove the slow timeout, change the url to http://localhost:4444/api/users
    fetch('http://localhost:4444/api/users-slow')
    .then(resp => resp.json())
    .then(json => {
      console.log('%cAsync Users:', 'color:orange', json);
      this.setState({ users: json });
    });
  }

  handleUserClick(userId) {
    this.setState({ currentUser: this.state.users.find(u => u.id === userId) });
  }

  render() {
    const { currentUser, users } = this.state;
    console.log('%cRender:', 'color:aqua', this.state);

    if (!users.length) {
      return <div>loading users...</div>
    }

    return (<div>
      {users.map(user => {
        return (<UserRow
          key={`user${user.id}`}
          company={user.companyName}
          email={user.email}
          name={user.name}
          website={user.website}
          onClick={this.handleUserClick}
          userId={user.id}
        />);
        })
      }
      {currentUser &&
        <UserDetail user={currentUser} />
      }
    </div>);
  }
}

App.displayName = 'App';

export default App;
