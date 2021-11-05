import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, testId, id, name } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <select
          data-testid={ testId }
          id={ id }
          name={ name }
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
};

export default Select;
