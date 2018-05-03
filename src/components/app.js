import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserRow from './userRow';
import UserDetail from './userDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], currentUser: {} };
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleUserUpdates = this.handleUserUpdates.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:4444/api/users')
    .then(resp => resp.json())
    .then(json => {
      this.setState({ users: json });
    });
  }

  handleUserClick(userId) {
    this.setState({ currentUser: this.state.users.find(u => u.id === userId) });
  }

  handleUserUpdates(user) {
    // let's stay immutable!
    const updatedUsers = this.state.users.concat();
    const userIdx = updatedUsers.findIndex(u => u.id === user.id);
    updatedUsers[userIdx] = user;

    this.setState({ users: updatedUsers });
  }

  render() {
    const { currentUser, users } = this.state;

    if (!users.length) {
      return <div>loading users...</div>
    }

    return (<div>
      <div className="row">
        <div>Name</div>
        <div>Email</div>
        <div>Company</div>
        <div>Website</div>
        <div>Card Views</div>
      </div>
      {users.map(user => {
        return (<UserRow
          active={user.id === currentUser.id}
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
      {currentUser.id &&
        <UserDetail handleChanges={this.handleUserUpdates} {...currentUser} />
      }
    </div>);
  }
}

App.displayName = 'App';

export default App;
