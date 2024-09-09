// src/App.tsx
import React, { useState } from 'react';
import { Movie, Review } from './types';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (movie: Movie) => {
    setMovies([...movies, movie]);
  };

  const deleteMovie = (id: string) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const addReview = (id: string, review: Review) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, reviews: [...movie.reviews, review] } : movie
      )
    );
  };

  return (
    <div>
      <AddMovie onAddMovie={addMovie} />
      <MovieList movies={movies} onDelete={deleteMovie} onAddReview={addReview} />
    </div>
  );
};

export default App;
