import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const spanTrunfo = <span id="trunfo" data-testid="trunfo-card">Super Trunfo</span>;
    const trunfoCard = (cardTrunfo === true) ? spanTrunfo : '';

    return (
      <div className="card-preview">
        <span id="name-card-preview" data-testid="name-card">{ cardName }</span>
        <img
          id="image-card-preview"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p id="description-preview" data-testid="description-card">{ cardDescription }</p>
        <span id="atribute1-preview" data-testid="attr1-card">{ cardAttr1 }</span>
        <span id="atribute2-preview" data-testid="attr2-card">{ cardAttr2 }</span>
        <span id="atribute3-preview" data-testid="attr3-card">{ cardAttr3 }</span>
        <span id="rare-card-preview" data-testid="rare-card">{ cardRare }</span>
        {trunfoCard}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
