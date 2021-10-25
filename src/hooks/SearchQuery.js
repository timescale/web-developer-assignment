import { useState, useEffect, createContext, useContext } from 'react'

const initialState = {
  query: "",
  setQuery: () => {},
};
const SearchQueryContext = createContext(initialState);

export const SearchQueryProvider = ({children}) => {
  const [query, setQuery] = useState("");

  return(
    <SearchQueryContext.Provider value={{query, setQuery}} >
      {children}
    </SearchQueryContext.Provider>
  )
}
export const useSearchQuery = () => useContext(SearchQueryContext);