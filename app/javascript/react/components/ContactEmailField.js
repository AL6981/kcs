import React from 'react';

const ContactEmailField = (props) => {
  return (
    <label className="form-field">
      <input
        placeholder='... add email'
        type='text'
        value={props.email}
        onChange={props.handleFormEmailChange}
      />
    </label>
  );
}

export default ContactEmailField;
