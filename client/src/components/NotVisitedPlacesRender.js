import React from 'react';

import VisitedPlacesList from './VisitedPlacesList'

function VisitedPlacesList(props) {
  return (
    <div>
      <h3>Places List</h3>
      { props.places.map(place => (
          key={place.id}
          id={place.id}
          name={place.name}
          description={place.description}
          address={place.address}
          onDelete={()=> props.onDelete(place.id)}
      ))}
    </div>
  );
}

export default VisitedPlacesList;
