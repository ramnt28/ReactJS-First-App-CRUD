import React, { Component } from "react";

class Movies extends Component {
  state = {
    movies: [
      {
        id: 0,
        title: "Bramstra",
      },
    ],
  };

  handleAddMovies = () => {
    console.log("Add Movies Method");

    // ...Spread Operator & SsetState

    // 1st Step
    const methodMovies = this.state.movies;

    // 2nd Step
    const single_movie = {
      id: this.state.movies.length + 1,
      title: "Batman",
    };

    // 3rd Step | Movies + single_movie
    const mergeObject = [...methodMovies, single_movie];

    this.setState({
      movies: mergeObject,
    });
  };

  handleUpdateMovies = (movie) => {
    console.log(movie);

    const { id, title } = movie;

    const methodMovies = this.state.movies;
    const indexx = methodMovies.indexOf(movie);

    methodMovies[indexx].title = "UPDATED";

    this.setState({
      movies: methodMovies,
    });

    // console.log(updateSingleMovie);
  };

  render() {
    return (
      <div className="container">
        <button className="btn btn-dark" onClick={() => this.handleAddMovies()}>
          Add Movies
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>Movie ID</th>
              <th>Title</th>
              <th>Update Movie</th>
              <th>Delete Movie</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr>
                  <td>{movie.id}</td>
                  <td>{movie.title}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.handleUpdateMovies(movie)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
