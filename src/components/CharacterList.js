import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import {Characters} from './CharacterCardSyled';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results);

        const lists = res.data.results.filter(list =>
          list.name.toLowerCase().includes(search.toLowerCase())
        );
        setCharacters(lists);
      })
      .catch(err => {
        console.log(err);
      });
  }, [search]);

  const changeHandle = e => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form>
        <input
          type='text'
          name='search'
          placeholder='Search...'
          onChange={changeHandle}
          value={search}
        />
      </form>

      <Characters>
        {characters.map((character, index) => {
          return (
            <Link to={`/characterlist/${character.id}`}>
              <CharacterCard key={index} character={character} />
            </Link>
          );
        })}
      </Characters>
    </>
  );
}
