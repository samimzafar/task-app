// import React, { FC } from 'react'
// import { BookProvider } from './context/BookContext'
// import AddBook from './components/AddBook'
// import BookList from './components/BookList'
// import SearchBook from './components/SearchBook'
// import UpdateBook from './components/UpdatedBook'
// import Statistics from './components/Statistics'
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// const App: FC = () => {
//   return (
//     <BookProvider>
//       <div className='bg-blue-500 flex flex-col items-center p-16 h-screen'>
//         <div className='bg-gray-200  px-20 py-4 rounded-lg '>
//           <h1 className='text-red-600 font-extrabold text-center text-3xl'>Book Management System</h1>
//           <Tabs variant='unstyled'>
//             <TabList className='flex justify-between gap-1 mt-2'>
//               <Tab _selected={{ color: 'red' }} className='rounded-sm flex-1 bg-slate-900 text-white'>Add Book</Tab>
//               <Tab _selected={{ color: 'red' }} className='rounded-sm flex-1 bg-slate-900 text-white'>Update Book</Tab>
//               <Tab _selected={{ color: 'white', }} className='rounded-sm flex-1 bg-slate-900 text-white'>List Books</Tab>
//             </TabList>
//             <TabPanels>
//               <TabPanel>
//                 <AddBook />
//               </TabPanel>
//               <TabPanel>
//                 <UpdateBook />
//               </TabPanel>
//               <TabPanel>
//                 <BookList />
//               </TabPanel>
//             </TabPanels>
//           </Tabs>
//         </div>

//         <SearchBook />
//         <Statistics /> 
//       </div>
//     </BookProvider>
//   )
// }

// export default App


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
      <div className='bg-blue-500 flex flex-col items-center p-16 h-screen'>
        <div className='bg-gray-200 px-20 py-4 rounded-lg mb-10 shadow-lg'>
          <h1 className='text-red-600 font-extrabold text-center text-3xl mb-6'>
            Book Management System
          </h1>
          <Tabs variant='unstyled'>
            <TabList className='flex justify-between gap-1 mt-2'>
              <Tab _selected={{ color: 'red' }} className='rounded-sm flex-1 bg-slate-900 text-white'>
                Add Book
              </Tab>
              <Tab _selected={{ color: 'red' }} className='rounded-sm flex-1 bg-slate-900 text-white'>
                Update Book
              </Tab>
              <Tab _selected={{ color: 'white' }} className='rounded-sm flex-1 bg-slate-900 text-white'>
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

        {/* Styled SearchBook Section */}
        <div className='w-full max-w-4xl bg-gray-200 p-6 rounded-lg shadow-lg mb-10'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4 text-center'>Search Books</h2>
          <SearchBook />
        </div>

        {/* Styled Statistics Section */}
        <div className='w-full max-w-4xl bg-gray-200 p-6 rounded-lg shadow-lg'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4 text-center'>Statistics</h2>
          <Statistics />
        </div>
      </div>
    </BookProvider>
  )
}

export default App
