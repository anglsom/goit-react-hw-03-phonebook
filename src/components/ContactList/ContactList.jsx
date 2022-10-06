import Item from 'components/Item';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';


export default function ContactList({ contacts, onDeleteContact }) {
return (
<ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
<li key={id} className={css.contactListItem}>
<Item
    name={name}
    number={number}
    onDeleteContact={() => onDeleteContact(id)}
/>
</li>
))}
</ul>
);
}

ContactList.propTypes = {
contacts: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
number: PropTypes.string.isRequired,
})
),
onDeleteContact: PropTypes.func.isRequired,
};