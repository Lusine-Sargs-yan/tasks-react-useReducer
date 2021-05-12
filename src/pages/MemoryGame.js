//import 'semantic-ui-css/semantic.min.css'
import { useEffect, useReducer, useState } from "react";
import { Item } from "semantic-ui-react";
import GameList from "../components/GameList";
import {SET_CLICKED_CARD_ID, SET_GAME_FINISH, SHUFFEL_CARD, UPDATE_SCORE } from "../service/action-type";
import { CARDS_DATA, GameInitialState } from "../service/data";
import './MemoryGame.css';



const gameReducer = (state, {type, payload}) =>  {
  switch(type) {
    case SET_CLICKED_CARD_ID:
      let newData = state.cardsData.map((elem) => {
        console.log(payload.id, elem.id, "id:::");

        if(payload.id === elem.id.toString()) {
          console.log(payload.id, elem.id)
          // elem.clicked = true;

          return {...elem, clicked: true}
        }

        return elem;
      })
      console.log(newData, "newData:::")
      //return {...state, cardsData: [...state.cardsData]};
      return {...state, cardsData: [...newData]};
    case UPDATE_SCORE: 
      return {...state, userScore: state.userScore + 1}
    case SHUFFEL_CARD:
      let shuffelData = state.cardsData.sort((a, b) => 0.5 - Math.random());
      return {...state, cardsData: [...shuffelData]}
    case SET_GAME_FINISH:
      return {...state, gameState: {...payload}};
    default:
      return new Error('error');
  }


};

export default function MemoryGame() {
  // const [cardData, setCardData] = useState(CARDS_DATA);// useState() case

  const [state, dispatch] = useReducer(gameReducer, GameInitialState);
  console.log(state, 'state::::');

  useEffect(() => {
    if(state.userScore === state.cardsData.length) {
      dispatch({type: SET_GAME_FINISH, payload: {gameType: 'You won', isGameFinished: true}})
    }
  }, [state]);

  const handleCardClick = (event) => {
    console.log(event.target.id, 'event.target.id::::');

    let clickedElement = state.cardsData.find((elem) => elem.id.toString() === event.target.id);
    console.log(clickedElement, 'clickedElement:::');
    if(clickedElement.clicked) {
      dispatch({type: SET_GAME_FINISH, payload: {gameType: 'you lose', isGameFinished: true}});
      return;
    }
    dispatch({type: SET_CLICKED_CARD_ID, payload: {id: event.target.id}});
    dispatch({type: SHUFFEL_CARD});
    dispatch({type: UPDATE_SCORE});
  }

  return (
    <div className='container'>
      <h2 className="game-title">Click memory game</h2>
      <h3 className="game-rule" >Please, pay attention  to this rule, to win game your score should be {state.cardsData.length} point</h3>
      {state.gameState.isGameFinished ? <span className="message">{state.gameState.gameType}</span> : 
      <>
        <h3 className="score-title">Your score is {state.userScore}</h3>
        <GameList cardsData={state.cardsData} handleClick={handleCardClick} />
      </>
      }
    </div>
  )
}
