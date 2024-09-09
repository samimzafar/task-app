// src/components/MovieList.tsx
import React, { useState } from 'react';
import { MovieListProps, Review } from '../types';

const MovieList: React.FC<MovieListProps> = ({ movies, onDelete, onAddReview }) => {
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const handleReviewSubmit = (movieId: string) => {
    const newReview: Review = { rating, comment };
    onAddReview(movieId, newReview);
    setRating(0);
    setComment('');
    setSelectedMovieId(null);
  };

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
            onClick={() => setSelectedMovieId(movie.id)}
            className="bg-green-500 text-white p-2 rounded"
          >
            Add Review
          </button>

          {selectedMovieId === movie.id && (
            <div className="mt-4">
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                placeholder="Rating"
                className="mb-2 p-2 border border-gray-300 rounded w-full"
              />
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Comment"
                className="mb-2 p-2 border border-gray-300 rounded w-full"
              />
              <button
                onClick={() => handleReviewSubmit(movie.id)}
                className="bg-blue-500 text-white p-2 rounded w-full"
              >
                Submit Review
              </button>
            </div>
          )}

          {movie.reviews.length > 0 && (
            <div className="mt-4">
              <h4 className="text-lg font-bold">Reviews:</h4>
              {movie.reviews.map((review, index) => (
                <div key={index} className="mt-2 p-2 border border-gray-300 rounded">
                  <p>Rating: {review.rating}</p>
                  <p>Comment: {review.comment}</p>
                </div>
              ))}
              <p className="mt-2 font-bold">
                Average Rating: {movie.reviews.reduce((acc, review) => acc + review.rating, 0) / movie.reviews.length}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
