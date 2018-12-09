import React from 'react';
import VisitedPlacesList from './VisitedPlacesList'
import PlacesItemsLook from './PlacesItemsLook'

function VisitedPlacesRender(props) {
  return (
    <div>
      <h3>Places List</h3>
      { props.places.map(eachPlace => (
        <PlacesItemsLook
          key={eachPlace.id}
          id={eachPlace.id}
          name={eachPlace.name}
          description={eachPlace.description}
          visited={eachPlace.visited}
          address={eachPlace.address}
          onDelete={()=> props.onDelete(eachPlace.id)}
        />
      ))}
    </div>
  );
}

export default VisitedPlacesRender;
