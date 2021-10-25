import { useState, createContext, useContext } from 'react'

const  initialState = {
  selectedMovie: null, 
  setSelectedMovie: () => {}
};
const SelectedMovieContext = createContext(initialState);

export const SelectedMovieProvider = ({children}) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return(
    <SelectedMovieContext.Provider value={{selectedMovie, setSelectedMovie}} >
      {children}
    </SelectedMovieContext.Provider>
  )
}
export const useSelectedMovie = () => useContext(SelectedMovieContext);