import React, {Component} from "react";
import movieData from "../data/movies.json"
import ListItem from "./ListItem";

class List extends Component {
    constructor() {
        super();

        this.state = {
            movies: movieData
        }
    }

    render() {
        const moviesMap = this.state.movies.map(movie => {
            return <ListItem key={movie.id} movie={movie}/>
        })
        return <div>{moviesMap}

        </div>

    }
}
export default List