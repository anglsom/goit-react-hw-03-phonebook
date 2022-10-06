import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

export default function Filter({ value, onChange }) {
let inputFilterId = nanoid();
return (
<div className={css.filter}>
<label className={css.filterLabel} htmlFor={inputFilterId}>
    Find contacts by name
</label>
<input
    id={inputFilterId}
    className={css.filterInput}
    type="text"
    value={value}
    onChange={onChange}
/>
</div>
);
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};