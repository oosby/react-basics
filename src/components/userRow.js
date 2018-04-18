import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserRow extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('%cAbout to get new props:', 'color:gold', 'this.props.active: ', this.props.active, ' nextProps.active: ', nextProps.active);

    if (!this.props.active && nextProps.active) {
      console.log('%cI got picked!:', 'color:orange', nextProps.name);
      this.setState({ counter: this.state.counter + 1 });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cshould i update? %o', 'color:aqua', (nextProps.active !== this.props.active));

    return nextProps.active !== this.props.active;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('%cI updated!:', 'color:magenta', 'this.props.active: ', this.props.active, ' nextProps.active: ', nextProps.active);
  }

  handleClick(e) {
    this.props.onClick(this.props.userId);
  }

  render(){
    const { active, company, email, name, website } = this.props;
    const { counter } = this.state;
    const classnames = active ? 'active row' : 'row';

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
