// src/components/AddMovie.tsx
import React, { useState } from 'react';
import { Movie } from '../types';
import UniqueIdGenerator from '../utils/UniqueIdGenerator';

interface AddMovieProps {
  onAddMovie: (movie: Movie) => void;
}

const AddMovie: React.FC<AddMovieProps> = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const idGenerator = UniqueIdGenerator.getInstance();
  const handleSubmit = () => {
    const newMovie: Movie = {
      id: idGenerator.getNextId(),
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
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" />
      <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
      <button onClick={handleSubmit}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
