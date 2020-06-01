export const FETCH_POKEMON_REQUEST = '@POKEMON/FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = '@POKEMON/FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAIL = '@POKEMON/FETCH_POKEMON_FAIL';

export function fetchPokemonRequest(name) {
  return {
    type: FETCH_POKEMON_REQUEST,
    payload: {
      name,
    },
  };
}

export function fetchPokemonSuccess(pokemon) {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: {
      pokemon,
    },
  };
}

export function fetchPokemonFail() {
  return {
    type: FETCH_POKEMON_FAIL,
  };
}
