import styled from "styled-components"
import Flex from "./utils/Flex"
import {useLoading} from "../hooks/LoadingContext"
import {useMovies} from "../hooks/MovieContext"
import {useSearchQuery} from "../hooks/SearchQuery"
import { useEffect } from "react";
import { latestMovies } from "../datasources/movies";
import MovieListItem from "./MovieListItem";

const Container = styled(Flex)`
  padding-top: 37px;
`
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 23px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
const Query = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #898E9A;
`;
const MoviesContainer = styled(Flex)`
  width: 100%;
  justify-content: center;
  @media (min-width: 768px) {
  }
`;
const Movies = () =>{
  const { movies, setMovies} = useMovies();
  const {query, setQuery} = useSearchQuery();
  const {isLoading, setIsLoading} = useLoading();
  
  const ResultsTitle = () => {
    if(query == "" || query == null){
      return(
        <Title>
          Most Recent movies
        </Title>
      )
    }
    return(
      <Title>
        Movies matching:  <Query>{query}</Query>
      </Title>
    )
  }
  return(
    <Container direction="column"> 
      <ResultsTitle />
      <MoviesContainer>
        {movies != null && movies.length > 0 && movies.map(m => <MovieListItem movie={m} key={m.id} />)}
      </MoviesContainer>
    </Container>
  )
}
export default Movies;