              //this is just 2nd version without switching views/navbar:
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import VisitedPlacesRender from './components/VisitedPlacesRender'
import NotVisitedPlacesRender from './components/NotVisitedPlacesRender'
import MainCreatePlaceForm from './components/MainCreatePlaceForm'

const BASE_URL = 'http://localhost:7777'
//but our client side is in http://localhost:3000

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      places: [],
      placesVisited: [],
      placesNotVisited: [],
      formData: {
        name: '',
        description: '',
        visited: '',
        address: ''
      }
    }
    this.fetchPlaces = this.fetchPlaces.bind(this);
    this.fetchVisitedPlaces = this.fetchVisitedPlaces.bind(this);
    this.fetchNotVisitedPlaces = this.fetchNotVisitedPlaces.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){
    //const places = await this.fetchPlaces();
    await this.fetchPlaces()
    //const placesVisited = await this.fetchVisitedPlaces();
    await this.fetchVisitedPlaces()
    //const placesNotVisited = await this.fetchNotVisitedPlaces();
    await this.fetchNotVisitedPlaces()
  }

  async fetchPlaces() {
    const resp = await axios.get(`${BASE_URL}/places`);
    this.setState({
      places: resp.data
    });
    return resp.data;
  }

  async fetchVisitedPlaces(){
    const resp = await axios.get(`${BASE_URL}/placesvisited`);
    this.setState({
      placesVisited: resp.data
    });
    return resp.data;
  }

  async fetchNotVisitedPlaces(){
    const resp = await axios.get(`${BASE_URL}/placesnotvisited`);
    this.setState({
      placesNotVisitedYet: resp.data
    });
    return resp.data;
  }

  async createNewPlace(newPlaceData){
    const resp = axios.post(`${BASE_URL}/places`, newPlaceData);
    const place = resp.data;
    this.setState(prevState => {
      return{
        name: '',
        description: '',
        visited: '',
        address: ''
      }
    });
  }

  handleChange = (e) => {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.createNewPlace(this.state.formData);
  }

  handleDelete = async (id) => {
    await axios.delete(`${BASE_URL}/places/${id}`);
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => place.id !== id)
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Places</h1>
        <VisitedPlacesRender
          placesVisited={this.state.placesVisited}
          onDelete={this.handleDelete}
          />
        <NotVisitedPlacesRender
          placesNotVisited={this.state.placesNotVisited}
          onDelete={this.handleDelete}
          />
        <MainCreatePlaceForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          name={this.state.formData.name}
          description={this.state.formData.description}
          visited={this.state.formData.visited}
          address={this.state.formData.address}/>
      </div>
    );
  }
}

export default App0;
