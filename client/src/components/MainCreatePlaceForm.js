import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
//import { getAllClasses } from '../services/classesApiService';
//import CreatePlaceForm from './components/CreatePlaceForm'

const BASE_URL = 'http://localhost:7778'

class MainCreatePlaceForm extends Component {
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

  // async componentDidMount() {
  //   await this.getAllPlaces();
  // }

  // async getAllPlaces() {
  //  const response = await axios(`${BASE_URL}/places`);
  //  const places = response.data;
  //  this.setState({
  //    places: places
  //  });
  // }
  //
  // async getVisitedPlaces() {
  //   const response = await axios(`$BASE_URL/places/visited`);
  //   const places = response.data;
  //   this.setState({
  //     places: places
  //   });
  // }
  //
  // async getNotvisitedPlaces() {
  //   const response = await axios(`$BASE_URL/places/notvisited`);
  //   const places = response.data;
  //   this.setState({
  //     places: places
  //   });
  // }

  async createPlace(placesData) {
    const response = await axios.post(`${BASE_URL}/places`, placesData);
    const onePlace= response.data
    this.setState(prevState => {
      return {
        places: [...prevState.places, onePlace],
        formData: {
          name: '',
          description: '',
          address: ''
        }
      }
    });
  }

  handleChange = (e) => {
    //updated state.formData when 'input' fields change
    const {name, value} = e.target;
    this.setState(prevState => {
      return {
        formData: {
          ...prevState.formData,
          [name]: value
        }
      }
    })
  }

//POST state.formData to your server's /students path
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.formData);
    await this.createPlace(this.state.formData);
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
        <h1>Places around the world:</h1>
        <CreatePlaceForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          name={this.state.formData.name}
          describtion={this.state.formData.description}
          visited={this.state.formData.visited}
          address={this.state.formData.address}
         />
      </div>
    );
  }
}

export default MainCreatePlaceForm;
