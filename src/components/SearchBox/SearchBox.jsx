import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchContacts } from '../../redux/filtersSlice';

export const SearchBox = () => {
  const searchQueryId = useId();
  const value = useSelector(state => state.filters.value);
  const dispatch = useDispatch();

  return (
    <div className={css.searchWrap}>
      <label htmlFor={searchQueryId}>Find contacts by name</label>
      <input
        className={css.searchField}
        type="text"
        name="searchQuery"
        placeholder="Search by name..."
        id={searchQueryId}
        value={value}
        onChange={e => dispatch(searchContacts(e.target.value))}
      />
    </div>
  );
};
