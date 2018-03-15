import React from 'react';
import PropTypes from 'prop-types';

const UserDetail = props => {
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
      <div>{street} {suite}</div>
      <div>{city}, {zipcode}</div>
    </address>
  </div>);
}

UserDetail.defaultProps = {

};

UserDetail.propTypes = {
  user: PropTypes.object,
}

export default UserDetail;
