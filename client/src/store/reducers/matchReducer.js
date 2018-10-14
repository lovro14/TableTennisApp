import {
  SET_MATCHES_LOADING,
  GET_MATCHES,
  MATCH_DETAILS
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  match: null,
  matches: null,
  head2head: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHES_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_MATCHES: {
      return {
        ...state,
        matches: action.payload,
        loading: false
      };
    }
    case MATCH_DETAILS: {
      return {
        ...state,
        loading: false,
        match: action.payload.match,
        matches: action.payload.historyMatches.reverse(),
        head2head: action.payload.headToHead
      };
    }
    default:
      return state;
  }
};

export default reducer;
