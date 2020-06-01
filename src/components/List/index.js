import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';

import './styles.scss';

function List() {
  const pokemons = useSelector((state) => state.list.pokemons);

  return (
    <section className="pokemon-list">
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          name={pokemon.name}
          typeName={pokemon.typeName}
          urlImage={pokemon.urlImage}
          weigth={pokemon.weight}
        />
      ))}
    </section>
  );
}

export default List;
