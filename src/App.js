import React from 'react';
import {Route} from 'react-router-dom';

import Header from './components/Header.js';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import CharacterCard from './components/CharacterCard.js';
import CharacterDetails from './components/CharacterDetails';

export default function App() {
  return (
    <main>
      <Header />

      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/characterlist' component={CharacterList} />
      <Route path='/characterlist/:id' component={CharacterDetails} />
    </main>
  );
}
