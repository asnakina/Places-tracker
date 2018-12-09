import React from 'react';

function PlacesItemsLook(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h4>Description: {props.description}</h4>
      <h3>Visited(yes/no): {props.visited}</h3>
      <h3>Location: {props.address}</h3>
      <button
        onClick={props.onDelete}
      >Delete</button>
    </div>
  )
}

export default PlacesItemsLook;
