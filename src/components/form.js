import React, { Component, isValidElement, cloneElement } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);

    // this seems a little wonky but we're collecting
    // the value props from all our children and using
    // them to hydrate Form's state
    const formValues = {};
    this.props.children.forEach(({ props }) => {
      formValues[props.prop] = props.value;
    });
    this.state = { ...formValues, errs: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(validation, prop, val) {
    const { isValid, err } = validation ? validation(val) : { isValid: true, err: null };
    const updatedErr = (isValid) ? null : err;

    this.setState({
      ...this.state,
      [prop]: val,
      errs: { ...this.state.errs, [prop]: updatedErr }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const result = Object.assign({}, this.state);
    delete result.errs;
    this.props.onSubmit(result);
  }

  render() {
    const state = this.state;
    const { errs } = state;

    // loop through this.state.errs and if any of them have a value besides
    // null return true to stop looping
    const disabled = Object.entries(errs).some(([key, val]) => val !== null);

   return (
      <form onSubmit={this.handleSubmit}>
        <button disabled={disabled} onClick={this.handleSubmit}>Save</button>
        {this.props.children.map(child => {
          // check to make sure the child is a react element and has
          // a prop called "prop"
          if (isValidElement(child) && state[child.props.prop]) {
            // we copy the original element, add 2 new props and update value
            return cloneElement(child, {
              onChange: this.handleChange,
              err: state.errs[child.props.prop],
              value: state[child.props.prop],
            })
          } else {
            // not a react element we wanna play with so just return it
            return child;
          }
        })}
      </form>
    );
  }
}

Form.displayName = 'Form';

Form.propTypes = {

};

Form.defaultProps = {

}

export default Form;
