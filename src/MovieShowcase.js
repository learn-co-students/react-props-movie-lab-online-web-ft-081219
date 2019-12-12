import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
   return movieData.map(e => {
      return(<MovieCard title = {e.title} IMDBRating = {e.IMDBRating} genres = {e.genres} poster = {e.poster}/>)
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
