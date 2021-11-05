import './App.css';
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameCard: '',
      descriptionCard: '',
      atribute1Card: 0,
      atribute2Card: 0,
      atribute3Card: 0,
      imageCard: '',
      raridadeCard: '',
      trunfoCard: false,
      buttonSave: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox' ? target.checked : target.value);
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick() {
    console.log('Esperando Implementação');
  }

  render() {
    const { nameCard,
      descriptionCard,
      atribute1Card,
      atribute2Card,
      atribute3Card,
      imageCard,
      raridadeCard,
      trunfoCard,
      buttonSave,
    } = this.state;

    return (
      <fieldset>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nameCard }
          cardDescription={ descriptionCard }
          cardAttr1={ atribute1Card }
          cardAttr2={ atribute2Card }
          cardAttr3={ atribute3Card }
          cardImage={ imageCard }
          cardRare={ raridadeCard }
          cardTrunfo={ trunfoCard }
          hasTrunfo={ false }
          isSaveButtonDisabled={ buttonSave }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ nameCard }
          cardDescription={ descriptionCard }
          cardAttr1={ atribute1Card }
          cardAttr2={ atribute2Card }
          cardAttr3={ atribute3Card }
          cardImage={ imageCard }
          cardRare={ raridadeCard }
          cardTrunfo={ trunfoCard }
        />
      </fieldset>
    );
  }
}

export default App;
