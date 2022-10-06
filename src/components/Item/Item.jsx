import PropTypes from 'prop-types';
import css from './Item.module.css';

export default function Item({ name, number, onDeleteContact }) {
return (
<>
<span>
    - {name}: {number}
</span>
<button
    className={css.contactListItemButton}
    type="button"
    onClick={onDeleteContact}
>
    Delete
</button>
</>
);
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};