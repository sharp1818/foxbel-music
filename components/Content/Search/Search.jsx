
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { FaUser, FaSearch } from 'react-icons/fa';
import { SearchStyles } from './SearchStyles';

export const Search = ({ show, setShow }) => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?q=${decodeURI(value)}`);
    setValue('');
  };

  const handleBars = () => {
    setShow(!show);
  };

  return (
    <SearchStyles className="mb-2">
      <form className="bar-search" onSubmit={handleSearch}>
        <div
          className="hamburger"
          id={show ? 'active' : ''}
          onClick={handleBars}
        >
          <span></span>
        </div>
        {/* corregir el css del buscador */}
        <div className="search">
          <input
            type="text"
            placeholder="Buscar..."
            name="value"
            value={value}
            onChange={handleValue}
            required
          />
          {/* Corregir el button para que busque sin hacer click en enter */}
          <button className="btn-search" onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </form>
      <div className="user">
        <FaUser />
        <p>Sharp S.</p>
      </div>
    </SearchStyles>
  );
};
