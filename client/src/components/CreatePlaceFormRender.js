import React from 'react';
import CreatedItemsLook from './CreatedItemsLook'

function CreatePlaceFormRender(props) {
  return (
    <div>
      <h3>Put new country in the list:</h3>
      { props.places.map(place => (
        <CreatedItemsLook
          key={place.id}
          id={place.id}
          name={place.name}
          description={place.description}
          address={place.address}
          onDelete={()=> props.onDelete(place.id)}
        />
      ))}
    </div>
  );
}

export default CreatePlaceFormRender;
