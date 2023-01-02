import { TypesLastSearch } from "../types/types";

export const searchReducer = (state, action) => {
  switch (action.type) {
    case TypesLastSearch.SET_LAST_SEARCH:
      return [action.payload, ...state];

    default:
      return state;
  }
};
