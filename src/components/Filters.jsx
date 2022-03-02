import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { handleFilterChange, trunfo } = this.props;
    return (
      <>
        <label htmlFor="name-filter">
          Filtrar:
          <input
            name="name"
            type="text"
            data-testid="name-filter"
            id="name-filter"
            onChange={ handleFilterChange }
            disabled={ trunfo }
          />
        </label>
        <select
          data-testid="rare-filter"
          name="rarity"
          onChange={ handleFilterChange }
          disabled={ trunfo }
        >
          Raridade
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="trunfo-filter">
          Super trunfo
          <input
            name="trunfo"
            type="checkbox"
            data-testid="trunfo-filter"
            id="trunfo-filter"
            onChange={ handleFilterChange }
          />
        </label>
      </>
    );
  }
}

Filters.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  trunfo: PropTypes.bool.isRequired,
};

export default Filters;
