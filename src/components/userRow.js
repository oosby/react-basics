import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserRow extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // move this logic from componentWillReceiveProps to here
    if (this.props.active && !prevProps.active) {
      this.setState({ counter: prevState.counter + 1 });
    }
  }

  handleClick(e) {
    this.props.onClick(this.props.userId);
  }

  render(){
    const { active, company, email, name, website } = this.props;
    const { counter } = this.state;
    const classnames = active ? 'active row' : 'row';

    console.log('%cRendering:', 'color:pink', 'this.props.active: ', this.props.active);

    return (
      <div className={classnames} onClick={this.handleClick}>
        <div>{name}</div>
        <div>{email}</div>
        <div>{company}</div>
        <div>{website}</div>
        <div>{counter}</div>
      </div>
    );
  }
}

UserRow.displayName = 'UserRow';

UserRow.defaultProps = {
  active: false
};

UserRow.propTypes = {
  active: PropTypes.bool,
  company: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  website: PropTypes.string,
};

export default UserRow;
