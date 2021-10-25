import React from "react";
import styled from "styled-components";

const MovieCard = (props) => {
  const Title = styled.h1`
    font-size: 1.3rem;
    text-align: center;
    color: red;
  `;

  const Wrapper = styled.div`
    height: 400px;
    width: 323px;
    border-radius: 10px;
    overflow: hidden;
    background-color: orange;
  `;

  const Image = styled.img`
    width: 100%;
    height: 90%

  `;

  const { title, vote_average, poster_path } = props.movieInfo;
  return (
    <Wrapper>
      <Image src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="movie-poster" />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default MovieCard;
