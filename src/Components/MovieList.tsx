// src/components/MovieList.tsx
import React from 'react';
import { MovieListProps } from '../types';

const MovieList: React.FC<MovieListProps> = ({ movies, onDelete, onAddReview }) => {
  return (
    <div className="p-4">
      {movies.map((movie) => (
        <div key={movie.id} className="mb-4 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold">{movie.title}</h3>
          <p className="text-gray-600">{movie.genre}</p>
          <p className="text-gray-600">{movie.releaseDate}</p>
          <button
            onClick={() => onDelete(movie.id)}
            className="bg-red-500 text-white p-2 rounded mr-2"
          >
            Delete
          </button>
          <button
            onClick={() => onAddReview(movie.id, { rating: 5, comment: 'Great movie!' })}
            className="bg-green-500 text-white p-2 rounded"
          >
            Add Review
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
