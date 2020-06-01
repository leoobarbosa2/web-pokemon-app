import { all } from 'redux-saga/effects';

import pokemonSaga from './pokemonSaga';

export default function* rootSaga() {
  return yield all([pokemonSaga()]);
}
