import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const { type, value } = this.props;

    return (
      <button type={type}>{value}</button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'text',
};

export default Button;
