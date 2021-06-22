import React from 'react'

function Model (props) {
    const imageBaseUrl = `https://image.tmdb.org/t/p/original/${props.data.poster_path}`
    return(
        <div className="model">
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{marginLeft:'20px'}}><p style={{fontWeight:'bold'}}>{props.data.title}</p></div>
            <div><button onClick={()=> props.onClick()}>x</button></div>
            </div>
            <div className="flex">
            <div className="w"><img className='img' src={imageBaseUrl} /></div>
            <div className="w">
                <p className="p"><span style={{fontWeight:'bold',paddingRight:'10px'}}>Release date:</span>{props.data.release_date}</p>
                <p className="">{props.data.overview}</p>
                <p className=""><span style={{fontWeight:'bold'}}>{props.data.vote_average}</span>/10 ( {props.data.vote_count} total votes)</p>
            </div>
            </div>
        </div>
    )
}
export default Model