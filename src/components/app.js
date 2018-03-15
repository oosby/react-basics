import React, { Component } from 'react';
import PropTypes from 'prop-types';
import users from '../mocks/users';
import UserRow from './userRow';
import UserDetail from './userDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users };
    this.handleUserClick = this.handleUserClick.bind(this);
  }

  handleUserClick(userId) {
    this.setState({ currentUser: this.state.users.find(u => u.id === userId) });
  }

  render() {
    const { currentUser, users } = this.state;

    return <div>
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
    </div>;
  }
}

App.displayName = 'App';

export default App;
