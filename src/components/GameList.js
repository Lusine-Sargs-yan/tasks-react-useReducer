import React from 'react';
import { Grid } from "semantic-ui-react";
import GameCard from './GameCard';

export default function GameList({cardsData, handleClick}) {

  return (
    <Grid container relaxed columns={4}>
      {cardsData.map(({name, image, id, occupation}) => {
        console.log(id, 'id::::');
        return (
          <Grid.Column key={id}>
            <GameCard {...{name, id, image, occupation}} handleClick={handleClick}/>
          </Grid.Column>

        )
      })}

    </Grid>
  )
}
//<GameCard  name={name} image={image}, id={id} occupation={occupation}/>