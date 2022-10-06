import PropTypes from 'prop-types';
import css from './Forma.module.css';
import React, { Component } from 'react';

class Forma extends Component {
static propTypes = {
onSubmit: PropTypes.func.isRequired,
};

state = {
    name: '',
    number: '',
};

handleChange = e => {
const { name, value } = e.target;
this.setState({ [name]: value });
};
    
handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
};

reset = () => {
    this.setState({
    name: '',
    number: '',
});
};
    
render() {
return (
<form className={css.contactForm} onSubmit={this.handleSubmit}>
<label htmlFor={this.inputNameId}>Name</label>
<input
    className={css.contactFormInput}
    id={this.inputId}
    value={this.state.name}
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    onChange={this.handleChange}
/>

<label htmlFor={this.inputNumberId}>Number</label>
<input
    className={css.contactFormInput}
    id={this.inputId}
    value={this.state.number}
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
    onChange={this.handleChange}
/>
<button className={css.contactFormButton} type="submit">
    Add Contact
</button>
</form>
);
}
}

export default Forma;