import React, { Component } from 'react';
import CusNav from './Components/CusNav'
import Game from './Components/Practice/Game';
import './App.css';
import Container from 'react-bootstrap/Container';
import Editor from './Components/Compete/Editor';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CusNav />
        <Container>
          <Game />
        </Container>
      </React.Fragment>
    )
  }
}

export default App;
