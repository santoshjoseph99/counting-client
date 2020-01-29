import React from 'react';
import { CardSize } from './Card';
import CardsContainer from './CardsContainer';
import { Card } from 'blackjack-counting';

export interface IPlayerProps {
  cards: Card[];
  disableHit: boolean;
  actionCb: (p:number, x:boolean) => void;
  name: string;
  score: number;
}

const Player: React.FC<IPlayerProps> = (props:IPlayerProps) => {
  const {cards, actionCb, name, score, disableHit} = props;
  const getCard = React.useCallback(() => actionCb(1, true), [actionCb]);
  const stand = React.useCallback(() => actionCb(1, false), [actionCb]);
  const cardsStrList = cards.map(c => c.toShortString());

  return (
    <div>
      <div>
        <div>Player: {name}</div>
        <button onClick={getCard} disabled={disableHit}>Hit</button>
        <button onClick={stand}>Stand</button>
        <div><span>Blackjack Score: {score}</span></div>
        <CardsContainer list={cardsStrList} size={CardSize.small} />
      </div>
    </div>
  );
}

export default Player;