import React, { FC } from 'react'
import { BookProvider } from './context/BookContext'
import AddBook from './components/AddBook'
import BookList from './components/BookList'
import SearchBook from './components/SearchBook'
import UpdateBook from './components/UpdatedBook'
import Statistics from './components/Statistics'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const App: FC = () => {
  return (
    <BookProvider>
      <div className="bg-blue-500 p-10 h-screen flex flex-row justify-center items-start gap-10">
        {/* Left Side: Add, Update, List */}
        <div className="w-1/2 bg-gray-200 p-8 rounded-lg shadow-lg">
          <h1 className="text-red-600 font-extrabold text-center text-3xl mb-6">
            Book Management System
          </h1>
          <Tabs variant="unstyled">
            <TabList className="flex justify-between gap-1 mt-2">
              <Tab _selected={{ color: 'red' }} className="rounded-sm flex-1 bg-slate-900 text-white">
                Add Book
              </Tab>
              <Tab _selected={{ color: 'red' }} className="rounded-sm flex-1 bg-slate-900 text-white">
                Update Book
              </Tab>
              <Tab _selected={{ color: 'white' }} className="rounded-sm flex-1 bg-slate-900 text-white">
                List Books
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <AddBook />
              </TabPanel>
              <TabPanel>
                <UpdateBook />
              </TabPanel>
              <TabPanel>
                <BookList />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>

        <div className="w-1/2 flex flex-col gap-8">
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Search Books</h2>
            <SearchBook />
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Statistics</h2>
            <Statistics />
          </div>
        </div>
      </div>
    </BookProvider>
  )
}

export default App
