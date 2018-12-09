import React from 'react';
import NotVisitedPlacesList from './NotVisitedPlacesList'
import PlacesItemsLook from './PlacesItemsLook'
//but our client side is in http://localhost:3000

function VisitedPlacesList(props) {
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

export default VisitedPlacesList;
