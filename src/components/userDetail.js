import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import Form from './form';

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      id: this.props.id,
      name: this.props.name,
      email: this.props.email,
      streetAddress: this.props.streetAddress,
      suite: this.props.suite,
      city: this.props.city,
      zipcode: this.props.zipcode,
      phone: this.props.phone,
      website: this.props.website,
      companyName: this.props.companyName,
      catchPhrase: this.props.catchPhrase,
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  toggleEditing() {
    this.setState({ editing: !this.state.editing });
  }

  validateZip(zip) {
    const isValid = zip.length === 10 && /([0-9]){5}-([0-9]){4}/.test(zip);
    const err = 'Zip code must in the format xxxxx-xxxx';

    return { isValid, err };
  }

  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }

  saveChanges(updatedUser) {
    // updateUser has only values we created Inputs for in the form
    // since id was not an input, we'll add it here before calling
    // our save callback
    updatedUser.id = this.state.id;
    this.props.handleChanges(updatedUser);

    // hide the form
    this.setState({ editing: false });
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
      editing,
    } = this.state;

    // notice how none of the Inputs have an onChange method
    // we'll use children in Form to handle it
    return (<div className="card">
      {editing
        ? <Form onSubmit={this.saveChanges} onChange={this.handleChange}>
            <Input label="Name" value={name} prop="name" />
            <Input label="Email" value={email} prop="email" />
            <Input label="Phone" value={phone} prop="phone" />
            <Input label="Company Name" value={companyName} prop="companyName" />
            <Input label="Catch Phrase" value={catchPhrase} prop="catchPhrase" />
            <Input label="Street address" value={streetAddress} prop="streetAddress" />
            <Input label="Suite" value={suite} prop="suite" />
            <Input label="City" value={city} prop="city" />
            <Input label="Zip" value={zipcode} validation={this.validateZip} prop="zipcode" />
          </Form>
        : 
        <div>
          <button type="text" onClick={this.toggleEditing}>Edit</button>
          <h2>{name}</h2>
          <span>{email} | {phone}</span>
          <h3>{companyName}<span>{catchPhrase}</span></h3>
          <address className="address">
            <div>{streetAddress} {suite}</div>
            <div>{city}, {zipcode}</div>
          </address>
        </div>
      }
      
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
