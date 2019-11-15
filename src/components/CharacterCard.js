import React from 'react';

export default function CharacterCard(props) {
  return (
    <div>
      <h3>{props.character.name}</h3>
      <img src={props.character.image} at={props.character.name} />
    </div>
  );
}
