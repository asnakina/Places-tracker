import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import { getAllClasses } from '../services/classesApiService';
//import VisitedPlacesRender from './components/VisitedPlacesRender'

const BASE_URL = 'http://localhost:7778'

class VisitedPlacesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      formData: {
        name: '',
        description: '',
        visited: '',
        address: ''
      }
    }
  }

  async componentDidMount() {
    await this.getVisitedPlaces();
  }

  async getVisitedPlaces() {
    const response = await axios(`$BASE_URL/places/visited`);
    const places = response.data;
    this.setState({
      places: places
    });
  }

  handleDelete = async (id) => {
    console.log(`Deleted place with id ${id}`);
    await axios.delete(`${BASE_URL}/places/${id}`);
    this.setState(prevState => {
      return {
        places: prevState.places.filter(thePlace => thePlace.id !== id)
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Places already visited:</h1>
        <div>
        <VisitedPlacesList
          places = {this.state.places}
          onDelete={this.handleDelete}
        />
       </div>
    );
  }
}

export default VisitedPlacesList;
