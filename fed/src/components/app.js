import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserRow from './userRow';
import UserDetail from './userDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], currentUser: {} };
    this.handleUserClick = this.handleUserClick.bind(this);
  }

  componentWillMount() {
    this.setState({ foo: 'bar' });
  }

  componentDidMount() {
    this.setState({ foo: 'baz' });

    // fetch(`http://${USERS_API}/api/users`)
    // .then(resp => resp.json())
    // .then(json => {
    //   this.setState({ users: json });
    // });
    this.setState({ users: window.users });
  }

  handleUserClick(userId) {
    this.setState({ currentUser: this.state.users.find(u => u.id === userId) });
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
        <UserDetail user={currentUser} />
      }
    </div>);
  }
}

App.displayName = 'App';

export default App;
