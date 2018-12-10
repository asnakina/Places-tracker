import React, { Component } from 'react';
import axios from 'axios';
import CreatePlaceFormRender from './CreatePlaceFormRender'
import PlacesItemsLook from './PlacesItemsLook';
import './item.css';
//import { getVisitedPlaces } from '../services/placesApiService';

const BASE_URL = 'http://localhost:7777'
//but our client side is in http://localhost:3000

const initialFormData = {
  name: '',
  description: '',
  visited: '',
  address: ''
};

class MainCreatePlaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      formData: initialFormData
    }
  this.fetchPlaces = this.fetchPlaces.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
}

async componentDidMount(){
  //const places = await this.fetchPlaces();
  await this.fetchPlaces()
}

async fetchPlaces() {
  const resp = await axios.get(`${BASE_URL}/places`);
  this.setState({
    //places: places
    places: resp.data
  });
  // return resp.data;
}

  async createPlace(placesData) {
    await axios.post(`${BASE_URL}/places`, placesData);
    // const response = await axios.post(`${BASE_URL}/places`, placesData);
    // const onePlace= response.data
    // this.setState(prevState => {
    //   return {
    //     places: [...prevState.places, onePlace],
    //     formData: {
    //       name: '',
    //       description: '',
    //       address: ''
    //     }
    //   }
    // });
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
    });
  }

  handleDelete = async (id) => {
    await axios.delete(`${BASE_URL}/places/${id}`);
    this.fetchPlaces();
  }

//POST state.formData to your server's /students path
  handleSubmit = async (e) => {
    e.preventDefault();
    debugger
    await this.createPlace(this.state.formData);
    this.setState({formData: initialFormData});
    this.fetchPlaces();
  }

  showPlaces() {
    return (
      <ul>
        {this.state.places.map(place => {
            return (
              <li key={place.id}>
                <PlacesItemsLook
                  id={place.id}
                  name={place.name}
                  description={place.description}
                  visited={place.visited}
                  address={place.address}
                  onDelete={this.handleDelete}
                />
              </li>
            )
          })}
      </ul>
    )
  }

  render() {
    return (
       <div className="App">
         <h1>Places around the world:</h1>
             {this.showPlaces()}
               <CreatePlaceFormRender
                 onChange={this.handleChange}
                 onSubmit={this.handleSubmit}
                 name={this.state.formData.name}
                 description={this.state.formData.description}
                 visited={this.state.formData.visited}
                 address={this.state.formData.address}
               />
      </div>
     );
   }
 }

export default MainCreatePlaceList;
