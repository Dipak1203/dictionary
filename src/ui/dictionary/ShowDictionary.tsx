import React from 'react';

interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
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
  if (!data) {
    return;
  }
  const data1 = data[0];

  return (
    <div className="mt-4 dictionary__page">
      <h2 className="font-semibold mb-2"> {
        data1?.word ? <span>{data1?.word}</span> : <span>No word found</span>
      } </h2>
      {data1?.meanings && data1.meanings.length > 0 ? (
        data1.meanings.map((meaning: Meaning, index: number) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Part of Speech: {meaning.partOfSpeech}</h3>
            <ul className="list-disc list-inside">
              {meaning.definitions.map((definition, idx) => (
                <li key={idx}>
                  <p className="mb-1">
                    <span className="font-semibold">Definition:</span> {definition.definition}
                  </p>
                  {definition.synonyms.length > 0 && (
                    <p className="mb-1">
                      <span className="font-semibold">Synonyms:</span> {definition.synonyms.join(', ')}
                    </p>
                  )}
                  {definition.antonyms.length > 0 && (
                    <p className="mb-1">
                      <span className="font-semibold">Antonyms:</span> {definition.antonyms.join(', ')}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No meanings available.</p>
      )}

      <div>
        <h3>Phonetics</h3>
        <ul>
          {data1?.phonetics?.map((phonetic: Phonetic, index: number) => (
            <li key={index}>
              <p>Text: {phonetic.text}</p>
              {phonetic.audio && (
                <audio controls>
                  <source src={phonetic.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
              <p>
                Source: <a href={phonetic.sourceUrl}>{phonetic.sourceUrl}</a>
                <br />
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>
          Source URLs:{' '}
          {data1?.sourceUrls?.map((url: string, index: number) => (
            <a key={index} href={url}>
              {url}
            </a>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ShowDictionary;
