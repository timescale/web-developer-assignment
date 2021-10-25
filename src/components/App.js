import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header"
import Movies from "./Movies"
import MovieDetailsModal from "./MovieDetailsModal"
import Flex from "./utils/Flex"
import {useLoading} from "../hooks/LoadingContext"
import {useMovies} from "../hooks/MovieContext"
import {useSearchQuery} from "../hooks/SearchQuery"
import { fetchData } from "../datasources/movies";

const Container = styled(Flex)`
`;
const Content = styled(Flex)`
	width: 1200px;
`;

const App = () => {
	// selectedMovie is not extracted to its own context cause it has only one client
	// so far, avoiding early optimization
  const [selectedMovie, setSelectedMovie]= useState(null);
  const {query} = useSearchQuery();
  const { setMovies} = useMovies();
  const {isLoading, setIsLoading} = useLoading();
	useEffect(()=> {
		fetchData(query, setIsLoading, setMovies);
  }, [query])
	return(
		<Container justify="center">
			<MovieDetailsModal />
			<Content direction="column">
				<Header />
				<Movies />
			</Content>
		</Container>
	);
}

export default App;
