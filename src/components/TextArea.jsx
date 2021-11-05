import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { label, testId, id, type, name, value } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <textarea
          data-testid={ testId }
          id={ id }
          type={ type }
          name={ name }
          value={ value }
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
};

export default TextArea;
