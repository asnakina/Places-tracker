import React from 'react';
import './item.css';

function PlacesItemsLook(props) {
  return (
    <div className="item">
      <div>Name: {props.name}</div>
      <div>Description: {props.description}</div>
      <div>{props.visited ? 'Visited' : 'Not Visited'}</div>
      <div>Location: {props.address}</div>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  )
}

export default PlacesItemsLook;
