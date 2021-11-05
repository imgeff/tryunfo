import React from 'react';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <fieldset>
        <h1>Tryunfo</h1>
        <Form
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </fieldset>
    );
  }
}

export default App;
