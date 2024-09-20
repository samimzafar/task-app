
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useBookContext } from '../context/BookContext'
import { Book } from '../Utils/types'

const UpdateBook: FC = () => {
    const { updateBook } = useBookContext()
    const [ISBN, setISBN] = useState('')
    const [updatedBook, setUpdatedBook] = useState<Book>({
        title: "", author: "", publicationYear: 0, ISBN: '', genre: ""
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUpdatedBook({ ...updatedBook, [event.target.name]: event.target.value })
    }
    const handleUpdatedSubmit = (event: FormEvent) => {
        event.preventDefault()
        updateBook(ISBN, updatedBook)
        setUpdatedBook({ title: '', author: "", publicationYear: 0, ISBN: "", genre: "" })

    }
    return (
        <form onSubmit={handleUpdatedSubmit}
        className='flex flex-col'
        >
            <label className='font-bold py-2'>Title</label>
            <input value={updatedBook.title} type="text" name="title" onChange={handleChange} placeholder='Title' 
             className='p-2 rounded-lg w-96'
            />
            <label className='font-bold py-2'>Author</label>
            <input value={updatedBook.author} type="text" name="author" onChange={handleChange} placeholder='Author'
             className='p-2 rounded-lg w-96'
            />
            <label className='font-bold py-2' >Publication Year</label>
            <input value={updatedBook.publicationYear} type='number' name="publicationYear" onChange={handleChange} placeholder='Published Year'
             className='p-2 rounded-lg w-96'
            />
            <label className='font-bold py-2' >ISBN</label>
            <input value={updatedBook.ISBN} type="text" name="ISBN" onChange={handleChange} placeholder='ISBN'
             className='p-2 rounded-lg w-96'
            />
            <label className='font-bold py-2' >Genre</label>
            <input value={updatedBook.genre} type="text" name="genre" onChange={handleChange} placeholder='Genre' 
             className='p-2 rounded-lg w-96'
            />
            <button type="submit"
            className='mt-4 bg-blue-600 p-2 rounded-lg hover:bg-red-800 text-white'
            >Update Book</button>
        </form>
    )
}

export default UpdateBook