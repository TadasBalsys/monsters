import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholderString, handleChange }) => (
    <input className='search' type='search' placeholder={placeholderString} onChange={handleChange} />
)
