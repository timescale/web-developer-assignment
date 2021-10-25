import React from "react";
import styled from "styled-components";

const MovieCard = (props) => {
  const Title = styled.h1`
    font-size: 1.3rem;
    text-align: center;
    font-family: Inter;
    font-weight: 100;
  `;

  const Wrapper = styled.div`
    height: 25vw;
    width: 20vw;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    position: relative;
  `;

  const Image = styled.img`
    width: 100%;
    height: 87%;
  `;

  const Badge = styled.div`
    height: 2vw;
    width: 2vw;
    line-height: 2vw;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 4%;
    top: 4%;
    background: white;
    border: 1px solid black;
    text-align: center;
  `;

  const { title, vote_average, poster_path } = props.movieInfo;
  return (
    <Wrapper>
      <Badge>{vote_average}</Badge>
      <Image
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="movie-poster"
      />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default MovieCard;
