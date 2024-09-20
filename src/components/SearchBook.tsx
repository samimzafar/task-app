// import React, { FC, useState } from 'react'
// import { useBookContext } from '../context/BookContext'
// import { Book } from '../Utils/types'
// const SearchBook: FC = () => {
//     const { searchBooks } = useBookContext()
//     const [query, setQuery] = useState('')
//     const [results, setResults] = useState<Book[]>([])
//     const handleSearch = () => {
//         const searchResults = searchBooks(query)
//         setResults(searchResults)
//     }
//     return (
//         <div className=''>
//             <input type="text" placeholder='Search' value={query} onChange={event => setQuery(event.target.value)} />
//             <button onClick={handleSearch}>Search</button>
//             <div>
//                 {results.map((book: Book) => (
//                     <div key={book.ISBN}>
//                         <h3>{book.title}</h3>
//                         <p>{book.author}</p>
//                         <p>{book.publicationYear}</p>
//                         <p>{book.genre}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default SearchBook

import React, { FC, useState } from 'react'
import { useBookContext } from '../context/BookContext'
import { Book } from '../Utils/types'

const SearchBook: FC = () => {
  const { searchBooks } = useBookContext()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Book[]>([])

  const handleSearch = () => {
    const searchResults = searchBooks(query)
    setResults(searchResults)
  }

  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      <div className="flex items-center justify-center mb-5">
        <input
          type="text"
          placeholder="Search by title, author, or genre..."
          value={query}
          onChange={event => setQuery(event.target.value)}
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </div>

      {results.length > 0 ? (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          {results.map((book: Book) => (
            <div key={book.ISBN} className="mb-4 p-3 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
              <p className="text-sm text-gray-600">Author: {book.author}</p>
              <p className="text-sm text-gray-600">Published: {book.publicationYear}</p>
              <p className="text-sm text-gray-600">Genre: {book.genre}</p>
            </div>
          ))}
        </div>
      ) : (
        query && <p className="text-gray-600 text-center mt-4">No books found. Try a different query.</p>
      )}
    </div>
  )
}

export default SearchBook
