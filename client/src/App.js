import React, { Component } from 'react';
import './App.css';
import VisitedPlacesList from './components/VisitedPlacesList';
import NotVisitedPlacesList from './components/NotVisitedPlacesList';
import MainCreatePlaceList from './components/MainCreatePlaceList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'mainCreateView'
    }
  }

  setView = (view) => {
    this.setState({
      screen: view
    });
  }

  render() {
    //for switching between different views
    let content;
    switch (this.state.screen) {
      case 'mainCreateView':
       content = <MainCreatePlaceList />;
      break;
      case 'visitPlacesView':
       content = <VisitedPlacesList />;
      break;
      case 'notvisitPlacesView':
       content = <NotVisitedPlacesList />;
      break;
      default:
       content = <MainCreatePlaceList />;
    }

  return (
      <div className="App">
        <h1>Your check list of places around the world: </h1>
        <nav>
          <button onClick={() => this.setView('visitPlacesView')}>Visited places</button>
          <button onClick={() => this.setView('notvisitPlacesView')}>Plan to see these places</button>
          <button onClick={() => this.setView('mainCreateView')}>Main</button>
        </nav>
        { content }
      </div>
    );
  }

}

export default App;
