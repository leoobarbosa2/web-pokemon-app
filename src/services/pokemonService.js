import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

class PokemonService {
  static getPokemonByName(name) {
    return api.get(`/pokemon/${name}`);
  }
}

export default PokemonService;
