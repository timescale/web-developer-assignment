import Flex from "./utils/Flex"
import styled from "styled-components";
import {useSelectedMovie} from "../hooks/SelectedMovieContext"

const Container = styled(Flex)`
  width: 280px;
  height: 348px;
  border: 1px solid #E1E3E6;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
  box-shadow: 1px 2px 8px 2px #0000001A;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: 7px 7px 18px 10px #0000001A;
  }
`
const Background = styled.div`
  height: 85%;
  flex-grow: 1;
  background-image: ${({image}) => `url(${image})`};
`
const MovieFooter = styled(Flex)`
  align-items: center;
  padding: 10px 0px;
`
const RatingContainer = styled(Flex)`
  align-items: center;
  position: absolute;
  top: 15px;
  left: 15px;
  background: white;
  border-radius: 50%;
  border: 1px solid #000000;
  width: 34px;
  height: 34px;
`
const MovieListItem = ({movie}) =>{
  const { setSelectedMovie} = useSelectedMovie();
  if(movie == null) return null;
  const movieImage = movie.poster_path == null 
    ? "https://via.placeholder.com/300x400.png?text=No+Image"
    : `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  const movieRating = movie.vote_average ?? "?";
  const openMovieDetails = () => {
    setSelectedMovie(movie.id)
  }
  const Rating = () =>(
    <RatingContainer justify="center">
      {movieRating}
    </RatingContainer>
  )
  return(
    <Container direction="column" onClick={openMovieDetails}> 
      <Rating />
      <Background image={movieImage} />
      <MovieFooter padding="5px" justify="center">{movie.title.slice(0,30)}</MovieFooter>
    </Container>
  )
}
export default MovieListItem;