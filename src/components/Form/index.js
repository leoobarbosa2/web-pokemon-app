import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as pokemonActions from '../../redux/actions/pokemonActions';

import './styles.scss';

function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(pokemonActions.fetchPokemonRequest(name.toLowerCase()));
    setName('');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        placeholder="Type pokemon name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="form__button" type="submit">
        Catch!
      </button>
    </form>
  );
}

export default Form;
