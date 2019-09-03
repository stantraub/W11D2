
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON'

// import * as APIUtil from ''

//action creators
export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

// //thunk action creators = async 

// export const grabAllPokemon = () => dispatch => (
//   APIUtil.fetchAllPokemon()
//     .then(response => dispatch(receiveAllPokemon(response)))
// );