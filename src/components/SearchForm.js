import React, {useState, useEffect} from 'react';

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  // useEffect(() => {
  //   const result = props.characters.filter(character =>
  //     character.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setSearchResult(result);
  // }, [searchTerm]);

  const changeHandler = e => {
    props.handle(e);
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
          value={props.search}
        />
      </form>
    </section>
  );
}
