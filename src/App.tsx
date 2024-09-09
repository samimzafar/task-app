// src/App.tsx
import React, { useState } from 'react';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import { Movie, Review } from './types';

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Library</h1>
      <AddMovie onAddMovie={addMovie} />
      <MovieList movies={movies} onDelete={deleteMovie} onAddReview={addReview} />
    </div>
  );
};

export default App;
