import React, { Component } from 'react';
import reactDOM from 'react-dom';
import users from './mocks/users';
import UserRow from './components/userRow';
import UserDetail from './components/userDetail';

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

    return <main className="users-container">
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
    </main>;
  }
}

reactDOM.render(<App />, document.getElementById('app-root'))
