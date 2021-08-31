import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
  render () {
    return (
      <>
        <div className='list-contacts'>
          <div className='list-contacts-top'>
            <input
              className='search-contacts'
              type='text'
              placeholder='Search Contacts'
              value=''
            />
          </div>
        </div>
        <ol className='contact-list'>
          {this.props.contacts.map((contact) => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`
                }}
              ></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button
                className="contact-remove"
                onClick={() => this.props.onDeleteContact(contact)}
              >
                remove
              </button>
            </li>
          ))}
        </ol>
      </>
    )
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ListContacts;
