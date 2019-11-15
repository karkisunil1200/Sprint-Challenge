import React, {useEffect, useState} from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import {Characters} from './CharacterCardSyled';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <SearchForm characters={characters} />
      <Characters>
        {characters.map((character, index) => {
          return <CharacterCard key={index} character={character} />;
        })}
      </Characters>
    </>
  );
}
