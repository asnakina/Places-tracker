import React from 'react';
import CreatedItemsLook from './CreatedItemsLook'

function CreatePlaceFormRender(props) {
  return (
    <div>
      <h3>Put a new country in the list</h3>
      <CreatedItemsLook
        name={props.name}
        description={props.description}
        visited={props.visited}
        address={props.address}
        onSubmit={props.onSubmit}
        onChange={props.onChange}
      />
    </div>
  );
}

export default CreatePlaceFormRender;
