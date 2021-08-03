import React from 'react'

function Card(props) {
    const imageBaseUrl = `https://image.tmdb.org/t/p/original/${props.data.poster_path}`
    return (
        <div className="card" onClick={() => props.onClick()}>
            <div className="position"><p className="radius">{props.data.vote_average}</p></div>
            <img className="img" src={imageBaseUrl} alt="poster" />
            <div style={{textAlign: 'center'}}>
                <p>{props.data.title}</p>
            </div>
        </div>
    )

}
export default Card