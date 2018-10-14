import {
  SET_PLAYERS_LOADING,
  GET_PLAYERS,
  GET_PLAYER
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  player: null,
  players: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYERS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PLAYERS:
      return {
        ...state,
        loading: false,
        players: action.payload
      };
    case GET_PLAYER:
      return {
        ...state,
        loading: false,
        player: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
