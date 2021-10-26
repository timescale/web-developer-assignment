import React from "react";
import Modal from "../Modal/modal";
import useModal from "../Modal/useModal";
import { Wrapper, Badge, Image, Title } from "./movieComponents";
import "./movie.css";

const MovieCard = (props) => {
  const {toggle, visible} = useModal();

  const { title, vote_average, poster_path } = props.movieInfo;
  return (
    <Wrapper onClick={toggle}>
      <Badge>{vote_average}</Badge>
      <Image
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="movie-poster"
      />
      <Title>{title}</Title>
      <Modal toggle={toggle} visible={visible} movieInfo={props.movieInfo}/>
    </Wrapper>
  );
};

export default MovieCard;
