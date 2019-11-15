import React, {useState, useEffect} from 'react';

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const result = props.characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(result);
  }, [searchTerm]);

  const changeHandler = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className='search-form'>
      <h3>Search for the name!</h3>
      <form>
        <input
          type='text'
          name='search'
          placeholder='Search...'
          onChange={changeHandler}
          value={searchTerm}
          class='text'
        />
      </form>

      <ul>
        {searchResult.map(character => {
          return <li>{character}</li>;
        })}
      </ul>
    </section>
  );
}
