import React, {useEffect, useState} from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className='character-list'>
      {characters.map(character => {
        return <CharacterCard character={character} />;
      })}
    </section>
  );
}
