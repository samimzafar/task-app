import React, { FC } from "react"
import { useBookContext } from "../context/BookContext";
import { Book } from "../Utils/types";
import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
const BookList: FC = () => {
    const { books, removeBook } = useBookContext()
    const list: Book[] = [
        {
            title: "Oop", ISBN: "Syam", author: "Rohit", publicationYear: 2012, genre: "IT"
        },
        {
            title: "DSA", ISBN: "David", author: "fdg", publicationYear: 2012, genre: "IT"
        }
    ]
    return (
        <TableContainer className="">
            <Table variant='striped' colorScheme='teal'>
                <Thead >
                    <Tr className="w-96 justify-between flex mb-2">
                        <Th >Title</Th>
                        <Th>Author</Th>
                        <Th>Year</Th>
                        <Th>Genre</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {books.map((book: Book) => (
                        <Tr key={book.ISBN} className="w-96 justify-between flex mb-2">
                            <Td className="text-center">{book.ISBN}</Td>
                            <Td className="text-center">{book.title}</Td>
                            <Td>{book.author}</Td>
                            <Td>{book.publicationYear}</Td>
                            <Td>{book.genre}</Td>
                            <Button className="bg-red-300 rounded-sm" onClick={() => removeBook(book.ISBN)}>Remove</Button>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
export default BookList