import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('%cprops:', 'color:hotpink', nextProps);
    console.log('%cstate:', 'color:orange', prevState);

    if (nextProps.active) {
      return { counter: prevState.counter + 1 };
    }
    
  }

  render() {
    const {
      id,
      name,
      email,
      streetAddress,
      suite,
      city,
      zipcode,
      phone,
      website,
      companyName,
      catchPhrase,
    } = props.user;

    return (<div className="card">
      <h2>{name}</h2>
      <span>{email} | {phone}</span>
      <h3>{companyName}<span>{catchPhrase}</span></h3>
      
      <address className="address">
        <div>{streetAddress} {suite}</div>
        <div>{city}, {zipcode}</div>
      </address>
    </div>);
  }
}

UserDetail.displayName = 'UserDetail';

UserDetail.defaultProps = {

};

UserDetail.propTypes = {
  user: PropTypes.object,
}

export default UserDetail;
