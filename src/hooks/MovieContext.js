import { useState, useEffect, createContext, useContext } from 'react'

const initialState = {
  movies: [],
  setMovies: () => {},
};
const MovieContext = createContext(initialState);

export const MovieProvider = ({children}) => {
  const [movies, setMovies] = useState([]);

  return(
    <MovieContext.Provider value={{movies, setMovies}} >
      {children}
    </MovieContext.Provider>
  )
}
export const useMovies = () => useContext(MovieContext);