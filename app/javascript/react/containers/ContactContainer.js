import React, { Component }  from 'react'
import ContactNameField from '../components/ContactNameField';
import ContactEmailField from '../components/ContactEmailField';
import ContactBodyField from '../components/ContactBodyField';

class ContactContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      contactName: '',
      contactEmail: '',
      contactBody: ''
    }
    this.handleFormNameChange=this.handleFormNameChange.bind(this)
    this.handleFormEmailChange=this.handleFormEmailChange.bind(this)
    this.handleFormBodyChange=this.handleFormBodyChange.bind(this)
    this.handleFormSubmit=this.handleFormSubmit.bind(this)
    this.handleClearForm=this.handleClearForm.bind(this)
    this.addNewContact=this.addNewContact.bind(this)
  }

  handleFormNameChange(event){
    this.setState({postName: event.target.value})
  }

  handleFormEmailChange(event){
    this.setState({postEmail: event.target.value})
  }

  handleFormBodyChange(event){
    this.setState({postBody: event.target.value})
  }

  addNewContact(formPayload) {
    fetch('/api/v1/contacts',
      {
      credentials: 'same-origin',
      headers: {
       'Content-Type': 'application/json',
       'X-Requested-With': 'XMLHttpRequest'
      },
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({posts: this.state.contacts.concat(body)})
    })
  }

  handleFormSubmit(event){
    event.preventDefault()
    let formPayload = {
      name: this.state.contactName,
      email: this.state.contactEmail,
      body: this.state.contactBody
    }
    this.addNewContact(formPayload)
    this.handleClearForm()
  }

  handleClearForm(){
    this.setState({
      contactName: '',
      contactEmail: '',
      contactBody: ''
    })
  }

  render(){
    return(
      <div>
        <p>Contact</p>
        <div className="form-border">
          <ContactNameField
            title={this.state.contactName}
            handleFormNameChange={this.handleFormNameChange}
          />
        <ContactEmailField
            content={this.state.contactEmail}
            label="Enter your email"
            handleFormEmailChange={this.handleFormEmailChange}
          />
        <ContactBodyField
            content={this.state.contactBody}
            label="What say you?"
            handleFormBodyChange={this.handleFormBodyChange}
          />
        </div>
        <div>
          <button className="button-sml" type="submit" value="Submit" onClick={this.handleFormSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default ContactContainer
