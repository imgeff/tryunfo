import React from 'react';
import PropTypes from 'prop-types';

class Baralho extends React.Component {
  render() {
    const {
      nameCard,
      descriptionCard,
      imageCard,
      atribute1Card,
      atribute2Card,
      atribute3Card,
      rarity,
      trunfoCard,
      handleClick,
    } = this.props;

    const spanTrunfo = <span id="trunfo">Super Trunfo</span>;
    const trunfo = (trunfoCard === true) ? spanTrunfo : '';

    return (
      <div className="card">
        <span id="name-card">{ nameCard }</span>
        <img
          id="image-card"
          src={ imageCard }
          alt={ nameCard }
        />
        <p id="description-preview">{ descriptionCard }</p>
        <span id="atribute1-preview">{ atribute1Card }</span>
        <span id="atribute2-preview">{ atribute2Card }</span>
        <span id="atribute3-preview">{ atribute3Card }</span>
        <span id="rare-card-preview">{ rarity }</span>
        {trunfo}
        <button
          data-testid="delete-button"
          type="button"
          onClick={ () => handleClick(nameCard) }
        >
          excluir
        </button>
      </div>
    );
  }
}

Baralho.propTypes = {

  nameCard: PropTypes.string.isRequired,
  descriptionCard: PropTypes.string.isRequired,
  imageCard: PropTypes.string.isRequired,
  rarity: PropTypes.string.isRequired,
  trunfoCard: PropTypes.bool.isRequired,
  atribute1Card: PropTypes.string.isRequired,
  atribute2Card: PropTypes.string.isRequired,
  atribute3Card: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Baralho;
