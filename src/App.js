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
      raridadeCard: 'Normal',
      trunfoCard: false,
      buttonSave: true,
      baralho: [],
    };
    this.clearInputs = this.clearInputs.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox' ? target.checked : target.value);
    this.setState({ [name]: value }, () => {
      const {
        nameCard,
        descriptionCard,
        atribute1Card,
        atribute2Card,
        atribute3Card,
        imageCard,
        buttonSave,
      } = this.state;
      const atribute1Number = Number(atribute1Card);
      const atribute2Number = Number(atribute2Card);
      const atribute3Number = Number(atribute3Card);
      const atributeMin = 0;
      const atributeMax = 90;
      const sumAtribute = atribute1Number + atribute2Number + atribute3Number;
      const geralAtribute = 210;
      this.setState({
        buttonSave: false,
      });
      if (nameCard === '' || descriptionCard === '' || imageCard === '') {
        this.setState({ buttonSave: true });
      }
      if (atribute1Card < atributeMin || atribute1Card > atributeMax) {
        this.setState({ buttonSave: true });
      }
      if (atribute2Card < atributeMin || atribute2Card > atributeMax) {
        this.setState({ buttonSave: true });
      }
      if (atribute3Card < atributeMin || atribute3Card > atributeMax) {
        this.setState({ buttonSave: true });
      }
      if (sumAtribute > geralAtribute) {
        this.setState({ buttonSave: true });
      }
      return buttonSave;
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { baralho,
      nameCard,
      descriptionCard,
      atribute1Card,
      atribute2Card,
      atribute3Card,
      imageCard,
      raridadeCard,
      trunfoCard } = this.state;
    this.setState(({
      baralho: [...baralho, { nameCard,
        descriptionCard,
        atribute1Card,
        atribute2Card,
        atribute3Card,
        imageCard,
        raridadeCard,
        trunfoCard,
      }],
    }));

    this.clearInputs();
  }

  clearInputs() {
    this.setState({
      nameCard: '',
      descriptionCard: '',
      atribute1Card: 0,
      atribute2Card: 0,
      atribute3Card: 0,
      imageCard: '',
      raridadeCard: 'Normal',
      trunfoCard: false,
    });
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
