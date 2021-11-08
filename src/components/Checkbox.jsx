import React from 'react';
import PropTypes from 'prop-types';

class CheckBox extends React.Component {
  render() {
    const { label, testId, id, type, name, checked, func } = this.props;
    return (
      <div className={ testId }>
        <label htmlFor={ id }>{label}</label>
        <input
          data-testid={ testId }
          id={ id }
          type={ type }
          name={ name }
          checked={ checked }
          onChange={ func }
        />
      </div>
    );
  }
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  func: PropTypes.func.isRequired,
};

export default CheckBox;
