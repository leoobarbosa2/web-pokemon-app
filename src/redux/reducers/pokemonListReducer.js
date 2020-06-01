import { uuid } from 'uuidv4';
import * as actions from '../actions/pokemonActions';

const initialState = {
  pokemons: [],
  isLoading: false,
};

function pokemonListReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.FETCH_POKEMON_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.FETCH_POKEMON_SUCCESS:
      return {
        pokemons: [...state.pokemons, { ...payload.pokemon, id: uuid() }],
        isLoading: false,
      };
    case actions.FETCH_POKEMON_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default pokemonListReducer;
