import React from 'react';
import {Link} from 'react-router-dom';

import {Picture, Container} from './WelcomePageStyled';

export default function WelcomePage() {
  return (
    <Container>
      <Picture>
        <img
          className='main-img'
          src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          alt='rick'
        />
      </Picture>
      <div className='btn'>
        <Link to='/characterlist'>
          <button> Characters </button>
        </Link>
      </div>
    </Container>
  );
}
