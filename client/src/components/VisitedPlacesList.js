import React, { Component } from 'react';
import axios from 'axios';
// import { getVisitedPlaces } from '../services/placesApiService';
import VisitedPlacesRender from './VisitedPlacesRender'

const BASE_URL = 'http://localhost:7777'
//but our client side is in http://localhost:3000

class VisitedPlacesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      //placesVisited: [],
      formData: {
        name: '',
        description: '',
        visited: '',
        address: ''
      }
    }
    this.fetchVisitedPlaces = this.fetchVisitedPlaces.bind(this);
  }

  async componentDidMount() {
    //const visitPlaces = await this.fetchVisitedPlaces();
    await this.fetchVisitedPlaces();
  }

  async fetchVisitedPlaces() {
    const response = await axios(`$BASE_URL/placesvisited`);
    const places = response.data;
    this.setState({
      places: places
    });
  }
  //or
  //const response = await axios(`$BASE_URL/placesvisited`);
  //this.setState({
  //places: response.data
  //});
  //}

  handleDelete = async (id) => {
    console.log(`Deleted place with id ${id}`);
    await axios.delete(`${BASE_URL}/placesvisited/${id}`);
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
        <VisitedPlacesList
          places = {this.state.places}
          onDelete={this.handleDelete}
        />
       </div>
    );
  }
}

export default VisitedPlacesList;
