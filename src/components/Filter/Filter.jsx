import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ value, onFilterChange }) => (
  <Input
    type="text"
    value={value}
    onChange={onFilterChange}
    placeholder="Search by name"
  />
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
