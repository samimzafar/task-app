// src/types.ts
export interface Movie {
    id: string;
    title: string;
    genre: string;
    releaseDate: string;
    reviews: Review[];
  }
  
  export interface Review {
    rating: number;
    comment: string;
  }
  
  export interface MovieProps {
    movie: Movie;
    onDelete: (id: string) => void;
    onAddReview: (id: string, review: Review) => void;
  }
  
  export interface MovieListProps {
    movies: Movie[];
    onDelete: (id: string) => void;
    onAddReview: (id: string, review: Review) => void;
  }
  