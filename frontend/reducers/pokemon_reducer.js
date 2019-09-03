import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      
      return action.pokemon
    default: return initialState
  
  }
}

export default pokemonReducer