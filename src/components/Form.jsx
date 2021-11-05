import React from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';

class Form extends React.Component {
  render() {
    return (
      <form>
        <Input
          label="Nome da Carta"
          testId="name-input"
          id="name-input-Card"
          type="text"
          name="nameCard"
          value=""
        />
        <TextArea
          label="Descrição"
          testId="description-input"
          id="description-input-Card"
          type="textarea"
          name="descriptionCard"
          value=""
        />
        <Input
          label="Atributo 1"
          testId="attr1-input"
          id="atribute1-Card"
          type="number"
          name="atribute1Card"
          value=""
        />
        <Input
          label="Atributo 2"
          testId="attr2-input"
          id="atribute2-Card"
          type="number"
          name="atribute2Card"
          value=""
        />
        <Input
          label="Atributo 3"
          testId="attr3-input"
          id="atribute3-Card"
          type="number"
          name="atribute3Card"
          value=""
        />
        <Input
          label="Imagem da Carta"
          testId="image-input"
          id="image-input-Card"
          type="text"
          name="imageCard"
          value=""
        />
        <Select
          label="Raridade da Carta"
          testId="rare-input"
          id="rare-input-Card"
          name="raridadeCard"
        />
        <Input
          label="Super Trybe Trunfo"
          testId="trunfo-input"
          id="trunfo-input-Card"
          type="checkbox"
          name="trunfoCard"
          value=""
        />
        <button data-testid="save-button" type="submit" id="save-card">Salvar</button>

      </form>
    );
  }
}

export default Form;
