// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import React, { Component } from 'react';
import Section from './Section';
import Forma from './Forma';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

class App extends Component {
state = {
contacts: [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
],
filter: '',
};

componentDidMount() {
  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);

  if (parsedContacts) {
  this.setState({ contacts: parsedContacts });
  }
}

componentDidUpdate(prevProps, prevState) {
  const prevContacts = prevState.contacts;
  const nextContacts = this.state.contacts;

  if (nextContacts !== prevContacts) {
  localStorage.setItem('contacts', JSON.stringify(nextContacts));
}
}
  
submitHandler = data => {
const { name, number } = data;
const { contacts } = this.state;

const contact = {
  id: nanoid(),
  name,
  number,
};

  contacts.some(contact => contact.name === name)
  ? alert(`${name} is already in contacts`)
  : this.setState(({ contacts }) => ({
  contacts: [contact, ...contacts],
}));
};

deleteContact = id => {
this.setState(prevState => ({
  contacts: prevState.contacts.filter(contact => contact.id !== id),
}));
};

changeFilter = e => {
this.setState({ filter: e.target.value });
};

getFilteredContacts = () => {
const { filter, contacts } = this.state;
const normalizedFilter = filter.toLowerCase();

return contacts.filter(contact =>
  contact.name.toLowerCase().includes(normalizedFilter)
);
};

render() {
const visiableContacts = this.getFilteredContacts();

return (
<Section>
<h1>Phonebook</h1>
<Forma onSubmit={this.submitHandler} />

<h2>Contacts</h2>
<Filter value={this.state.filter} onChange={this.changeFilter} />
<ContactList
  contacts={visiableContacts}
  onDeleteContact={this.deleteContact}
/>
</Section>
);
}
}

export default App;