import styled from "styled-components"
import Flex from "./utils/Flex"
import {useMovies} from "../hooks/MovieContext"
import {useSelectedMovie} from "../hooks/SelectedMovieContext"

const Container = styled(Flex)`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  align-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
`
const Content = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding: 20px 27px;
  position: relative;
  font-size: 14px;
  overflow-y: hidden;
  position: relative;
  @media (min-width: 768px) {
    width: 583px;
    height: 490px;
  }
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
    text-align: left;
  }
`;
const Image = styled.div`
  margin-right: 20px;
`;
const Details = styled(Flex)`
  overflow: auto;
`;
const TopButton = styled.div`
  position: absolute;
  color: #141E35;
  top: 22px;
  right: 22px;
  height: 24px;
  width: 24px;
  z-index: 30;
  border: 1px solid #131E35;
  cursor: pointer;
`;
const BodyContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  padding: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0;
  } 
`;
const MovieDetailsModal = () =>{
  const { movies} = useMovies();
  const { selectedMovie, setSelectedMovie} = useSelectedMovie();
  const closeModal = () => setSelectedMovie(null); 
  if(selectedMovie == null) return null;
  const movieDetails = movies.find(m => m.id === selectedMovie);
  const Body = () => {
      const movieImage = movieDetails.poster_path == null 
        ? "https://via.placeholder.com/300x400.png?text=No+Image"
        : `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`;

      return(
        <BodyContainer direction="column" wrap="no-wrap">
          <Image>
            <img src={movieImage} height="389px" width="266px" />
          </Image>
          <Details direction="column">
            <Flex>
              <b>Release date:</b>
              <span>{movieDetails.release_date}</span>
            </Flex>
            <p>
              {movieDetails.overview}
            </p>
            <Flex>
              <b>{movieDetails.vote_average}</b>
              <span>/10</span>
              &nbsp;
              ({movieDetails.vote_count} total votes)
            </Flex>
          </Details>
        </BodyContainer>
      )
  }
  const CloseButton = () => (
    <TopButton onClick={closeModal}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </TopButton>
  )
  return(
    <Container direction="column" justify="center" onClick={closeModal}> 
      <Content onClick={e => e.stopPropagation()}>
        <CloseButton />
        <Flex direction="column">
          <Title>{movieDetails.title}</Title>
          <Body />
        </Flex>
      </Content>
    </Container>
  )
}
export default MovieDetailsModal;