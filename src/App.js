import React, {Component} from "react";
import "./App.css"
import List from "./components/List";



export default function () {
    return (
        <div className='App'>
            <h1 className="movie-list-title">The Most Amazing Movie List </h1>
            <List />
        </div>
    )

}