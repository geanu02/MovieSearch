import React, {useState} from "react";
import MovieCard from './movieCard.js';
import apiConfig from "./utils/config.js";
import Button from "@mui/material/Button";

export default function SearchMovies() {
    
    // COMPONENT STATES
    // text: textbox input
    const [query, setQuery] = useState('');
    // array: query results
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        
        // Will change URL to PROCESS ENV variable prior to deployment
        const apiKey = apiConfig.url
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            // Fetch results for movies state 
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.results)
            setMovies(data.results);
        } catch(err){
            console.error(err);
        }
    }
    
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <input 
                    className="input" 
                    type="text" 
                    name="query"
                    placeholder="start here!"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                    required
                />
                <Button variant="contained" className="button" type="submit">find it!</Button>
            </form>
            <div className="card-list">
                {/* Load movie query */}
                {movies.filter(movie => movie.poster_path).map(movie => (
                    // Create MovieCard Components
                   <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>    
        </>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   