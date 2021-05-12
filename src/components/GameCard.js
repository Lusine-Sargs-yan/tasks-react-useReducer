import React from 'react';
import { Card, Icon, Image } from "semantic-ui-react";


export default function GameCard({ image, name, occupation, id, handleClick }) {
  // const [cardsData, setCardData] = useState(cardInitialData);
  // const { image, name, occupation } = cardsData;
  return (
    <Card >
      <Image src={image} wrapped ui={true} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{occupation}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='power' id={id} onClick={(e) => handleClick(e)} />
          111 Friends
        </a>
      </Card.Content>
    </Card>
  );
}

//<Icon name='power' id={id} onClick={(e) => handleClick(e)}/>
//<Card onClick={(event) => handleClick(event)}>