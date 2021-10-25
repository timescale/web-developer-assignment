import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from './movie_card';

const HomePage = () => {

    const [movieList, setMovieList] = useState([]);

    const getMovies = () => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
          )
          .then((res) => {
            setMovieList(res.data.results)
          });
    };

    useEffect(() => {
        async function fetchData () {
            const response = await getMovies();
            console.log(response)
        }
        return fetchData();
    }, []) 


    return(
        <ul>
            {console.log("movies", movieList)}
            {movieList.map(movie => (
                <MovieCard movieInfo={movie} />
            ))}
        </ul>
    )
};

export default HomePage;