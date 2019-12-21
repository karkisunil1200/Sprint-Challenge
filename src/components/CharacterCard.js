import React from 'react';

import {Character, Name} from './CharacterCardSyled';

export default function CharacterCard(props) {
  return (
    <Character>
      <Name>{props.character.name}</Name>
      <img src={props.character.image} alt={props.character.name} />
    </Character>
  );
}
