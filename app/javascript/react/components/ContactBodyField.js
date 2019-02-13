import React from 'react';

const ContactBodyField = (props) => {
  return (
    <label className="form-field">
      <input
        placeholder='... add body'
        type='text'
        value={props.body}
        onChange={props.handleFormBodyChange}
      />
    </label>
  );
}

export default ContactBodyField;
