import React from 'react';

const MovieCard = (props) => {
    const {title, vote_average, poster_path} = props.movieInfo;
    return (
      <div>
        {console.log(props)}
        {title}
      </div>
    );
};

export default MovieCard;