import React from 'react';
import PropTypes from 'prop-types';

const UserRow = props => {
  const { company, email, name, website, onClick, userId } = props;

  function handleClick(e) {
    onClick(userId);
  }

  return (
    <div className="row" onClick={handleClick}>
      <div>{name}</div>
      <div>{email}</div>
      <div>{company}</div>
      <div>{website}</div>
    </div>
  );
}

UserRow.displayName = 'UserRow';

UserRow.propTypes = {
  company: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  website: PropTypes.string,
};

export default UserRow;
