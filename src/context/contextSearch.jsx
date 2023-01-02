import { createContext, useEffect, useReducer } from "react";
import { searchReducer } from "../reducer/searchReducer";

export const ContextSearch = createContext();

const initialState = JSON.parse(localStorage.getItem("lastSearch")) || [];

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  useEffect(() => {
    localStorage.setItem("lastSearch", JSON.stringify(state));
  }, [state]);

  return (
    <ContextSearch.Provider value={{ lastSearch: state, dispatch }}>
      {children}
    </ContextSearch.Provider>
  );
};

export default SearchProvider;
