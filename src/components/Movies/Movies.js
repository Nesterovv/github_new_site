import React, {Component} from "react";

class Movies extends Compponent {
    state = {
        movies: []
    };
    compomentDidMount () {
    fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${query}&searchBy=title`)
    .then(res => res.json())
    .then(movies => {
        this.setState({movies:data.results});
        console.log(movies);
    });
}

render() {
    const {movies} = this.state
    const popMovies = movies ? (
    movies.map(movie => {
        return ( 
        <div key={movie.id}><img src={movie.poster_path} alt="Movie" /></div>  
    )
})
    )
    
    }
}