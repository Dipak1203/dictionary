import React, { useState } from 'react';
import {AiFillPlayCircle} from 'react-icons/ai'
interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface Phonetic {
  text: string;
  audio: string;
  sourceUrl: string;
  license: {
    name: string;
    url: string;
  };
}

interface DictionaryData {
  word: string;
  meanings: Meaning[] | null;
  phonetics: Phonetic[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}

interface ShowDictionaryProps {
  data: DictionaryData | null;
}

const ShowDictionary: React.FC<ShowDictionaryProps> = ({ data }: any) => {
  const [selectedTab, setSelectedTab] = useState<string>('verb');
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  if (!data) {
    return null;
  }
  const data1 = data[0];

  const renderMeanings = data1?.meanings?.filter((meaning: any) => meaning.partOfSpeech === selectedTab);

  const maxDefinitionsToShow = 2; // Change this value to adjust the number of definitions to show
  const audioRef = React.createRef<HTMLAudioElement>();

  const handleAudioIconClick = () => {
    if (audioRef.current) {
      if (!audioPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setAudioPlaying(!audioPlaying);
    }
  };
  return (
    <div className='mt-4 dictionary__page shadow-lg'>
    <div className='mb-2 flex items-center'>
        {data1?.phonetics[0]?.audio && (
          <div className='mr-2 py-4 flex cursor-pointer' onClick={handleAudioIconClick}>
            <AiFillPlayCircle size={40}  />
            <span className='ml-5 mt-2'>{`${data1?.phonetics[0]?.text}`}</span>
          </div>
        )}
        <div style={{ display: 'none' }}>
          {data1?.phonetics[0]?.audio && (
            <audio ref={audioRef}>
              <source src={data1?.phonetics[0]?.audio} type='audio/mpeg' />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      </div>
      <div className='mb-4'>
        <button className={`mr-4 verb ${selectedTab === 'verb' ? 'btn' : ''}`} onClick={() => setSelectedTab('verb')}>
          Verb
        </button>
        <button className={`mr-4 noun ${selectedTab === 'noun' ? 'btn' : ''}`} onClick={() => setSelectedTab('noun')}>
          Noun
        </button>
      </div>
      {renderMeanings && renderMeanings.length > 0 ? (
        renderMeanings.map((meaning: Meaning, index: number) => (
          <div key={index} className='mb-4'>
            <ul className='list-disc list-inside'>
              {meaning.definitions.slice(0, maxDefinitionsToShow).map((definition, idx) => (
                <li key={idx}>
                  <p className='mb-1'>{definition.definition}</p>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No meanings available.</p>
      )}
    </div>
  );
};

export default ShowDictionary;
