import React from "react";

//  Styles
import styles from "./styles/MovieCard.module.css";

const Movie = ({ title, poster, clicked, keyed, rating }) => {
  const displayError = "Information Not Set!!!";
  return (
    <div className={styles.Card} onClick={clicked} key={keyed}>
      <div className={styles.Card__poster}>
        <img src={poster} alt={title} className={styles.Card__poster___image} />
      </div>
      <p className={styles.Card__rating}>{rating}</p>

      <div className={styles.Card__details}>
        <p className={styles.Card__details___title}>
          {title !== "" ? title : displayError}
        </p>
      </div>
    </div>
  );
};

export default Movie;
