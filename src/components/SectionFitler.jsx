import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  hasContacts,
  selectLoading,
} from '../store/selectors/contactSelectors';

import s from './styles/SectionFilter.module.scss';

const SectionFilter = () => {
  const showInput = useSelector(hasContacts);
  const isLoading = useSelector(selectLoading);

  const [searchParams, setSearchParams] = useSearchParams();

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
            value={searchParams.get('search') || ''}
            onChange={(e) =>
              setSearchParams({ search: e.target.value.toLowerCase().trim() })
            }
            disabled={isLoading}
          />
        </label>
      )}
    </section>
  );
};

export default SectionFilter;
