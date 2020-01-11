import React from 'react';

import Input from '../../shared/components/FormElements/Input'
import './NewPlace.css';

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input type="text" element="input" label="Title" validators={[]} />
    </form>
  )
}

export default NewPlace;