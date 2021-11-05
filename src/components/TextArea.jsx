import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { label, testId, id, type, name, value, func } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <textarea
          data-testid={ testId }
          id={ id }
          type={ type }
          name={ name }
          value={ value }
          onChange={ func }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default TextArea;
