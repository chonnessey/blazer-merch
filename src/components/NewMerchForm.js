import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types'

function NewMerchForm(props){

  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()})
  }

  return (
    <>
      <form onSubmit={handleNewMerchFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Product Name' />
        <input
          type='text'
          name='description'
          placeholder='Description' />
        <textarea
          name='quantity'
          placeholder='Enter the quantity.' />
        <button className="btn-lg btn-primary" type='submit'>Add Merch!</button>
      </form>
    </>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
}

export default NewMerchForm;