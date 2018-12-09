import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import VisitedPlacesList from './components/VisitedPlacesList'
import NotVisitedPlacesList from './components/NotVisitedPlacesList'
import MainCreatePlaceList from './components/MainCreatePlaceList'

const BASE_URL = 'http://localhost:7777'
//but our client side is in http://localhost:3000

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: ''
    }
  }

  setView = (view) => {
    this.setState({
      screen: view
    });
  }

  render() {
    let content;
    switch (this.state.screen) {
      case 'mainCreateView':
       content = (<MainCreatePlaceList />);
      break;
      case 'visitPlacesView':
       content = (<VisitedPlacesList />);
      break;
      case 'notvisitPlacesView':
       content = (<NotVisitedPlacesList />);
      break;
      default:
       content = (<MainCreatePlaceList />);
    }

  return (
      <div className="App">
        <h1>Your check list of places around the world: </h1>
        <nav>
          <button onClick={() => this.setView('visitPlacesView')}>Visited places</button>
          <button onClick={() => this.setView('notvisitPlacesView')}>Plan to see these places</button>
          <button onClick={() => this.setView('mainCreateView')}>Main</button>
        </nav>
      </div>
    );
  }
}

export default App;
