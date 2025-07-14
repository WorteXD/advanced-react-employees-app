// src/pages/SearchPage.jsx
import React, { useState, useContext } from 'react';
import { ApiConfigContext }             from '../context/ApiConfigContext';
import useEmployees                     from '../hooks/useEmployees';
import EmployeeList                     from '../components/EmployeeList';

const POPULAR = ['google','facebook','apple','microsoft','amazon'];

export default function SearchPage() {
  const { seed: defaultSeed, setSeed } = useContext(ApiConfigContext);
  const [localSeed, setLocalSeed]       = useState('');
  const [searchSeed, setSearchSeed]     = useState(defaultSeed);
  const { employees, loading, error }   = useEmployees(searchSeed);

  function onSubmit(e) {
    e.preventDefault();
    const seedToUse = localSeed.trim() || defaultSeed;
    setSeed(seedToUse);
    setSearchSeed(seedToUse);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="mb-4">
        <div className="input-group">
          <input
            list="popular-seeds"
            type="text"
            className="form-control"
            value={localSeed}
            onChange={e => setLocalSeed(e.target.value)}
            placeholder="Enter company name..."
            aria-label="Search seed"
          />
          <datalist id="popular-seeds">
            {POPULAR.map(s => (
              <option key={s} value={s} />
            ))}
          </datalist>
          <button className="btn btn-primary" type="submit">
            <i className="bi bi-search" aria-hidden="true" /> {/* bootstrap-icons */}
            <span className="visually-hidden">Search</span>
          </button>
        </div>
      </form>

      {loading && (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading…</span>
          </div>
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && employees.length === 0 && (
        <div className="text-center text-muted my-5">
          <p>No employees found.</p>
        </div>
      )}
      {!loading && !error && employees.length > 0 && (
        <EmployeeList employees={employees} />
      )}
    </>
  );
}
