import React from 'react'
import Header from './ui/layout/Header'
import DictionaryApp from './ui/dictionary/SearchDictionary'
import ShowDictionary from './ui/dictionary/ShowDictionary'

const App: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-grow flex justify-center'>
        <DictionaryApp />
        <ShowDictionary data={null} />
      </div>
    </div>
  )
}

export default App
