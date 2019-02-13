import React from 'react';

const ContactNameField = (props) => {
  return (
    <label className="form-field">
      <input
        placeholder='... add name'
        type='text'
        value={props.name}
        onChange={props.handleFormNameChange}
      />
    </label>
  );
}

export default ContactNameField;
