function pokemonFormatter(data) {
  return {
    // ...data,
    name: data.name,
    typeName: data.types[0].type.name,
    urlImage: data.sprites.front_default,
    weight: data.weight,
  };
}

export default pokemonFormatter;
