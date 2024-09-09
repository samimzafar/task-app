// src/components/MovieList.tsx
import React from 'react';
import { MovieListProps } from '../types';

const MovieList: React.FC<MovieListProps> = ({ movies, onDelete, onAddReview }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
          <p>{movie.releaseDate}</p>
          <button onClick={() => onDelete(movie.id)}>Delete</button>
          <button onClick={() => onAddReview(movie.id, { rating: 5, comment: 'Great movie!' })}>Add Review</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
