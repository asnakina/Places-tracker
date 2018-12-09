import React, { Component } from 'react';
import axios from 'axios';
import NotVisitedPlacesRender from './NotVisitedPlacesRender';
//import { getVisitedPlaces } from '../services/placesApiService';

const BASE_URL = 'http://localhost:7777'
//but our client side is in http://localhost:3000

class NotVisitedPlacesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      //placesNotVisited: [],
      formData: {
        name: '',
        description: '',
        visited: '',
        address: ''
      }
    }
    this.fetchNotVisitedPlaces = this.fetchNotVisitedPlaces.bind(this);
  }

  async componentDidMount() {
    await this.getNotVisitedPlaces();
  }

  async fetchNotvisitedPlaces() {
    const response = await axios(`$BASE_URL/placesnotvisited`);
    const places = response.data;
    this.setState({
      places: places
    });
  }

  handleDelete = async (id) => {
    console.log(`Deleted place with id ${id}`);
    await axios.delete(`${BASE_URL}/placesnotvisited/${id}`);
    this.setState(prevState => {
      return {
        places: prevState.places.filter(thePlace => thePlace.id !== id)
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Places around the world:</h1>
        <div>
         <NotVisitedPlacesList
          places = {this.state.places}
          onDelete={this.handleDelete}
         />
      </div>
    </div>
    );
  }
}

export default NotVisitedPlacesList;
