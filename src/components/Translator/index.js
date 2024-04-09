import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'

export function Translator() {
  const [phrase, setPhrase] = useState('');
  const [translatedSentence, setTranslatedSentence] = useState('');

  const handleInputChange = (event) => {
    setPhrase(event.target.value);
  };

  const handleTranslateClick = () => {
    axios.post(
      'http://localhost:8100/translate',
      { phrase },
      { headers: { Accept: 'application/json' } }
    )
      .then(response => {
        setTranslatedSentence(response.data.translation)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='translator-container'>
      <label htmlFor="sentenceInput">Write your sentence:</label>
      <input
        type="text"
        id="sentenceInput"
        value={phrase}
        placeholder='Write your sentence here...'
        onChange={handleInputChange}
      />
      <button onClick={handleTranslateClick}>Translate</button>
      <div className='translated-sentence'>{translatedSentence}</div>
    </div>
  );
};
