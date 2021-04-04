import './App.css';
import { Component } from 'react';

import Container from './components/Container/Container';
import Phonebook from './components/Phonebook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Phonebook />
        </Container>
      </div>
    );
  }
}

export default App;
