import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, testId, id, name, value, func } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <select
          data-testid={ testId }
          id={ id }
          name={ name }
          onChange={ func }
          value={ value }
        >
          <option value="normal" name={ name }>Normal</option>
          <option value="raro" name={ name }>Raro</option>
          <option value="muito raro" name={ name }>Muito Raro</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Select;
