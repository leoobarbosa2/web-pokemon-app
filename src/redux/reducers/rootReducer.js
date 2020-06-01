import { combineReducers } from 'redux';
import pokemonListReducer from './pokemonListReducer';

const rootReducer = combineReducers({
  list: pokemonListReducer,
});

export default rootReducer;
