import React from 'react';
import './item.css';

function PlacesItemsLook(props) {
  return (
    <div className="item">
      <div>Name: {props.name}</div>
      <div>Description: {props.description}</div>
      <div>Visited(Yes/No): {props.visited ? 'Yes' : 'No'}</div>
      <div>Location: {props.address}</div>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  )
}

export default PlacesItemsLook;
