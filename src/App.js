import './App.css';
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Baralho from './components/Baralho';

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
      rarity: 'normal',
      trunfoCard: false,
      buttonSave: true,
      baralho: [],
      copyBaralho: [],
      filters: { name: '', rarity: 'todas' },
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.filterCard = this.filterCard.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateTrunfoCard = this.validateTrunfoCard.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  handleClick(nameCard) {
    const { baralho } = this.state;
    const removeCard = baralho
      .filter((card) => (
        card.nameCard !== nameCard
      ));
    this.setState(({
      baralho: removeCard,
      copyBaralho: removeCard,
    }));
  }

  handleFilterChange({ target: { name, value } }) {
    this.setState((prevState) => ({ filters: { ...prevState.filters, [name]: value } }),
      () => {
        this.filterCard();
      });
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
      rarity,
      trunfoCard } = this.state;
    this.setState(({
      baralho: [...baralho, { nameCard,
        descriptionCard,
        atribute1Card,
        atribute2Card,
        atribute3Card,
        imageCard,
        rarity,
        trunfoCard,
      }],
      copyBaralho: [...baralho, { nameCard,
        descriptionCard,
        atribute1Card,
        atribute2Card,
        atribute3Card,
        imageCard,
        rarity,
        trunfoCard }],
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
      rarity: 'normal',
      trunfoCard: false,
    });
  }

  validateTrunfoCard() {
    let hasTrunfo = false;
    const { baralho } = this.state;
    const validate = baralho.some((carta) => (
      carta.trunfoCard === true
    ));
    if (validate === true) hasTrunfo = true;
    return hasTrunfo;
  }

  filterCard() {
    const { baralho, filters: { name, rarity } } = this.state;
    const filterNameAndRarity = baralho
      .filter((card) => card.nameCard.includes(name))
      .filter((card) => {
        if (rarity === 'todas') {
          return card.rarity !== rarity;
        }
        return card.rarity === rarity;
      });
    this.setState({ copyBaralho: filterNameAndRarity });
  }

  render() {
    const { nameCard,
      descriptionCard,
      atribute1Card,
      atribute2Card,
      atribute3Card,
      imageCard,
      rarity,
      trunfoCard,
      buttonSave,
      copyBaralho,
    } = this.state;

    const { handleClick } = this;

    return (
      <fieldset>
        <Form
          cardName={ nameCard }
          cardDescription={ descriptionCard }
          cardAttr1={ atribute1Card }
          cardAttr2={ atribute2Card }
          cardAttr3={ atribute3Card }
          cardImage={ imageCard }
          cardRare={ rarity }
          cardTrunfo={ trunfoCard }
          hasTrunfo={ this.validateTrunfoCard() }
          isSaveButtonDisabled={ buttonSave }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <div className="box-card-preview">
          <Card
            cardName={ nameCard }
            cardDescription={ descriptionCard }
            cardAttr1={ atribute1Card }
            cardAttr2={ atribute2Card }
            cardAttr3={ atribute3Card }
            cardImage={ imageCard }
            cardRare={ rarity }
            cardTrunfo={ trunfoCard }
          />
        </div>
        {copyBaralho.length > 0 && copyBaralho.map((carta, index) => (
          <Baralho
            key={ index }
            nameCard={ carta.nameCard }
            descriptionCard={ carta.descriptionCard }
            atribute1Card={ carta.atribute1Card }
            atribute2Card={ carta.atribute2Card }
            atribute3Card={ carta.atribute3Card }
            imageCard={ carta.imageCard }
            rarity={ carta.rarity }
            trunfoCard={ carta.trunfoCard }
            handleClick={ handleClick }
          />
        ))}
        <label htmlFor="name-filter">
          Filtrar:
          <input
            name="name"
            type="text"
            data-testid="name-filter"
            id="name-filter"
            onChange={ this.handleFilterChange }
          />
        </label>
        <select
          data-testid="rare-filter"
          name="rarity"
          onChange={ this.handleFilterChange }
        >
          Raridade
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </fieldset>
    );
  }
}

export default App;
