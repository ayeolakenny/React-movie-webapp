import React from "react"

const showList = props => (
  <div className="container">
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.Poster} className="card-img" alt="Movie"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Title: {props.Title}</h5>
            <p className="card-text">Released: {props.Released}</p>
            <p className="card-text">Genre: {props.Genre}</p>
            <p className="card-text">Plot: {props.Plot}</p>
            <p className="card-text">Language: {props.Language}</p>
            <p className="card-text">Awards: {props.Awards}</p>
            <p className="card-text">Production: {props.Production}</p>
            <p className="card-text">Rating: {props.imdbRating}</p>
            <p className="card-text"><small className="text-muted">Source: <a href="https://www.omdbapi.com">omdbapi</a></small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default showList