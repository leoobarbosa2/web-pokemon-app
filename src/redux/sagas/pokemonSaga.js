import { put, all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import pokemonService from '../../services/pokemonService';
import pokemonFormatter from '../../formatters/pokemonFormatter';
import * as pokemonActions from '../actions/pokemonActions';

export function* fetchUser(action) {
  try {
    const response = yield call(
      pokemonService.getPokemonByName,
      action.payload.name
    );
    const pokemon = pokemonFormatter(response.data);
    yield put(pokemonActions.fetchPokemonSuccess(pokemon));
    toast.success('Another pokemon was catched!');
  } catch (e) {
    yield put(pokemonActions.fetchPokemonFail());
    toast.error('Apparently ocurred an error or the pokemon does not exists');
  }
}

function* featchPokemon() {
  yield takeLatest(pokemonActions.FETCH_POKEMON_REQUEST, fetchUser);
}

export default function* pokemonWatcher() {
  yield all([featchPokemon()]);
}
