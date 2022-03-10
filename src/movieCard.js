import React from "react";

export default function MovieCard({ movie }){
    return (
         <div className="card"  >
            {/* Movie Poster */}
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                />
            {/* Movie Information */}
            <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p><small>RATING: {movie.vote_average}</small></p>
            </div>
            {/* Hover: Hidden Synopsis Card */}
            <div className="card--hidden">
                <p class="hid--title">Synopsis</p>
                <p class="hid--text">{movie.overview}</p>
                <p class="hid--title">Release Date</p>
                <p class="hid--text">{movie.release_date}</p>
            </div>
        </div>
    )
}

// w185_and_h278_bestv2