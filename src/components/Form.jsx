import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
import CheckBox from './Checkbox';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <Input
          label="Nome da Carta"
          testId="name-input"
          id="name-input-Card"
          type="text"
          name="nameCard"
          value={ cardName }
          func={ onInputChange }
        />
        <TextArea
          label="Descrição"
          testId="description-input"
          id="description-input-Card"
          type="textarea"
          name="descriptionCard"
          value={ cardDescription }
          func={ onInputChange }
        />
        <Input
          label="Atributo 1"
          testId="attr1-input"
          id="atribute1-Card"
          type="number"
          name="atribute1Card"
          value={ cardAttr1 }
          func={ onInputChange }
        />
        <Input
          label="Atributo 2"
          testId="attr2-input"
          id="atribute2-Card"
          type="number"
          name="atribute2Card"
          value={ cardAttr2 }
          func={ onInputChange }
        />
        <Input
          label="Atributo 3"
          testId="attr3-input"
          id="atribute3-Card"
          type="number"
          name="atribute3Card"
          value={ cardAttr3 }
          func={ onInputChange }
        />
        <Input
          label="Imagem da Carta"
          testId="image-input"
          id="image-input-Card"
          type="text"
          name="imageCard"
          value={ cardImage }
          func={ onInputChange }
        />
        <Select
          label="Raridade da Carta"
          testId="rare-input"
          id="rare-input-Card"
          name="raridadeCard"
          value={ cardRare }
          func={ onInputChange }
        />
        <CheckBox
          label="Super Trybe Trunfo"
          testId="trunfo-input"
          id="trunfo-input-Card"
          type="checkbox"
          name="trunfoCard"
          checked={ cardTrunfo }
          func={ onInputChange }
        />
        <button
          data-testid="save-button"
          name="button-save"
          type="submit"
          id="save-card"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
