import React, { FC } from 'react'
import { useBookContext } from '../context/BookContext'

const Statistics: FC = () => {
    const { getBookStats } = useBookContext()
    const stats = getBookStats()
    console.log("🚀 ~=====> stats:", stats)
    return (
        <div>
            <h2>Statistics</h2>
            <p>Total Books: {stats.totalBooks}</p>
            <div>Average Publication Year: {stats.averagePublicationYear}</div>
            <p>Most Common Genre: {stats.mostCommonGenre}</p>
        </div>
    )
}

export default Statistics