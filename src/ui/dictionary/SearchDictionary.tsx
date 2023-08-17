// src/ui/dictionaryApp/DictionaryApp.tsx

import React, { useState } from 'react';
import { fetchApiData } from '../../api/fetchAPI';
import ShowDictionary from './ShowDictionary';

const DictionaryApp: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (searchTerm) {
      try {
        setIsLoading(true); // Start loading
        const res = await fetchApiData(searchTerm);
        // console.log({res});
        setData(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // End loading
      }
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-l"
          placeholder="Enter a word..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white rounded-r p-2 hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {/* Display fetched data */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data && <ShowDictionary data={data} />
      )}
    </div>
  );
};

export default DictionaryApp;
