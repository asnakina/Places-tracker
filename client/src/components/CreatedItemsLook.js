import React from 'react';

function CreatedItemsLook(props){
  return(
    <form onSubmit={props.onSubmit} >
      <label>
        New place name:
        <input
          type='text'
          name='name'
          value={props.name}
          onChange={props.onChange}/>
      </label>
      <label>
        Description:
        <input
          type='text'
          name='description'
          value={props.description}
          onChange={props.onChange}/>
      </label>
      <label>
        Visited(answer yes or no):
        <input
          type='text'
          name='visited'
          value={props.visited}
          onChange={props.onChange}/>
      </label>
      <label>
        Location:
        <input
          type='text'
          name='address'
          value={props.address}
          onChange={props.onChange}/>
      </label>

      <button type="submit">Submit</button>
    </form>
)}

export default CreatedItemsLook;
