import React, { useState } from 'react'
import { fetchApiData } from '../../api/fetchAPI'
import ShowDictionary from './ShowDictionary'
import { AiOutlineSearch } from 'react-icons/ai'
const DictionaryApp: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSearch = async () => {
    if (searchTerm) {
      try {
        setIsLoading(true) // Start loading
        const res = await fetchApiData(searchTerm)
        setData(res)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false) // End loading
      }
    }
  }

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      await handleSearch()
    }
  }

  return (
    <div className='search__page'>
      <div className='flex mb-4'>
        <span className='search__icon'>
          <AiOutlineSearch />
        </span>
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
          placeholder='Search'
        />
      </div>
      {/* Display fetched data */}
      {isLoading ? <p>Loading...</p> : data && <ShowDictionary data={data} />}
    </div>
  )
}

export default DictionaryApp
