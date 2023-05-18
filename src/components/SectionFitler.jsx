import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../store/slices/contactSlice';
import { hasContacts, selectFilter } from '../store/selectors/contactSelectors';

import s from './styles/SectionFilter.module.scss';

const SectionFilter = () => {
  const dispatch = useDispatch();

  const showInput = useSelector(hasContacts);
  const filter = useSelector(selectFilter);

  return (
    <section className={s.filterSection}>
      <h2 className="visually-hidden">Filter</h2>
      {showInput && (
        <label className={s.label} htmlFor="filter">
          Filter
          <input
            className={s.filterInput}
            type="text"
            name="filter"
            id="filter"
            value={filter}
            onChange={(e) =>
              dispatch(setFilter(e.target.value.toLowerCase().trim()))
            }
          />
        </label>
      )}
    </section>
  );
};

export default SectionFilter;
