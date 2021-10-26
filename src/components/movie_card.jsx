import React from "react";
import styled from "styled-components";
import Modal from "./modal";
import useModal from "./useModal";

  const Title = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.3rem;
    font-family: Inter;
  `;

  const Wrapper = styled.div`
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    position: relative;
    display: flex;
    flex-direction: column;
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
    flex-shrink: 0;
  `;

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
