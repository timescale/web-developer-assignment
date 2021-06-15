import React from "react";
import moment from "moment";

//  styles
import styles from "./styles/Modal.module.css";

const Modal = ({
  title,
  id,
  poster_path,
  release_date,
  overview,
  vote_average,
  vote_count,
  closeModal,
}) => (
  <div key={`${title}_${id}`} className={styles.Modal__information}>
    <div className={styles.Modal__information___top}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.closeBtn}>
        <button onClick={closeModal}></button>
      </div>
    </div>

    <div className={styles.Modal__information___bottom}>
      <div className={styles.image}>
        <img
          src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}/${poster_path}`}
          alt={title}
        />
      </div>
      <div className={styles.Information}>
        <p className={styles.Information__text}>
          <span>Release date : </span>
          {moment(release_date).format("LL")}
        </p>
        <p className={styles.Information__overview}>{overview}</p>
        <p className={styles.Information__text}>
          <span>{vote_average}</span> / 10 ({vote_count} total votes)
        </p>
      </div>
    </div>
  </div>
);

export default Modal;
