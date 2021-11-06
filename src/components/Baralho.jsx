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
      raridadeCard,
      trunfoCard,
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
        <span id="rare-card-preview">{ raridadeCard }</span>
        {trunfo}
      </div>
    );
  }
}

Baralho.propTypes = {

  nameCard: PropTypes.string.isRequired,
  descriptionCard: PropTypes.string.isRequired,
  imageCard: PropTypes.string.isRequired,
  raridadeCard: PropTypes.string.isRequired,
  trunfoCard: PropTypes.string.isRequired,
  atribute1Card: PropTypes.number.isRequired,
  atribute2Card: PropTypes.number.isRequired,
  atribute3Card: PropTypes.number.isRequired,
};
export default Baralho;
