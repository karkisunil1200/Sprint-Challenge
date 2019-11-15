import React, {useState} from 'react';

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const changeHandler = e => {
    setSearchTerm({[e.target.name]: e.target.value});
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
        />
      </form>
    </section>
  );
}
