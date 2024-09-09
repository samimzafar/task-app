// src/components/AddMovie.tsx
import React, { useState } from 'react';
import { Movie } from '../types';

interface AddMovieProps {
  onAddMovie: (movie: Movie) => void;
}

const AddMovie: React.FC<AddMovieProps> = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const handleSubmit = () => {
    const newMovie: Movie = {
      id: Date.now().toString(),
      title,
      genre,
      releaseDate,
      reviews: [],
    };
    onAddMovie(newMovie);
    setTitle('');
    setGenre('');
    setReleaseDate('');
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="mb-2 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
        className="mb-2 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="date"
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Add Movie
      </button>
    </div>
  );
};

export default AddMovie;
