import React from 'react';
import PlacesItemsLook from './PlacesItemsLook'

function VisitedPlacesListRender(props) {
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

export default VisitedPlacesListRender;
