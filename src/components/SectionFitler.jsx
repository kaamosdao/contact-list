/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { setFilter } from '../store/slices/contactSlice';
import { hasContacts, selectFilter } from '../store/selectors/contactSelectors';

import s from './styles/SectionFilter.module.scss';

const SectionFilter = () => {
  const dispatch = useDispatch();

  const showInput = useSelector(hasContacts);
  const filter = useSelector(selectFilter);

  const [_, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setSearchParams({ search: value });
    dispatch(setFilter(value));
  };

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
            onChange={handleChange}
          />
        </label>
      )}
    </section>
  );
};

export default SectionFilter;
