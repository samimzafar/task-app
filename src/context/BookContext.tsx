import React, { createContext, ReactNode, useContext, useState } from "react";
import { Book } from "../Utils/types";

interface BookContextProps {
    books: Book[];
    addBook: (book: Book) => void;
    removeBook: (ISBN: string) => void;
    updateBook: (ISBN: string, updatedBook: Partial<Book>) => void;
    searchBooks: (query: string) => Book[];
    getBookStats: () => {
        totalBooks: number;
        averagePublicationYear: number;
        mostCommonGenre: string
    }
}

const BookContext = createContext<BookContextProps | undefined>(undefined);

export const BookProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [books, setBooks] = useState<Book[]>([]);
    const addBook = (book: Book) => setBooks([...books, book])
    const removeBook = (ISBN: string) => setBooks(books.filter(book => book.ISBN !== ISBN))
    const searchBooks = (query: string):Book[] => books.filter(book => 
        book.title.includes(query) || book.author.includes(query) || book.genre.includes(query)
    )

    const updateBook = (ISBN: string, updatedBook: Partial<Book>) => {
        setBooks(books.map(book => (book.ISBN == ISBN) ? { ...book, ...updateBook } : book))
    }


    const getBookStats = () => {
        const totalBooks = books.length
        if(totalBooks==0){
            return { totalBooks:0, averagePublicationYear:0, mostCommonGenre:"Empty" }
        }
        const averagePublicationYear = books.reduce((sum, book) => sum + book.publicationYear, 0) / totalBooks

        const genreCount: { [key: string]: number } = {}
        books.forEach(book => {
            genreCount[book.genre] = (genreCount[book.genre] || 0) + 1
        })
        const mostCommonGenre = Object.keys(genreCount).reduce((first, second) => genreCount[first] > genreCount[second] ? first : second)

        return { totalBooks, averagePublicationYear, mostCommonGenre }
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook, searchBooks, updateBook, getBookStats }}>
            {children}
        </BookContext.Provider>
    )

}


export const useBookContext = () => {
    const context = useContext(BookContext)
    if (!context) {
        throw new Error("useBookContext should be used in the BookProvider")
    }

    return context
}